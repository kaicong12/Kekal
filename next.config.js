const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statically prerendering ~200 motorcycle pages × 3 locales at build time
  // (each doing DB queries) can exceed the default 60s per-page ceiling on a
  // build machine talking to a remote Postgres. Raise the timeout to fit.
  staticPageGenerationTimeout: 300,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["cheerio", "undici", "firebase-admin"],
  },
  async redirects() {
    return [
      {
        source: "/listing-single-v1/:slug",
        destination: "/listing",
        permanent: true,
      },
    ];
  },
  images: {
    // Optimization is ON: it emits WebP/AVIF and a real srcset, which is the
    // single biggest LCP win available. SVG sources are NOT optimizable without
    // `dangerouslyAllowSVG` (the optimizer 400s on image/svg+xml), so the few
    // SVG call sites opt out individually with `unoptimized` instead of opening
    // that flag site-wide. See app/[locale]/home/page.js (avatars) and the
    // `/images/no-image.svg` placeholder from utils/dbPg.js.
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "www.motomalaysia.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = withNextIntl(nextConfig);
