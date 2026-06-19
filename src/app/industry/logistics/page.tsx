import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'

export const metadata: Metadata = {
  title: 'Logistics Software Platforms',
  description:
    'Logic Unit builds and operates industry-specific SaaS platforms for logistics and operational coordination.',
  alternates: {
    canonical: '/industry/logistics',
  },
}

export default function LogisticsPage() {
  const sections = [
    {
      title: 'SaaS platforms for logistics operations',
      body: 'Current source content names logistics as an industry served through Logic Unit platforms. The page should focus on operational visibility, coordination, and scalable SaaS infrastructure unless more detailed logistics source content is provided.',
    },
    {
      title: 'Part of a multi-industry platform model',
      body: 'Logic Unit builds and operates independent SaaS platforms across industries where digital infrastructure is still evolving.',
    },
  ]

  return (
    <SubPageTemplate
      eyebrow="Logistics"
      h1="Logistics software platforms for operational coordination."
      heroBody="Logic Unit builds industry software platforms for real operating environments. Logistics is one of the industry categories served through the current Logic Unit positioning."
      sections={sections}
      ctaTitle="Discuss logistics platform collaboration."
      backText="Back to Industries"
      backHref="/industry"
    />
  )
}
