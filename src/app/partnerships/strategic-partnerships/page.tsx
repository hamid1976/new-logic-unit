import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'

export const metadata: Metadata = {
  title: 'Strategic SaaS Partnerships | Logic Unit',
  description:
    'Partner with Logic Unit through strategic SaaS partnerships focused on product ecosystem collaboration and industry platform growth.',
}

export default function StrategicPartnershipsPage() {
  const sections = [
    {
      title: 'Partnerships built around industry SaaS platforms',
      body: 'Logic Unit builds and operates industry-specific SaaS platforms through a long-term operating model. Strategic partnerships should support ecosystem growth, product collaboration, and industry digitization.',
    },
    {
      title: 'Where strategic partnerships fit',
      body: 'Strategic partnership conversations may involve market expansion, product ecosystem collaboration, enterprise collaboration, or long-term platform growth.',
    },
  ]

  return (
    <SubPageTemplate
      eyebrow="Strategic Partnerships"
      h1="Strategic partnerships for long-term SaaS ecosystem growth."
      heroBody="Logic Unit works with strategic partners aligned with its goal of building stronger software infrastructure for real industries."
      sections={sections}
      ctaTitle="Start a strategic partnership conversation."
    />
  )
}
