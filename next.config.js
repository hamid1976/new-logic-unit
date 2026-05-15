/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  redirects: async () => [
    {
      source: '/services',
      destination: '/partnerships',
      permanent: true,
    },
    {
      source: '/case-studies',
      destination: '/about',
      permanent: true,
    },
    {
      source: '/industry/:slug',
      destination: '/industry',
      permanent: true,
    },
  ],
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
  ],
}

module.exports = nextConfig
