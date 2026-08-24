import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

// Must stay in step with BLOG_NODE_TYPES / BLOG_MARK_TYPES in utils/tiptapSchema.js
// — anything the editor can produce that the validator rejects is an unsaveable
// post. Headings are capped at 2 and 3 because the page title owns the h1.
export const blogEditorExtensions = [
  StarterKit.configure({
    heading: { levels: [2, 3] },
  }),
  Link.configure({ openOnClick: false, autolink: true }),
  Image.configure({ inline: false }),
];
