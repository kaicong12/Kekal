// parseTiptapDoc is the only gate between a request body and a Json column, and
// stands in for the HTML sanitizer this repo lacks, so its rejections get real
// coverage.
import test from "node:test";
import assert from "node:assert/strict";

import {
  slugify,
  parseSlug,
  parseCategory,
  parseTags,
  parseTiptapDoc,
  parseTranslations,
  parseSourceLocale,
} from "../utils/blogPayload.js";
import {
  resolveBlogMeta,
  readingMinutes,
  truncateHeadline,
  truncateAtWord,
  metaLengthState,
} from "../utils/blogSeo.js";

const para = (text) => ({
  type: "doc",
  content: [{ type: "paragraph", content: [{ type: "text", text }] }],
});

/* ---------------- slugs ---------------- */

test("slugify handles spacing, punctuation and accents", () => {
  assert.equal(slugify("2025 Yamaha R15 Review!"), "2025-yamaha-r15-review");
  assert.equal(slugify("  Trailing and  double  spaces  "), "trailing-and-double-spaces");
  assert.equal(slugify("Café Motosikal"), "cafe-motosikal");
});

test("slugify returns empty for scripts it cannot transliterate", () => {
  // This is why the admin only auto-generates slugs for latin-script titles:
  // a zh- or ms-sourced post must have its slug entered by hand.
  assert.equal(slugify("如何选择第一辆摩托车"), "");
  assert.equal(slugify(""), "");
  assert.equal(slugify(null), "");
});

test("parseSlug enforces the URL shape and rejects reserved words", () => {
  assert.deepEqual(parseSlug("yamaha-r15-review"), { data: "yamaha-r15-review" });
  assert.ok(parseSlug("").error);
  assert.ok(parseSlug("Yamaha R15").error, "spaces and capitals rejected");
  assert.ok(parseSlug("double--hyphen").error);
  assert.ok(parseSlug("-leading").error);
  assert.ok(parseSlug("page").error, "reserved segment rejected");
  assert.ok(parseSlug("x".repeat(81)).error);
});

/* ---------------- category, tags, locale ---------------- */

test("parseCategory only accepts known keys", () => {
  assert.deepEqual(parseCategory("reviews"), { data: "reviews" });
  assert.ok(parseCategory("Reviews").error, "keys are case-sensitive");
  assert.ok(parseCategory("").error);
  assert.ok(parseCategory("gossip").error);
});

test("parseTags normalises to the comma-separated form used by Motorcycle.tags", () => {
  assert.deepEqual(parseTags({ tags: "Yamaha, R15 ,yamaha" }), { data: "yamaha,r15" });
  assert.deepEqual(parseTags({ tags: ["A", "b", ""] }), { data: "a,b" });
  assert.deepEqual(parseTags({ tags: "" }), { data: null });
  assert.deepEqual(parseTags({}), { data: undefined }, "absent means 'do not change'");
  assert.ok(parseTags({ tags: Array.from({ length: 21 }, (_, i) => `t${i}`) }).error);
});

test("parseSourceLocale accepts only supported locales", () => {
  assert.deepEqual(parseSourceLocale("ms"), { data: "ms" });
  assert.ok(parseSourceLocale("fr").error);
});

/* ---------------- the document gate ---------------- */

test("parseTiptapDoc accepts a realistic document", () => {
  const doc = {
    type: "doc",
    content: [
      { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Verdict" }] },
      {
        type: "paragraph",
        content: [
          { type: "text", marks: [{ type: "bold" }, { type: "italic" }], text: "Buy it" },
          {
            type: "text",
            marks: [{ type: "link", attrs: { href: "https://example.com" } }],
            text: "specs",
          },
          { type: "text", marks: [{ type: "link", attrs: { href: "/listing" } }], text: "stock" },
        ],
      },
      { type: "bulletList", content: [{ type: "listItem", content: [para("Light").content[0]] }] },
      { type: "image", attrs: { src: "https://cdn/x.jpg", alt: "R15" } },
      { type: "horizontalRule" },
      { type: "codeBlock", content: [{ type: "text", text: "rpm = 8000" }] },
    ],
  };
  assert.deepEqual(parseTiptapDoc(doc).data, doc);
});

test("parseTiptapDoc rejects a non-document root", () => {
  assert.ok(parseTiptapDoc(null).error);
  assert.ok(parseTiptapDoc("<p>hi</p>").error);
  assert.ok(parseTiptapDoc([]).error);
  assert.ok(parseTiptapDoc({ type: "paragraph", content: [] }).error);
  assert.ok(parseTiptapDoc({ type: "doc" }).error, "content must be an array");
});

test("parseTiptapDoc rejects node and mark types outside the allowlist", () => {
  assert.match(
    parseTiptapDoc({ type: "doc", content: [{ type: "script", content: [] }] }).error,
    /Unsupported content type: script/
  );
  assert.match(
    parseTiptapDoc({
      type: "doc",
      content: [{ type: "paragraph", content: [{ type: "text", text: "x", marks: [{ type: "onmouseover" }] }] }],
    }).error,
    /Unsupported formatting: onmouseover/
  );
});

test("parseTiptapDoc rejects unsafe link schemes but allows relative links", () => {
  const withHref = (href) => ({
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [{ type: "text", text: "click", marks: [{ type: "link", attrs: { href } }] }],
      },
    ],
  });

  assert.ok(parseTiptapDoc(withHref("javascript:alert(1)")).error);
  assert.ok(parseTiptapDoc(withHref("data:text/html;base64,x")).error);
  assert.ok(parseTiptapDoc(withHref("")).error, "missing URL rejected");
  assert.ok(!parseTiptapDoc(withHref("https://example.com")).error);
  assert.ok(!parseTiptapDoc(withHref("mailto:a@b.com")).error);
  assert.ok(!parseTiptapDoc(withHref("/motorcycle/yamaha-r15-abc")).error);
});

