import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'

export const metadata: Metadata = {
  title: 'Livestock Software Platforms | Logic Unit',
  description:
    'Logic Unit builds and operates SaaS platforms for livestock, veterinary, and animal care operations.',
}

export default function LivestockPage() {
  const sections = [
    {
      title: 'Software platforms for livestock and veterinary operations',
      body: 'Current source content connects livestock with veterinary and animal care operations through AnimalCare360, described as a digital platform supporting veterinary, livestock, and animal care operations.',
    },
    {
      title: 'Built within the Logic Unit ecosystem',
      body: 'Logic Unit develops long-term product ecosystems and operates independent SaaS platforms for specific industries.',
    },
  ]

  return (
    <SubPageTemplate
      eyebrow="Livestock"
      h1="Livestock software platforms for animal care operations."
      heroBody="Logic Unit builds and operates industry-specific SaaS platforms for real operational environments. Livestock is one of the industry categories served through the current product ecosystem."
      sections={sections}
      ctaTitle="Discuss livestock platform collaboration."
      backText="Back to Industries"
      backHref="/industry"
    />
  )
}
