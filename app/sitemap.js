import { listMotorcyclesPg as listMotorcycles } from "@/utils/dbPg";
import { toMotorcycleSlug } from "@/utils/slug";
import { routing } from "@/i18n/routing";
import { BRAND_SLUGS } from "@/utils/brandContent";

const URL = "https://www.motorkekal.com";

// Expand a path into one entry per locale, honoring next-intl's prefix-free
// default locale: "/service" → "/service", "/ms/service", "/zh/service".
function localeEntries(path, opts) {
  const suffix = path === "/" ? "" : path;
  return routing.locales.map((locale) => ({
    url:
      locale === routing.defaultLocale
        ? `${URL}${suffix}`
        : `${URL}/${locale}${suffix}`,
    lastModified: new Date().toISOString(),
    ...opts,
  }));
}

const STATIC_ROUTES = [
  ["/", { changeFrequency: "daily", priority: 1.0 }],
  ["/listing", { changeFrequency: "daily", priority: 0.9 }],
  ["/motorcycles", { changeFrequency: "daily", priority: 0.9 }],
  ["/promotions", { changeFrequency: "daily", priority: 0.8 }],
  ["/brands", { changeFrequency: "weekly", priority: 0.8 }],
  ["/about-us", { changeFrequency: "monthly", priority: 0.7 }],
  ["/contact", { changeFrequency: "monthly", priority: 0.6 }],
  ["/service", { changeFrequency: "monthly", priority: 0.6 }],
  ["/faq", { changeFrequency: "monthly", priority: 0.5 }],
];

function staticEntries() {
  return STATIC_ROUTES.flatMap(([path, opts]) => localeEntries(path, opts));
}

export default async function sitemap() {
  try {
    const motorcycleData = await listMotorcycles();

    const motorcycles = motorcycleData.flatMap((motorcycle) =>
      localeEntries(`/motorcycle/${toMotorcycleSlug(motorcycle)}`, {
        lastModified: motorcycle.updatedAt
          ? new Date(motorcycle.updatedAt).toISOString()
          : new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.8,
      })
    );

    const brandPages = BRAND_SLUGS.flatMap((slug) =>
      localeEntries(`/brands/${slug}`, {
        changeFrequency: "weekly",
        priority: 0.8,
      })
    );

    return [...staticEntries(), ...brandPages, ...motorcycles];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // Return basic routes if database fails
    return staticEntries();
  }
}
