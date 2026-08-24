// `{ data } | { error }` validators, same convention as utils/promotionPayload.js.
// Free of next/* and @/ imports so it runs under `node --test`; the
// revalidation helper lives in utils/blogRevalidate.js for that reason.
import { BLOG_MARK_TYPES, BLOG_NODE_TYPES } from "./tiptapSchema.js";
import { flattenTiptapText } from "./tiptapText.js";
import {
  BLOG_CATEGORIES,
  BLOG_LOCALES,
  MAX_META_DESCRIPTION_LENGTH,
  MAX_META_TITLE_LENGTH,
  MAX_SLUG_LENGTH,
  RESERVED_SLUGS,
} from "./blogContent.js";

const MAX_DOC_DEPTH = 12;
const MAX_DOC_NODES = 4000;
const MAX_TITLE_LENGTH = 200;
const MAX_EXCERPT_LENGTH = 400;

const FORBIDDEN_KEYS = new Set(["__proto__", "constructor", "prototype"]);
const SAFE_LINK_SCHEMES = ["http:", "https:", "mailto:"];

// Returns "" for scripts it can't transliterate (Chinese), which callers must
// treat as "ask the author" rather than a usable slug.
export function slugify(text) {
  return String(text ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, MAX_SLUG_LENGTH)
    .replace(/-$/, "");
}

export function parseSlug(value) {
  const slug = String(value ?? "").trim();
  if (!slug) return { error: "A URL slug is required" };
  if (slug.length > MAX_SLUG_LENGTH) {
    return { error: `URL slug must be ${MAX_SLUG_LENGTH} characters or fewer` };
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return {
      error:
        "URL slug may only contain lowercase letters, numbers and single hyphens",
    };
  }
  if (RESERVED_SLUGS.includes(slug)) {
    return { error: `"${slug}" is reserved and cannot be used as a slug` };
  }
  return { data: slug };
}

export function parseCategory(value) {
  const category = String(value ?? "").trim();
  if (!category) return { error: "A category is required" };
  if (!BLOG_CATEGORIES.includes(category)) {
    return { error: `Unknown category: ${category}` };
  }
  return { data: category };
}

export function parseTags(body) {
  if (body.tags === undefined) return { data: undefined };
  if (body.tags === null || body.tags === "") return { data: null };

  const raw = Array.isArray(body.tags)
    ? body.tags
    : String(body.tags).split(",");
  const seen = new Set();
  for (const entry of raw) {
    const tag = String(entry ?? "").trim().toLowerCase();
    if (tag) seen.add(tag);
  }
  if (seen.size > 20) return { error: "A post can have at most 20 tags" };
  return { data: seen.size ? [...seen].join(",") : null };
}

function validateNode(node, depth, counter) {
  if (!node || typeof node !== "object" || Array.isArray(node)) {
    return "Document contains a node that is not an object";
  }
  if (depth > MAX_DOC_DEPTH) return "Document is nested too deeply";
  if (++counter.count > MAX_DOC_NODES) return "Document has too many nodes";

  for (const key of Object.keys(node)) {
    if (FORBIDDEN_KEYS.has(key)) {
      return `Document contains a forbidden key: ${key}`;
    }
  }

  if (typeof node.type !== "string" || !BLOG_NODE_TYPES.includes(node.type)) {
    return `Unsupported content type: ${node.type}`;
  }
  if (node.text !== undefined && typeof node.text !== "string") {
    return "A text node has a non-string value";
  }
  if (node.attrs !== undefined) {
    if (typeof node.attrs !== "object" || node.attrs === null) {
      return "A node has invalid attributes";
    }
    for (const key of Object.keys(node.attrs)) {
      if (FORBIDDEN_KEYS.has(key)) {
        return `Document contains a forbidden key: ${key}`;
      }
    }
  }

  if (node.marks !== undefined) {
    if (!Array.isArray(node.marks)) return "A node has invalid marks";
    for (const mark of node.marks) {
      if (!mark || typeof mark !== "object") return "A node has an invalid mark";
      if (
        typeof mark.type !== "string" ||
        !BLOG_MARK_TYPES.includes(mark.type)
      ) {
        return `Unsupported formatting: ${mark?.type}`;
      }
      if (mark.type === "link") {
        const href = mark.attrs?.href;
        if (typeof href !== "string" || !href) {
          return "A link is missing its URL";
        }
        // Relative links are fine; anything with a scheme must be trusted.
        if (!href.startsWith("/")) {
          let parsed;
          try {
            parsed = new URL(href);
          } catch {
            return `A link has an invalid URL: ${href}`;
          }
          if (!SAFE_LINK_SCHEMES.includes(parsed.protocol)) {
            return `Links may not use the ${parsed.protocol} scheme`;
          }
        }
      }
    }
  }

  if (node.content !== undefined) {
    if (!Array.isArray(node.content)) return "A node has invalid content";
    for (const child of node.content) {
      const error = validateNode(child, depth + 1, counter);
      if (error) return error;
    }
  }

  return null;
}

