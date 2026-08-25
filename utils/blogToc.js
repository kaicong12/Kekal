import { flattenTiptapText } from "./tiptapText.js";

// Chinese headings strip to nothing (or to a bare list number), so a slug with
// no letters falls back to section-N.
export function slugifyHeading(text, index) {
  const slug = String(text ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
    .replace(/-+$/, "");

  return /[a-z]/.test(slug) ? slug : `section-${index + 1}`;
}

// Returns the node itself so BlogBody can key ids by object identity instead of
// re-running this algorithm and risking a mismatch with the rendered anchors.
export function blogHeadings(doc) {
  const used = new Map();

  return (doc?.content || [])
    .map((node, index) => ({ node, index }))
    .filter(({ node }) => node?.type === "heading")
    .map(({ node, index }) => {
      const text = flattenTiptapText(node);
      const base = slugifyHeading(text, index);
      const seen = used.get(base) || 0;
      used.set(base, seen + 1);

      return {
        node,
        text,
        level: node.attrs?.level === 3 ? 3 : 2,
        id: seen === 0 ? base : `${base}-${seen + 1}`,
      };
    });
}
