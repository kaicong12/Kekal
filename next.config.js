/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['firebasestorage.googleapis.com', 'via.placeholder.com'],
        minimumCacheTTL: 1500000,
      },
};

module.exports = nextConfig;