// The only gate between a request body and the stored document, and the closest
// thing here to a sanitizer — the node set is closed, so an allowlist is enough.
export function parseTiptapDoc(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { error: "Post content is missing or malformed" };
  }
  if (value.type !== "doc" || !Array.isArray(value.content)) {
    return { error: "Post content must be a document" };
  }

  const error = validateNode(value, 0, { count: 0 });
  if (error) return { error };

  if (!flattenTiptapText(value)) return { error: "Post content is empty" };

  return { data: value };
}

function parseTranslation(raw, locale) {
  if (!raw || typeof raw !== "object") {
    return { error: `Missing content for ${locale}` };
  }

  const title = String(raw.title ?? "").trim();
  if (!title) return { error: `A title is required for ${locale}` };
  if (title.length > MAX_TITLE_LENGTH) {
    return { error: `Title for ${locale} is too long` };
  }

  const excerpt = String(raw.excerpt ?? "").trim();
  if (!excerpt) return { error: `An excerpt is required for ${locale}` };
  if (excerpt.length > MAX_EXCERPT_LENGTH) {
    return { error: `Excerpt for ${locale} is too long` };
  }

  const body = parseTiptapDoc(raw.body);
  if (body.error) return { error: `${body.error} (${locale})` };

  const metaTitle = String(raw.metaTitle ?? "").trim();
  const metaDescription = String(raw.metaDescription ?? "").trim();
  if (metaTitle.length > MAX_META_TITLE_LENGTH * 2) {
    return { error: `Meta title for ${locale} is too long` };
  }
  if (metaDescription.length > MAX_META_DESCRIPTION_LENGTH * 2) {
    return { error: `Meta description for ${locale} is too long` };
  }

  return {
    data: {
      locale,
      title,
      excerpt,
      body: body.data,
      plainText: flattenTiptapText(body.data),
      metaTitle: metaTitle || null,
      metaDescription: metaDescription || null,
    },
  };
}

// Accepts an array or a locale-keyed map. An empty locale is dropped, not
// rejected — that's how "not translated yet" reaches the database.
export function parseTranslations(body) {
  if (body.translations === undefined) return { data: undefined };

  const entries = Array.isArray(body.translations)
    ? body.translations.map((entry) => [entry?.locale, entry])
    : Object.entries(body.translations);

  const data = [];
  const seen = new Set();

  for (const [locale, raw] of entries) {
    if (!BLOG_LOCALES.includes(locale)) {
      return { error: `Unsupported locale: ${locale}` };
    }
    if (seen.has(locale)) return { error: `Duplicate content for ${locale}` };
    seen.add(locale);

    const isEmpty =
      !raw ||
      (!String(raw.title ?? "").trim() &&
        !String(raw.excerpt ?? "").trim() &&
        !flattenTiptapText(raw.body));
    if (isEmpty) continue;

    const parsed = parseTranslation(raw, locale);
    if (parsed.error) return { error: parsed.error };
    data.push(parsed.data);
  }

  return { data };
}

export function parseSourceLocale(value) {
  const locale = String(value ?? "").trim();
  if (!BLOG_LOCALES.includes(locale)) {
    return { error: `Unsupported source locale: ${locale}` };
  }
  return { data: locale };
}
