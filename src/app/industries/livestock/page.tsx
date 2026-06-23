import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Livestock Software Platforms',
  description:
    'Logic Unit builds and operates SaaS platforms for livestock, veterinary, and animal care operations.',
  alternates: {
    canonical: '/industries/livestock',
  },
}

export default function LivestockPage() {
  const sections = [
    {
      title: 'Software platforms for livestock and veterinary operations',
      body: (
        <div>
          <p className="mb-4">
            Current source content connects livestock with veterinary and animal care operations through AnimalCare360, described as a digital platform supporting veterinary, livestock, and animal care operations.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/ecosystem/animalcare360-livestock-animal-care-software"
              className="text-sm font-bold text-[#10277a] underline decoration-[#7bd72f] decoration-2 underline-offset-4 hover:text-[#071330] no-underline"
            >
              Explore Product Details →
            </Link>
            <a
              href="https://animalcare360.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Visit official website
            </a>
          </div>
        </div>
      ),
    },
    {
      title: 'Built within the Logic Unit ecosystem',
      body: (
        <p>
          Logic Unit develops long-term product ecosystems and operates independent SaaS platforms for specific industries.
        </p>
      ),
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
      backHref="/industries"
    />
  )
}
