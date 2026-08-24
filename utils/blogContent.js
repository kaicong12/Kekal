// Category keys; labels live in messages/*.json under blog.categories.*
export const BLOG_CATEGORIES = [
  "reviews",
  "news",
  "buying-guides",
  "maintenance",
];

// Duplicated from i18n/routing.js so the validators stay importable under
// plain `node --test`.
export const BLOG_LOCALES = ["en", "ms", "zh"];
export const BLOG_DEFAULT_LOCALE = "en";

// Would collide with a future route segment under /blog.
export const RESERVED_SLUGS = ["page", "category", "tag", "feed", "rss"];

export const MAX_SLUG_LENGTH = 80;
export const MAX_META_TITLE_LENGTH = 60;
export const MAX_META_DESCRIPTION_LENGTH = 160;
