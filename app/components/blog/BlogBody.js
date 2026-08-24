import { Fragment } from "react";
import { Link } from "@/i18n/navigation";

// Renders the stored Tiptap JSON as JSX rather than via generateHTML +
// dangerouslySetInnerHTML. Two reasons that matter: internal links go through
// next-intl's Link so they keep their locale prefix, and React escapes text, so
// no HTML sanitizer is needed.

const MARK_WRAPPERS = {
  bold: (children, key) => <strong key={key}>{children}</strong>,
  italic: (children, key) => <em key={key}>{children}</em>,
  strike: (children, key) => <s key={key}>{children}</s>,
  code: (children, key) => <code key={key}>{children}</code>,
};

// Fixed order so output is deterministic; link stays outermost.
const MARK_ORDER = ["code", "strike", "italic", "bold"];

function renderText(node, key) {
  let content = node.text;

  for (const type of MARK_ORDER) {
    if (node.marks?.some((mark) => mark.type === type)) {
      content = MARK_WRAPPERS[type](content, `${key}-${type}`);
    }
  }

  const link = node.marks?.find((mark) => mark.type === "link");
  if (link?.attrs?.href) {
    const href = link.attrs.href;
    return href.startsWith("/") ? (
      <Link key={key} href={href} title={link.attrs.title || undefined}>
        {content}
      </Link>
    ) : (
      <a
        key={key}
        href={href}
        title={link.attrs.title || undefined}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <Fragment key={key}>{content}</Fragment>;
}

function renderNode(node, key) {
  if (!node || typeof node !== "object") return null;

  const children = (node.content || []).map((child, i) =>
    renderNode(child, `${key}-${i}`)
  );

  switch (node.type) {
    case "text":
      return renderText(node, key);
    case "paragraph":
      return <p key={key}>{children}</p>;
    case "heading":
      return node.attrs?.level === 3 ? (
        <h3 key={key}>{children}</h3>
      ) : (
        <h2 key={key}>{children}</h2>
      );
    case "bulletList":
      return <ul key={key}>{children}</ul>;
    case "orderedList":
      return (
        <ol key={key} start={node.attrs?.start || undefined}>
          {children}
        </ol>
      );
    case "listItem":
      return <li key={key}>{children}</li>;
    case "blockquote":
      return <blockquote key={key}>{children}</blockquote>;
    case "codeBlock":
      return (
        <pre key={key}>
          <code>{children}</code>
        </pre>
      );
    case "horizontalRule":
      return <hr key={key} />;
    case "hardBreak":
      return <br key={key} />;
    case "image":
      return node.attrs?.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={key}
          src={node.attrs.src}
          alt={node.attrs.alt || ""}
          title={node.attrs.title || undefined}
          loading="lazy"
          decoding="async"
        />
      ) : null;
    default:
      // A node the renderer doesn't know must not take down the article.
      return null;
  }
}

export default function BlogBody({ doc }) {
  if (!doc?.content) return null;
  return <>{doc.content.map((node, i) => renderNode(node, `n${i}`))}</>;
}
