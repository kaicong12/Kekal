// The model never sees the document tree. We flatten it to a list of strings,
// translate those, and write them back into a clone of the original — so node
// types, attrs and mark boundaries are copied, never regenerated.

const TRANSLATABLE_NODE_ATTRS = { image: ["alt", "title"] };
const TRANSLATABLE_MARK_ATTRS = { link: ["title"] };

const isTranslatable = (value) =>
  typeof value === "string" && value.trim().length > 0;

// Extract and apply both go through this so indices can't drift between them.
function collectSlots(node, out = []) {
  if (!node || typeof node !== "object") return out;

  if (node.type === "text" && typeof node.text === "string") {
    out.push({ container: node, key: "text" });
  }

  const nodeAttrs = TRANSLATABLE_NODE_ATTRS[node.type];
  if (nodeAttrs && node.attrs) {
    for (const key of nodeAttrs) {
      if (typeof node.attrs[key] === "string") {
        out.push({ container: node.attrs, key });
      }
    }
  }

  if (Array.isArray(node.marks)) {
    for (const mark of node.marks) {
      const markAttrs = TRANSLATABLE_MARK_ATTRS[mark?.type];
      if (markAttrs && mark.attrs) {
        for (const key of markAttrs) {
          if (typeof mark.attrs[key] === "string") {
            out.push({ container: mark.attrs, key });
          }
        }
      }
    }
  }

  if (Array.isArray(node.content)) {
    for (const child of node.content) collectSlots(child, out);
  }

  return out;
}

const translatableSlots = (doc) =>
  collectSlots(doc).filter((slot) => isTranslatable(slot.container[slot.key]));

const deepClone = (value) =>
  typeof structuredClone === "function"
    ? structuredClone(value)
    : JSON.parse(JSON.stringify(value));

// Whitespace-only strings are skipped: they cost tokens and are a common cause
// of the model merging segments.
export function extractTextSegments(doc) {
  return translatableSlots(doc).map((slot, i) => ({
    i,
    text: slot.container[slot.key],
  }));
}

// Marks split sentences, so a segment often carries a meaningful leading or
// trailing space that models trim — losing it welds words together.
function preserveEdgeWhitespace(source, translated) {
  const leading = source.match(/^\s*/)[0];
  const trailing = source.match(/\s*$/)[0];
  return leading + translated.trim() + trailing;
}

// Untranslated slots keep their source text and are reported in `missing`, so a
// partial response yields a reviewable draft rather than losing content.
export function applyTextSegments(doc, segments) {
  const next = deepClone(doc);
  const slots = translatableSlots(next);

  const byIndex = new Map();
  for (const segment of Array.isArray(segments) ? segments : []) {
    if (
      segment &&
      Number.isInteger(segment.i) &&
      typeof segment.text === "string" &&
      !byIndex.has(segment.i) // first value wins
    ) {
      byIndex.set(segment.i, segment.text);
    }
  }

  const missing = [];
  slots.forEach((slot, i) => {
    const translated = byIndex.get(i);
    if (isTranslatable(translated)) {
      slot.container[slot.key] = preserveEdgeWhitespace(
        slot.container[slot.key],
        translated
      );
    } else {
      missing.push(i);
    }
  });

  return { doc: next, expected: slots.length, missing };
}

export function flattenTiptapText(doc) {
  const parts = [];
  const walk = (node) => {
    if (!node || typeof node !== "object") return;
    if (node.type === "text" && typeof node.text === "string") {
      parts.push(node.text);
    }
    if (node.type === "hardBreak") parts.push(" ");
    if (Array.isArray(node.content)) {
      node.content.forEach(walk);
      parts.push(" ");
    }
  };
  walk(doc);
  return parts.join("").replace(/\s+/g, " ").trim();
}

export const countTextChars = (doc) => flattenTiptapText(doc).length;
