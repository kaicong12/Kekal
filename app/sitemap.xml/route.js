import { listMotorcyclesPg as listMotorcycles } from "@/utils/dbPg";
import { toMotorcycleSlug } from "@/utils/slug";
import { routing } from "@/i18n/routing";
import { BRAND_SLUGS } from "@/utils/brandContent";
import { BLOG_CATEGORIES } from "@/utils/blogContent";
import { listBlogSitemapEntriesPg as listBlogSitemapEntries } from "@/utils/blogPg";

// A route handler rather than the `app/sitemap.js` metadata convention: Next
// 13.4 ignores `revalidate` and `dynamic` on metadata routes, so that version
// was baked at build time and never picked up a post authored in the admin.
// Verified against .next/prerender-manifest.json.
export const revalidate = 3600;

const SITE = "https://www.motorkekal.com";

const localeUrl = (locale, suffix) =>
  locale === routing.defaultLocale
    ? `${SITE}${suffix}`
    : `${SITE}/${locale}${suffix}`;

// Expand a path into one entry per locale, honoring next-intl's prefix-free
// default locale: "/service" → "/service", "/ms/service", "/zh/service".
function localeEntries(path, opts, locales = routing.locales) {
  const suffix = path === "/" ? "" : path;
  return locales.map((locale) => ({
    url: localeUrl(locale, suffix),
    lastModified: new Date().toISOString(),
    ...opts,
  }));
}

const STATIC_ROUTES = [
  ["/", { changeFrequency: "daily", priority: 1.0 }],
  ["/listing", { changeFrequency: "daily", priority: 0.9 }],
  ["/motorcycles", { changeFrequency: "daily", priority: 0.9 }],
  ["/promotions", { changeFrequency: "daily", priority: 0.8 }],
  ["/blog", { changeFrequency: "weekly", priority: 0.8 }],
  // Fixed list, so these still ship if the database read below fails.
  ...BLOG_CATEGORIES.map((category) => [
    `/blog/category/${category}`,
    { changeFrequency: "weekly", priority: 0.7 },
  ]),
  ["/brands", { changeFrequency: "weekly", priority: 0.8 }],
  ["/about-us", { changeFrequency: "monthly", priority: 0.7 }],
  ["/contact", { changeFrequency: "monthly", priority: 0.6 }],
  ["/service", { changeFrequency: "monthly", priority: 0.6 }],
  ["/faq", { changeFrequency: "monthly", priority: 0.5 }],
];

const staticEntries = () =>
  STATIC_ROUTES.flatMap(([path, opts]) => localeEntries(path, opts));

async function sitemapEntries() {
  try {
    const motorcycles = (await listMotorcycles()).flatMap((motorcycle) =>
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

    // Only the locales a post is actually translated into: the others 404.
    const blogPosts = (await listBlogSitemapEntries()).flatMap((post) =>
      post.locales.map(({ locale, updatedAt }) => ({
        url: localeUrl(locale, `/blog/${post.slug}`),
        lastModified: new Date(updatedAt || post.updatedAt).toISOString(),
        changeFrequency: "monthly",
        priority: 0.7,
      }))
    );

    return [...staticEntries(), ...brandPages, ...blogPosts, ...motorcycles];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticEntries();
  }
}

const escapeXml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[char]
  );

function toXml(entries) {
  const urls = entries
    .map(({ url, lastModified, changeFrequency, priority }) =>
      [
        "<url>",
        `<loc>${escapeXml(url)}</loc>`,
        lastModified ? `<lastmod>${escapeXml(lastModified)}</lastmod>` : "",
        changeFrequency
          ? `<changefreq>${escapeXml(changeFrequency)}</changefreq>`
          : "",
        priority !== undefined ? `<priority>${priority}</priority>` : "",
        "</url>",
      ]
        .filter(Boolean)
        .join("")
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export async function GET() {
  return new Response(toXml(await sitemapEntries()), {
    headers: { "Content-Type": "application/xml" },
  });
}
