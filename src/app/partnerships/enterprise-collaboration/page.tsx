import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'

export const metadata: Metadata = {
  title: 'Enterprise Collaboration for SaaS Platforms',
  description:
    'Contact Logic Unit for enterprise collaboration around industry-specific SaaS platforms and digital infrastructure.',
  alternates: {
    canonical: '/partnerships/enterprise-collaboration',
  },
}

export default function EnterpriseCollaborationPage() {
  const sections = [
    {
      title: 'Collaboration around real industry platforms',
      body: 'Logic Unit builds software platforms for real industries. Enterprise collaboration should connect to platform partnerships, digital infrastructure, and long-term ecosystem growth.',
    },
    {
      title: 'Built on product engineering and operating experience',
      body: "Logic Unit's approach combines product engineering, SaaS architecture, data infrastructure, integration layers, and practical automation capabilities.",
    },
  ]

  return (
    <SubPageTemplate
      eyebrow="Enterprise Collaboration"
      h1="Enterprise collaboration for industry-specific SaaS platforms."
      heroBody="Logic Unit works with enterprises seeking platform partnerships, infrastructure collaboration, and industry-specific digital transformation."
      sections={sections}
      ctaTitle="Start an enterprise collaboration inquiry."
      backText="Back to Partnerships"
      backHref="/partnerships"
    />
  )
}
