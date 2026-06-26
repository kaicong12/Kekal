import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import en from "../messages/en.json";
import ms from "../messages/ms.json";
import zh from "../messages/zh.json";

// Statically import the catalogs (rather than a dynamic import) — a dynamic
// `import(`../messages/${locale}.json`)` fails to chunk correctly during
// static export on Next.js 13.4.
const messagesByLocale = { en, ms, zh };

// Loads the message catalog for the active request locale. Falls back to the
// default locale when the incoming locale is missing or unsupported.
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messagesByLocale[locale],
  };
});
