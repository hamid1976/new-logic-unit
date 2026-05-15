interface OrganizationSchemaProps {
  type: 'organization'
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

type SchemaProps = OrganizationSchemaProps | PersonSchemaProps | ArticleSchemaProps

export function SchemaOrg(props: SchemaProps) {
  let schema: object = {}

  if (props.type === 'organization') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Logic Unit',
      url: 'https://logicunit.co',
      logo: 'https://logicunit.co/logo.png',
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
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
