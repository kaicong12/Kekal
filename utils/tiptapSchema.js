// Shared by the validator, the public renderer and the editor extensions. Kept
// as plain strings so nothing but the editor pulls in ProseMirror.

export const BLOG_NODE_TYPES = [
  "doc",
  "paragraph",
  "text",
  "heading",
  "bulletList",
  "orderedList",
  "listItem",
  "blockquote",
  "codeBlock",
  "horizontalRule",
  "hardBreak",
  "image",
];

export const BLOG_MARK_TYPES = ["bold", "italic", "strike", "code", "link"];

export const EMPTY_DOC = { type: "doc", content: [{ type: "paragraph" }] };
