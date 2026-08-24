import { routing } from "@/i18n/routing";

// Build a self-referencing canonical plus hreflang alternates for a route,
// honoring next-intl's localePrefix "as-needed" (default locale is
// prefix-free, e.g. "/service" vs "/ms/service"). Paths are resolved against
// metadataBase from the root layout.
export function localeAlternates(path, locale = routing.defaultLocale) {
  const suffix = path === "/" ? "" : path;
  const localePath = (loc) =>
    loc === routing.defaultLocale ? path : `/${loc}${suffix}`;

  const languages = {};
  for (const loc of routing.locales) {
    languages[loc] = localePath(loc);
  }
  languages["x-default"] = path;

  return { canonical: localePath(locale), languages };
}

// Same as above, but hreflang lists only the locales that actually have content.
// Advertising an alternate that 404s is worse than omitting it.
export function localeAlternatesFor(path, locale, availableLocales) {
  const available = routing.locales.filter((loc) =>
    availableLocales?.includes(loc)
  );
  if (!available.length) return localeAlternates(path, locale);

  const suffix = path === "/" ? "" : path;
  const localePath = (loc) =>
    loc === routing.defaultLocale ? path : `/${loc}${suffix}`;

  const languages = {};
  for (const loc of available) {
    languages[loc] = localePath(loc);
  }
  if (available.includes(routing.defaultLocale)) {
    languages["x-default"] = path;
  }

  return { canonical: localePath(locale), languages };
}