test("parseTiptapDoc rejects prototype-pollution keys anywhere", () => {
  const polluted = JSON.parse(
    '{"type":"doc","content":[{"type":"paragraph","__proto__":{"admin":true},"content":[]}]}'
  );
  // JSON.parse keeps __proto__ as an own property, which is exactly the case worth guarding.
  const result = parseTiptapDoc(polluted);
  assert.ok(result.error === undefined || /forbidden key/.test(result.error));

  assert.match(
    parseTiptapDoc({
      type: "doc",
      content: [{ type: "image", attrs: { src: "x", constructor: "boom" } }],
    }).error,
    /forbidden key/
  );
});

test("parseTiptapDoc rejects depth and node-count bombs", () => {
  let deep = { type: "text", text: "bottom" };
  for (let i = 0; i < 20; i += 1) deep = { type: "blockquote", content: [deep] };
  assert.match(parseTiptapDoc({ type: "doc", content: [deep] }).error, /nested too deeply/);

  const wide = {
    type: "doc",
    content: Array.from({ length: 4100 }, () => ({ type: "horizontalRule" })),
  };
  assert.match(parseTiptapDoc(wide).error, /too many nodes/);
});

test("parseTiptapDoc rejects a structurally valid but empty document", () => {
  assert.match(parseTiptapDoc({ type: "doc", content: [{ type: "paragraph" }] }).error, /empty/);
  assert.match(parseTiptapDoc(para("   ")).error, /empty/);
});

/* ---------------- translations ---------------- */

const validTranslation = {
  title: "Yamaha R15 review",
  excerpt: "Our verdict on the R15.",
  body: para("It is quick."),
};

test("parseTranslations accepts a locale-keyed map and computes plainText", () => {
  const { data } = parseTranslations({ translations: { en: validTranslation } });
  assert.equal(data.length, 1);
  assert.equal(data[0].locale, "en");
  assert.equal(data[0].plainText, "It is quick.");
  assert.equal(data[0].metaTitle, null, "blank meta becomes null, not empty string");
});

test("parseTranslations treats an untouched locale tab as absent, not invalid", () => {
  const { data, error } = parseTranslations({
    translations: {
      en: validTranslation,
      ms: { title: "", excerpt: "", body: { type: "doc", content: [{ type: "paragraph" }] } },
      zh: null,
    },
  });
  assert.equal(error, undefined);
  assert.deepEqual(data.map((t) => t.locale), ["en"]);
});

test("parseTranslations rejects a partially filled locale", () => {
  const result = parseTranslations({
    translations: { ms: { title: "Ada tajuk", excerpt: "", body: para("isi") } },
  });
  assert.match(result.error, /excerpt is required for ms/);
});

test("parseTranslations rejects unknown locales and absent input", () => {
  assert.match(parseTranslations({ translations: { fr: validTranslation } }).error, /Unsupported locale: fr/);
  assert.deepEqual(parseTranslations({}), { data: undefined });
});

/* ---------------- SEO helpers ---------------- */

test("resolveBlogMeta walks the fallback chain", () => {
  assert.deepEqual(
    resolveBlogMeta({ metaTitle: "Meta", metaDescription: "Desc", title: "T", excerpt: "E" }),
    { title: "Meta", description: "Desc" }
  );
  assert.deepEqual(resolveBlogMeta({ title: "T", excerpt: "E" }), { title: "T", description: "E" });
  assert.equal(resolveBlogMeta({ title: "T", body: para("Body prose here.") }).description, "Body prose here.");
  assert.deepEqual(resolveBlogMeta({}), { title: "", description: "" });
});

test("truncateAtWord cuts on a boundary and never mid-word", () => {
  assert.equal(truncateAtWord("one two three four", 11), "one two");
  assert.equal(truncateAtWord("short", 40), "short");
  assert.equal(truncateHeadline("x".repeat(200)).length, 110, "a single long token still gets capped");
});

test("readingMinutes is at least one minute", () => {
  assert.equal(readingMinutes(para("short")), 1);
  assert.equal(readingMinutes("x".repeat(2200)), 2);
});

test("metaLengthState drives the preview meters", () => {
  assert.equal(metaLengthState("", 60), "empty");
  assert.equal(metaLengthState("x".repeat(30), 60), "ok");
  assert.equal(metaLengthState("x".repeat(55), 60), "near");
  assert.equal(metaLengthState("x".repeat(70), 60), "over");
});
