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
    unoptimized: true,
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
