import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'

export const metadata: Metadata = {
  title: 'System Integrator Partnerships | Logic Unit',
  description:
    'Logic Unit works with system integrators for implementation, deployment, and integration relationships across operational industries.',
  alternates: {
    canonical: '/partnerships/system-integrators',
  },
}

export default function SystemIntegratorsPage() {
  const sections = [
    {
      title: 'Implementation and integration relationships',
      body: 'System integrator relationships support implementation, deployment, and integration work across operational industries where Logic Unit platforms are relevant.',
    },
    {
      title: 'Connected to the Logic Unit platform model',
      body: 'Logic Unit builds industry-specific SaaS platforms supported by scalable architecture, data infrastructure, integration layers, and practical automation capabilities.',
    },
  ]

  return (
    <SubPageTemplate
      eyebrow="System Integrators"
      h1="System integrator partnerships for industry SaaS platforms."
      heroBody="Logic Unit works with system integrators connected to operational industries, implementation needs, deployment relationships, and integration conversations."
      sections={sections}
      ctaTitle="Start a system integrator conversation."
      backText="Back to Partnerships"
      backHref="/partnerships"
    />
  )
}
