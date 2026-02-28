const withNextIntl = require('next-intl/plugin')('./src/i18n.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  output: 'standalone',
}

module.exports = withNextIntl(nextConfig)
