// Shared by the admin SERP preview and the article page's generateMetadata, so
// the preview can't promise something different from what ships in <head>.
import { flattenTiptapText } from "./tiptapText.js";
import {
  MAX_META_DESCRIPTION_LENGTH,
  MAX_META_TITLE_LENGTH,
} from "./blogContent.js";

const MAX_HEADLINE_LENGTH = 110;

export function truncateAtWord(text, max) {
  const value = String(text ?? "").trim();
  if (value.length <= max) return value;
  const cut = value.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd();
}

export const truncateHeadline = (text) =>
  truncateAtWord(text, MAX_HEADLINE_LENGTH);

export function resolveBlogMeta(post) {
  const title = String(post?.metaTitle || post?.title || "").trim();

  const description =
    String(post?.metaDescription || post?.excerpt || "").trim() ||
    truncateAtWord(post?.plainText || flattenTiptapText(post?.body), 155);

  return { title, description };
}

export const metaTitleLength = (value) => String(value ?? "").trim().length;

export function metaLengthState(value, limit) {
  const length = metaTitleLength(value);
  if (!length) return "empty";
  if (length > limit) return "over";
  if (length > limit * 0.85) return "near";
  return "ok";
}

export const META_LIMITS = {
  title: MAX_META_TITLE_LENGTH,
  description: MAX_META_DESCRIPTION_LENGTH,
};

export const formatPostDate = (value, locale, month = "short") =>
  new Date(value).toLocaleDateString(locale === "en" ? "en-GB" : locale, {
    day: "numeric",
    month,
    year: "numeric",
  });

// Rough across three locales — Chinese runs far fewer characters per minute.
export function readingMinutes(bodyOrText) {
  const text =
    typeof bodyOrText === "string" ? bodyOrText : flattenTiptapText(bodyOrText);
  return Math.max(1, Math.ceil(text.length / 1100));
}
