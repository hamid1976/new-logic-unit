import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manufacturing Software Platforms',
  description:
    'Logic Unit builds and operates industry-specific SaaS platforms for manufacturing and industrial operations.',
  alternates: {
    canonical: '/industry/manufacturing',
  },
}

export default function ManufacturingPage() {
  const sections = [
    {
      title: 'SaaS platforms for manufacturing environments',
      body: (
        <p>
          Current source content connects manufacturing with industrial operations, assets, service activity, and maintenance reliability. Manufacturing content should focus on operational software, platform infrastructure, and long-term system support.
        </p>
      ),
    },
    {
      title: 'Connected to maintenance and industrial reliability',
      body: (
        <div>
          <p className="mb-4">
            The Logic Unit ecosystem includes Titan MMS, described in source content as a platform for managing maintenance operations, assets, service activity, and industrial reliability.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/ecosystem/titan-mms-maintenance-management-software"
              className="text-sm font-bold text-[#10277a] underline decoration-[#7bd72f] decoration-2 underline-offset-4 hover:text-[#071330] no-underline"
            >
              Explore Product Details →
            </Link>
            <a
              href="https://titanmms.com"
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
  ]

  return (
    <SubPageTemplate
      eyebrow="Manufacturing"
      h1="Manufacturing software platforms for industrial operations."
      heroBody="Logic Unit builds software platforms for industries where operational visibility, coordination, and long-term digital infrastructure matter. Manufacturing is one of the industry categories named in the current Logic Unit website."
      sections={sections}
      ctaTitle="Discuss manufacturing platform collaboration."
      backText="Back to Industries"
      backHref="/industry"
    />
  )
}
