import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'

export const metadata: Metadata = {
  title: 'Healthcare Software Platforms',
  description:
    'Logic Unit builds and operates industry-specific SaaS platforms for healthcare and service operating environments.',
  alternates: {
    canonical: '/industry/healthcare',
  },
}

export default function HealthcarePage() {
  const sections = [
    {
      title: 'Industry-specific SaaS platforms for healthcare',
      body: 'Current source content connects healthcare with business operations, service environments, and industry-specific SaaS platforms. Healthcare page content should stay focused on operational software infrastructure unless more detailed source-approved healthcare use cases are provided.',
    },
    {
      title: 'Part of a broader product ecosystem',
      body: 'Logic Unit operates independent SaaS platforms that serve specific industries, with each product company maintaining its own website, customers, roadmap, and go-to-market strategy.',
    },
  ]

  return (
    <SubPageTemplate
      eyebrow="Healthcare"
      h1="Healthcare software platforms for real operating environments."
      heroBody="Logic Unit builds SaaS platforms for industries where operational software can improve visibility, coordination, and long-term efficiency. Healthcare is one of the industry categories served through the current Logic Unit ecosystem."
      sections={sections}
      ctaTitle="Discuss healthcare platform collaboration."
      backText="Back to Industries"
      backHref="/industry"
    />
  )
}
