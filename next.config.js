/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  redirects: async () => [
    {
      source: '/case-studies/nova-nordisk-sample-ordering-application',
      destination: '/case-studies/novo-nordisk-sample-ordering-application',
      permanent: true,
    },
    {
      source: '/services',
      destination: '/partnerships',
      permanent: true,
    },
    {
      source: '/ecosystem/titan-mms',
      destination: '/ecosystem/titan-mms-maintenance-management-software',
      permanent: true,
    },
    {
      source: '/ecosystem/animalcare360',
      destination: '/ecosystem/animalcare360-livestock-animal-care-software',
      permanent: true,
    },
    {
      source: '/industry',
      destination: '/industries',
      permanent: true,
    },
    {
      source: '/industry/:slug',
      destination: '/industries/:slug',
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
