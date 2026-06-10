import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'

export const metadata: Metadata = {
  title: 'Facilities Software Platforms | Logic Unit',
  description:
    'Logic Unit builds and operates industry-specific SaaS platforms for facilities, maintenance, and service activity.',
}

export default function FacilitiesPage() {
  const sections = [
    {
      title: 'SaaS platforms for facilities environments',
      body: 'Current source content connects facilities with maintenance operations, assets, service activity, and industrial reliability. Facilities content should focus on software infrastructure for operational coordination and long-term platform use.',
    },
    {
      title: 'Connected to maintenance management',
      body: 'The Logic Unit ecosystem includes Titan MMS, described in source content as a maintenance management platform for managing maintenance operations, assets, service activity, and industrial reliability.',
    },
  ]

  return (
    <SubPageTemplate
      eyebrow="Facilities"
      h1="Facilities software platforms for service and maintenance operations."
      heroBody="Logic Unit builds software platforms for industries where maintenance, service activity, and operational reliability matter. Facilities is one of the industry categories named in the current website."
      sections={sections}
      ctaTitle="Discuss facilities platform collaboration."
      backText="Back to Industries"
      backHref="/industry"
    />
  )
}
