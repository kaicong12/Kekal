// Guards the LLM round-trip: structure must survive translation intact.
import test from "node:test";
import assert from "node:assert/strict";

import {
  extractTextSegments,
  applyTextSegments,
  flattenTiptapText,
  countTextChars,
} from "../utils/tiptapText.js";

const doc = () => ({
  type: "doc",
  content: [
    { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: "Yamaha R15 review" }] },
    {
      type: "paragraph",
      content: [
        { type: "text", text: "The " },
        { type: "text", marks: [{ type: "bold" }], text: "R15" },
        { type: "text", text: " is fast. " },
        {
          type: "text",
          marks: [{ type: "link", attrs: { href: "https://example.com/r15", title: "Spec sheet" } }],
          text: "See the specs",
        },
      ],
    },
    { type: "image", attrs: { src: "https://cdn/x.jpg", alt: "Red R15", title: "On the road" } },
    {
      type: "bulletList",
      content: [
        { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Light" }] }] },
        { type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text: "Nimble" }] }] },
      ],
    },
    { type: "paragraph", content: [{ type: "text", text: "   " }] },
  ],
});

test("extracts translatable strings in a stable order", () => {
  const segments = extractTextSegments(doc());
  assert.deepEqual(
    segments.map((s) => s.text),
    [
      "Yamaha R15 review",
      "The ",
      "R15",
      " is fast. ",
      // A text node yields its own text first, then any translatable mark attrs.
      "See the specs",
      "Spec sheet",
      "Red R15",
      "On the road",
      "Light",
      "Nimble",
    ]
  );
  assert.deepEqual(
    segments.map((s) => s.i),
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  );
});

test("skips whitespace-only text nodes entirely", () => {
  const segments = extractTextSegments(doc());
  assert.ok(!segments.some((s) => s.text.trim() === ""));
});

test("round-trip preserves structure, attrs and marks exactly", () => {
  const source = doc();
  const segments = extractTextSegments(source);
  const translated = segments.map((s) => ({ i: s.i, text: s.text.toUpperCase() }));

  const { doc: result, missing, expected } = applyTextSegments(source, translated);

  assert.deepEqual(missing, []);
  assert.equal(expected, segments.length);

  const stripText = (node) => {
    if (!node || typeof node !== "object") return node;
    const copy = { ...node };
    if (typeof copy.text === "string") copy.text = copy.text.toLowerCase();
    if (copy.attrs) {
      copy.attrs = { ...copy.attrs };
      for (const k of ["alt", "title"]) {
        if (typeof copy.attrs[k] === "string") copy.attrs[k] = copy.attrs[k].toLowerCase();
      }
    }
    if (Array.isArray(copy.marks)) copy.marks = copy.marks.map(stripText);
    if (Array.isArray(copy.content)) copy.content = copy.content.map(stripText);
    return copy;
  };
  assert.deepEqual(stripText(result), stripText(doc()));

  assert.equal(result.content[0].attrs.level, 2, "heading level survived");
  assert.equal(
    result.content[1].content[3].marks[0].attrs.href,
    "https://example.com/r15",
    "link href was not translated"
  );
  assert.equal(result.content[2].attrs.src, "https://cdn/x.jpg", "image src was not translated");
  assert.equal(result.content[2].attrs.alt, "RED R15", "image alt WAS translated");
});

test("does not mutate the source document", () => {
  const source = doc();
  const before = JSON.stringify(source);
  applyTextSegments(source, [{ i: 0, text: "Ulasan" }]);
  assert.equal(JSON.stringify(source), before);
});

test("re-attaches edge whitespace the model trimmed", () => {
  const source = {
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          { type: "text", text: "the " },
          { type: "text", marks: [{ type: "bold" }], text: "R15" },
        ],
      },
    ],
  };
  const { doc: result } = applyTextSegments(source, [
    { i: 0, text: "sebuah" },
    { i: 1, text: "R15" },
  ]);
  assert.equal(result.content[0].content[0].text, "sebuah ");
  assert.equal(flattenTiptapText(result), "sebuah R15");
});

test("a short response keeps source text and reports the missing indices", () => {
  const source = doc();
  const { doc: result, missing, expected } = applyTextSegments(source, [
    { i: 0, text: "Ulasan Yamaha R15" },
  ]);

  assert.equal(expected, 10);
  assert.deepEqual(missing, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  assert.equal(result.content[0].content[0].text, "Ulasan Yamaha R15");
  // Untranslated slots fall back to source rather than emptying.
  assert.equal(result.content[3].content[0].content[0].content[0].text, "Light");
});

test("ignores out-of-range, duplicate and non-string segments", () => {
  const source = { type: "doc", content: [{ type: "paragraph", content: [{ type: "text", text: "Hi" }] }] };
  const { doc: result, missing } = applyTextSegments(source, [
    { i: 99, text: "nope" },
    { i: 0, text: "Hai" },
    { i: 0, text: "ignored duplicate" },
    { i: 1, text: 42 },
  ]);
  assert.equal(result.content[0].content[0].text, "Hai");
  assert.deepEqual(missing, []);
});

test("empty and malformed docs do not throw", () => {
  assert.deepEqual(extractTextSegments({ type: "doc", content: [] }), []);
  assert.deepEqual(extractTextSegments(null), []);
  assert.equal(flattenTiptapText(null), "");
  assert.equal(applyTextSegments({ type: "doc", content: [] }, []).expected, 0);
});

test("flattenTiptapText separates blocks and collapses whitespace", () => {
  assert.equal(
    flattenTiptapText({
      type: "doc",
      content: [
        { type: "paragraph", content: [{ type: "text", text: "One" }] },
        { type: "paragraph", content: [{ type: "text", text: "Two" }] },
      ],
    }),
    "One Two"
  );
  assert.equal(countTextChars({ type: "doc", content: [] }), 0);
});
