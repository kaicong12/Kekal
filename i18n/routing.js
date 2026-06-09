import { defineRouting } from "next-intl/routing";

// Supported locales for the site.
// - en: English (default, served at the prefix-free root e.g. "/contact")
// - ms: Bahasa Malaysia (served under "/ms")
// - zh: Chinese (served under "/zh")
export const routing = defineRouting({
  locales: ["en", "ms", "zh"],
  defaultLocale: "en",
  // "as-needed" keeps the default locale (en) prefix-free while prefixing
  // the others, e.g. "/", "/ms", "/zh".
  localePrefix: "as-needed",
});
