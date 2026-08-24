"use client";
import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { message } from "antd";
import { PictureOutlined } from "@ant-design/icons";
import { blogEditorExtensions } from "./editorExtensions";
import { uploadBlogImage } from "@/utils/blogImageUpload";
import { flattenTiptapText } from "@/utils/tiptapText";
import styles from "./blogEditor.module.css";

// Kept out of the AntD Form: Tiptap is an imperative editor whose state changes
// on every keystroke, and a controlled Form.Item would re-render the whole form
// per character.
export default function BlogEditor({ doc, docKey, postId, onChange }) {
  const [mounted, setMounted] = useState(false);
  const [uploading, setUploading] = useState(false);
  const lastKey = useRef(docKey);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => setMounted(true), []);

  const editor = useEditor({
    extensions: blogEditorExtensions,
    content: doc || undefined,
    onUpdate: ({ editor: instance }) => onChangeRef.current(instance.getJSON()),
  });

  // Swap content only when the locale tab changes, never on keystrokes.
  useEffect(() => {
    if (!editor || lastKey.current === docKey) return;
    lastKey.current = docKey;
    editor.commands.setContent(doc || { type: "doc", content: [{ type: "paragraph" }] }, false);
  }, [editor, docKey, doc]);

  const handleImage = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file || !editor) return;
    setUploading(true);
    try {
      const url = await uploadBlogImage(file, postId || "new");
      const alt = window.prompt("Describe this image (alt text, helps SEO)") || "";
      editor.chain().focus().setImage({ src: url, alt }).run();
    } catch {
      message.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const setLink = () => {
    if (!editor) return;
    const previous = editor.getAttributes("link").href || "";
    const href = window.prompt("Link URL (use /listing for an internal page)", previous);
    if (href === null) return;
    if (href === "") {
      editor.chain().focus().unsetLink().run();
      return;
    }
    editor.chain().focus().setLink({ href }).run();
  };

  if (!mounted || !editor) {
    return <div className={styles.wrap} style={{ minHeight: 390 }} />;
  }

  const tool = (label, isActive, onClick, title) => (
    <button
      type="button"
      title={title || label}
      className={`${styles.tool} ${isActive ? styles.toolActive : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );

  const text = flattenTiptapText(editor.getJSON());
  const words = text ? text.split(/\s+/).length : 0;

  return (
    <div className={styles.wrap}>
      <div className={styles.toolbar}>
        {tool("H2", editor.isActive("heading", { level: 2 }), () =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        )}
        {tool("H3", editor.isActive("heading", { level: 3 }), () =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        )}
        <span className={styles.divider} />
        {tool("B", editor.isActive("bold"), () =>
          editor.chain().focus().toggleBold().run()
        )}
        {tool("I", editor.isActive("italic"), () =>
          editor.chain().focus().toggleItalic().run()
        )}
        {tool("S", editor.isActive("strike"), () =>
          editor.chain().focus().toggleStrike().run()
        )}
        {tool("</>", editor.isActive("code"), () =>
          editor.chain().focus().toggleCode().run(), "Inline code"
        )}
        <span className={styles.divider} />
        {tool("• List", editor.isActive("bulletList"), () =>
          editor.chain().focus().toggleBulletList().run()
        )}
        {tool("1. List", editor.isActive("orderedList"), () =>
          editor.chain().focus().toggleOrderedList().run()
        )}
        {tool("❝", editor.isActive("blockquote"), () =>
          editor.chain().focus().toggleBlockquote().run(), "Quote"
        )}
        {tool("Code block", editor.isActive("codeBlock"), () =>
          editor.chain().focus().toggleCodeBlock().run()
        )}
        <span className={styles.divider} />
        {tool("Link", editor.isActive("link"), setLink)}
        <label className={styles.tool} title="Insert image">
          <PictureOutlined /> {uploading ? "Uploading…" : "Image"}
          <input type="file" accept="image/*" hidden onChange={handleImage} />
        </label>
        {tool("—", false, () => editor.chain().focus().setHorizontalRule().run(), "Divider")}
      </div>

      <div className={styles.editor}>
        <EditorContent editor={editor} />
      </div>

      <div className={styles.footer}>
        <span>{words} words</span>
        <span>{text.length} characters</span>
      </div>
    </div>
  );
}
