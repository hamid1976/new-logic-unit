import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'

export const metadata: Metadata = {
  title: 'Retail Software Platforms',
  description:
    'Logic Unit builds and operates industry-specific SaaS platforms that support retail and business operating environments.',
  alternates: {
    canonical: '/industry/retail',
  },
}

export default function RetailPage() {
  const sections = [
    {
      title: 'SaaS platforms for retail operations',
      body: "Logic Unit's current source content connects retail with business operations, service environments, and industry-specific SaaS platforms. Retail software platform content should focus on operational visibility, business process support, and long-term SaaS infrastructure.",
    },
    {
      title: 'Connected to the Logic Unit product ecosystem',
      body: 'The Logic Unit ecosystem includes Hulm Solutions, described in source content as a SaaS platform for managing business operations across retail, healthcare, and service environments.',
    },
  ]

  return (
    <SubPageTemplate
      eyebrow="Retail"
      h1="Retail software platforms for operational visibility."
      heroBody="Logic Unit builds and operates SaaS platforms for industries where digital infrastructure is still evolving. Retail is one of the industry categories served through the Logic Unit product ecosystem."
      sections={sections}
      ctaTitle="Discuss retail platform collaboration."
      backText="Back to Industries"
      backHref="/industry"
    />
  )
}
