import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'

export const metadata: Metadata = {
  title: 'Manufacturing Software Platforms | Logic Unit',
  description:
    'Logic Unit builds and operates industry-specific SaaS platforms for manufacturing and industrial operations.',
}

export default function ManufacturingPage() {
  const sections = [
    {
      title: 'SaaS platforms for manufacturing environments',
      body: 'Current source content connects manufacturing with industrial operations, assets, service activity, and maintenance reliability. Manufacturing content should focus on operational software, platform infrastructure, and long-term system support.',
    },
    {
      title: 'Connected to maintenance and industrial reliability',
      body: 'The Logic Unit ecosystem includes Titan MMS, described in source content as a platform for managing maintenance operations, assets, service activity, and industrial reliability.',
    },
  ]

  return (
    <SubPageTemplate
      eyebrow="Manufacturing"
      h1="Manufacturing software platforms for industrial operations."
      heroBody="Logic Unit builds software platforms for industries where operational visibility, coordination, and long-term digital infrastructure matter. Manufacturing is one of the industry categories named in the current Logic Unit website."
      sections={sections}
      ctaTitle="Discuss manufacturing platform collaboration."
    />
  )
}
