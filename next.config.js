/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['firebasestorage.googleapis.com'],
        minimumCacheTTL: 1500000,
      },
};

module.exports = nextConfig;
