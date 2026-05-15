import { logoUrl, siteUrl } from '@/lib/site'

export function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Logic Unit',
    url: siteUrl,
    logo: logoUrl,
    description:
      'Logic Unit is a product engineering and operating company that builds and runs industry-specific SaaS platforms.',
    foundingDate: '2013',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'info@logic-unit.com',
        contactType: 'corporate inquiries',
      },
    ],
    areaServed: ['PK', 'AE'],
    owns: [
      { '@type': 'Organization', name: 'Hulm Solutions' },
      { '@type': 'Organization', name: 'Titan MMS' },
      { '@type': 'Organization', name: 'AnimalCare360' },
    ],
    knowsAbout: [
      'Product engineering',
      'SaaS architecture',
      'Multi-tenant systems',
      'AI integration',
      'IoT integration',
      'Data infrastructure',
      'Industry software platforms',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
