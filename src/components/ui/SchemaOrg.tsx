// Schema.org JSON-LD structured data
// Renders inline script tags for Google rich results

interface OrganizationSchemaProps {
  type: 'organization'
}

interface LocalBusinessSchemaProps {
  type: 'localBusiness'
}

interface PersonSchemaProps {
  type: 'person'
  name: string
  jobTitle: string
  email: string
}

interface ArticleSchemaProps {
  type: 'caseStudy'
  title: string
  description: string
  clientName: string
  url: string
}

type SchemaProps =
  | OrganizationSchemaProps
  | LocalBusinessSchemaProps
  | PersonSchemaProps
  | ArticleSchemaProps

export function SchemaOrg(props: SchemaProps) {
  let schema: object = {}

  if (props.type === 'organization') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Logic Unit',
      url: 'https://logicunit.co',
      logo: 'https://logicunit.co/logo.png',
      description:
        'Operational Control & AI-Enabled Transformation Partner for Distribution & Trading SMEs in Pakistan and UAE.',
      foundingDate: '2014',
      founders: [
        { '@type': 'Person', name: 'Aamir Khan' },
        { '@type': 'Person', name: 'Khurram Ali Shams' },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'C-27 Block 14, Gulistan-e-Johar',
        addressLocality: 'Karachi',
        addressCountry: 'PK',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: 'info@logic-unit.com',
          contactType: 'customer service',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+92-346-2765118',
          contactType: 'sales',
          availableLanguage: ['English', 'Urdu'],
        },
      ],
      sameAs: ['https://www.linkedin.com/in/aamirkhanmuhammad/'],
      areaServed: ['PK', 'AE'],
      serviceType: [
        'ERP Implementation',
        'Operational Transformation',
        'Distribution Business Consulting',
        'Inventory Management Systems',
        'IFS ERP Partner',
      ],
      knowsAbout: [
        'ERP for distribution businesses',
        'Operational control systems',
        'IFS Applications',
        'Supply chain management',
        'Distribution and trading SME consulting',
      ],
    }
  }

  if (props.type === 'localBusiness') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Logic Unit',
      image: 'https://logicunit.co/logo.png',
      url: 'https://logicunit.co',
      telephone: '+92-21-3729-0150',
      email: 'info@logic-unit.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'C-27 Block 14, Gulistan-e-Johar',
        addressLocality: 'Karachi',
        addressRegion: 'Sindh',
        postalCode: '75300',
        addressCountry: 'PK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '24.9056',
        longitude: '67.1322',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      priceRange: '$$$$',
      description:
        'ERP implementation and operational transformation specialists for distribution and trading businesses in Pakistan and UAE. IFS Business Partner.',
    }
  }

  if (props.type === 'person') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: props.name,
      jobTitle: props.jobTitle,
      email: props.email,
      worksFor: {
        '@type': 'Organization',
        name: 'Logic Unit',
        url: 'https://logicunit.co',
      },
      knowsAbout: [
        'ERP Implementation',
        'Operational Transformation',
        'Distribution Business Operations',
        'IFS Applications',
        'Supply Chain Management',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karachi',
        addressCountry: 'PK',
      },
    }
  }

  if (props.type === 'caseStudy') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: props.title,
      description: props.description,
      url: props.url,
      author: {
        '@type': 'Organization',
        name: 'Logic Unit',
        url: 'https://logicunit.co',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Logic Unit',
        url: 'https://logicunit.co',
      },
      about: {
        '@type': 'Organization',
        name: props.clientName,
      },
      keywords: 'ERP implementation, operational transformation, case study',
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
