// The repair ladder runs against a fake transport. The last test hits the real
// Gemini API and skips itself when GEMINI_API_KEY is absent.
import test from "node:test";
import assert from "node:assert/strict";
import "dotenv/config";

import { translateBlogContent, TranslateError } from "../utils/blogTranslate.js";
import { flattenTiptapText } from "../utils/tiptapText.js";

const body = () => ({
  type: "doc",
  content: [
    { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Fast bike" }] },
    {
      type: "paragraph",
      content: [
        { type: "text", text: "The " },
        { type: "text", marks: [{ type: "bold" }], text: "R15" },
        { type: "text", text: " is quick." },
      ],
    },
  ],
});

/** Builds a fake transport that replies with whatever `handler` returns. */
function fakeGemini(handler) {
  const calls = [];
  const fetchImpl = async (url, init) => {
    const request = JSON.parse(init.body);
    calls.push(request);
    const reply = handler(request, calls.length);
    if (reply instanceof Error) throw reply;
    if (reply?.__http) {
      return { ok: false, status: reply.__http, text: async () => reply.body || "" };
    }
    return {
      ok: true,
      status: 200,
      json: async () => ({
        candidates: [
          {
            finishReason: reply?.__finish || "STOP",
            content: { parts: [{ thoughtSignature: "x" }, { text: JSON.stringify(reply) }] },
          },
        ],
      }),
    };
  };
  return { fetchImpl, calls };
}

const echoUpper = (request) => ({
  title: "TAJUK",
  excerpt: "RINGKASAN",
  metaTitle: "META TAJUK",
  metaDescription: "META RINGKASAN",
  segments: request.contents[0].parts[0].text.includes('"segments"')
    ? JSON.parse(request.contents[0].parts[0].text.split("Input:\n")[1]).segments.map((s) => ({
        i: s.i,
        t: s.t.toUpperCase(),
      }))
    : [],
});

test("translates every segment and returns the scalars", async () => {
  const { fetchImpl, calls } = fakeGemini(echoUpper);

  const result = await translateBlogContent({
    targetLocale: "ms",
    title: "Fast bike",
    excerpt: "A quick review",
    body: body(),
    apiKey: "test-key",
    fetchImpl,
  });

  assert.equal(calls.length, 1, "one call for a short article");
  assert.equal(result.title, "TAJUK");
  assert.equal(result.excerpt, "RINGKASAN");
  assert.deepEqual(result.warnings, []);
  assert.equal(flattenTiptapText(result.body), "FAST BIKE THE R15 IS QUICK.");
  // Structure untouched by the round-trip.
  assert.equal(result.body.content[0].attrs.level, 2);
  assert.equal(result.body.content[1].content[1].marks[0].type, "bold");
});

test("sends the API key as a header and never in the URL", async () => {
  let seenUrl = null;
  let seenHeaders = null;
  const fetchImpl = async (url, init) => {
    seenUrl = url;
    seenHeaders = init.headers;
    return {
      ok: true,
      json: async () => ({
        candidates: [
          {
            finishReason: "STOP",
            content: {
              parts: [{ text: JSON.stringify({ title: "T", excerpt: "E", segments: [] }) }],
            },
          },
        ],
      }),
    };
  };

  await translateBlogContent({
    targetLocale: "zh",
    title: "t",
    excerpt: "e",
    body: body(),
    apiKey: "secret-key",
    fetchImpl,
  });

  assert.equal(seenHeaders["x-goog-api-key"], "secret-key");
  assert.ok(!seenUrl.includes("secret-key"), "key must not leak into the URL");
});

test("retries only the omitted segments, then reports what stayed in source", async () => {
  // First reply drops the last segment; the retry drops it again.
  const { fetchImpl, calls } = fakeGemini((request, n) => {
    const parsed = JSON.parse(request.contents[0].parts[0].text.split("Input:\n")[1]);
    const segments = parsed.segments
      .filter((s) => s.i !== 3)
      .map((s) => ({ i: s.i, t: s.t.toUpperCase() }));
    return n === 1
      ? { title: "T", excerpt: "E", segments }
      : { segments };
  });

  const result = await translateBlogContent({
    targetLocale: "ms",
    title: "Fast bike",
    excerpt: "A quick review",
    body: body(),
    apiKey: "test-key",
    fetchImpl,
  });

  assert.equal(calls.length, 2, "one initial call plus one targeted retry");
  // The retry asked for exactly the missing entry, not the whole article.
  const retried = JSON.parse(calls[1].contents[0].parts[0].text.split("entries. Return ONLY these, with the same \"i\" values:\n")[1]);
  assert.deepEqual(retried.segments.map((s) => s.i), [3]);

  assert.equal(result.warnings.length, 1);
  assert.match(result.warnings[0], /1 of 4 text segments kept their original wording/);
  // The untranslated segment keeps its source wording rather than vanishing.
  assert.equal(flattenTiptapText(result.body), "FAST BIKE THE R15 is quick.");
});

test("a failed retry does not fail the whole translation", async () => {
  const { fetchImpl } = fakeGemini((request, n) => {
    if (n === 2) return new Error("network down");
    const parsed = JSON.parse(request.contents[0].parts[0].text.split("Input:\n")[1]);
    return {
      title: "T",
      excerpt: "E",
      segments: parsed.segments.filter((s) => s.i === 0).map((s) => ({ i: s.i, t: "OK" })),
    };
  });

  const result = await translateBlogContent({
    targetLocale: "ms",
    title: "t",
    excerpt: "e",
    body: body(),
    apiKey: "test-key",
    fetchImpl,
  });

  assert.equal(result.warnings.length, 1);
  assert.match(flattenTiptapText(result.body), /^OK/);
});

test("clamps over-long meta fields and warns", async () => {
  const { fetchImpl } = fakeGemini(() => ({
    title: "T",
    excerpt: "E",
    metaTitle: "x".repeat(120),
    metaDescription: "y".repeat(400),
    segments: [{ i: 0, t: "A" }, { i: 1, t: "B" }, { i: 2, t: "C" }, { i: 3, t: "D" }],
  }));

  const result = await translateBlogContent({
    targetLocale: "ms",
    title: "t",
    excerpt: "e",
    body: body(),
    apiKey: "test-key",
    fetchImpl,
  });

  assert.equal(result.metaTitle.length, 60);
  assert.equal(result.metaDescription.length, 160);
  assert.equal(result.warnings.length, 2);
});

test("missing API key is a 503, not a crash", async () => {
  await assert.rejects(
    () => translateBlogContent({ targetLocale: "ms", body: body(), apiKey: "" }),
    (error) => error instanceof TranslateError && error.status === 503
  );
});

test("upstream 429 is surfaced as retryable, 400 is not", async () => {
  const rateLimited = fakeGemini(() => ({ __http: 429, body: "quota" }));
  await assert.rejects(
    () =>
      translateBlogContent({
        targetLocale: "ms",
        body: body(),
        apiKey: "k",
        fetchImpl: rateLimited.fetchImpl,
      }),
    (error) => error.status === 502 && error.retryable === true
  );

  const badRequest = fakeGemini(() => ({ __http: 400, body: "bad model" }));
  await assert.rejects(
    () =>
      translateBlogContent({
        targetLocale: "ms",
        body: body(),
        apiKey: "k",
        fetchImpl: badRequest.fetchImpl,
      }),
    (error) => error.status === 400 && error.retryable === false
  );
});

test("malformed JSON and safety stops are reported clearly", async () => {
  const malformed = {
    fetchImpl: async () => ({
      ok: true,
      json: async () => ({
        candidates: [{ finishReason: "STOP", content: { parts: [{ text: "not json" }] } }],
      }),
    }),
  };
  await assert.rejects(
    () =>
      translateBlogContent({
        targetLocale: "ms",
        body: body(),
        apiKey: "k",
        fetchImpl: malformed.fetchImpl,
      }),
    /malformed JSON/
  );

  const blocked = fakeGemini(() => ({ __finish: "SAFETY", segments: [] }));
  await assert.rejects(
    () =>
      translateBlogContent({
        targetLocale: "ms",
        body: body(),
        apiKey: "k",
        fetchImpl: blocked.fetchImpl,
      }),
    /stopped early \(SAFETY\)/
  );
});

test("refuses an article beyond the hard size ceiling", async () => {
  const huge = {
    type: "doc",
    content: Array.from({ length: 200 }, () => ({
      type: "paragraph",
      content: [{ type: "text", text: "x".repeat(1000) }],
    })),
  };
  await assert.rejects(
    () => translateBlogContent({ targetLocale: "ms", body: huge, apiKey: "k" }),
    (error) => error.status === 413
  );
});

test("chunks long articles across several calls", async () => {
  const long = {
    type: "doc",
    content: Array.from({ length: 320 }, (_, i) => ({
      type: "paragraph",
      content: [{ type: "text", text: `Paragraph ${i}` }],
    })),
  };
  const { fetchImpl, calls } = fakeGemini((request, n) => {
    const parsed = JSON.parse(request.contents[0].parts[0].text.split("Input:\n")[1]);
    return {
      ...(n === 1 ? { title: "T", excerpt: "E" } : {}),
      segments: parsed.segments.map((s) => ({ i: s.i, t: `MS ${s.i}` })),
    };
  });

  const result = await translateBlogContent({
    targetLocale: "ms",
    title: "t",
    excerpt: "e",
    body: long,
    apiKey: "k",
    fetchImpl,
  });

  assert.equal(calls.length, 3, "320 segments at 150 per call");
  assert.deepEqual(result.warnings, []);
  assert.equal(result.body.content[319].content[0].text, "MS 319");
});

/**
 * Live check against the real Gemini API. Skipped unless GEMINI_API_KEY is
 * present, so CI and contributors without a key are unaffected. This is what
 * proves the request shape and model name are actually right — the fakes above
 * only prove our own logic.
 */
test(
  "live: translates through the real Gemini API",
  { skip: !process.env.GEMINI_API_KEY && "GEMINI_API_KEY not set" },
  async () => {
    const result = await translateBlogContent({
      targetLocale: "ms",
      title: "The Yamaha R15 is a quick bike",
      excerpt: "A short review of the R15.",
      body: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "The " },
              { type: "text", marks: [{ type: "bold" }], text: "Yamaha R15" },
              { type: "text", text: " costs RM 12,998 and is very fast." },
            ],
          },
        ],
      },
    });

    const text = flattenTiptapText(result.body);
    assert.ok(result.title.length > 0, "a title came back");
    assert.ok(text.includes("Yamaha R15"), `model name preserved, got: ${text}`);
    assert.ok(text.includes("12,998"), `price preserved, got: ${text}`);
    assert.notEqual(text, "The Yamaha R15 costs RM 12,998 and is very fast.");
    assert.deepEqual(result.warnings, [], "no segments dropped");
    // Structure survived a real round-trip.
    assert.equal(result.body.content[0].content[1].marks[0].type, "bold");
  }
);
