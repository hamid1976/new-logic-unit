import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Facilities Software Platforms',
  description:
    'Logic Unit builds and operates industry-specific SaaS platforms for facilities, maintenance, and service activity.',
  alternates: {
    canonical: '/industries/facilities',
  },
}

export default function FacilitiesPage() {
  const sections = [
    {
      title: 'SaaS platforms for facilities environments',
      body: (
        <p>
          Current source content connects facilities with maintenance operations, assets, service activity, and industrial reliability. Facilities content should focus on software infrastructure for operational coordination and long-term platform use.
        </p>
      ),
    },
    {
      title: 'Connected to maintenance management',
      body: (
        <div>
          <p className="mb-4">
            The Logic Unit ecosystem includes Titan MMS, described in source content as a maintenance management platform for managing maintenance operations, assets, service activity, and industrial reliability.
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
      eyebrow="Facilities"
      h1="Facilities software platforms for service and maintenance operations."
      heroBody="Logic Unit builds software platforms for industries where maintenance, service activity, and operational reliability matter. Facilities is one of the industry categories named in the current website."
      sections={sections}
      ctaTitle="Discuss facilities platform collaboration."
      backText="Back to Industries"
      backHref="/industries"
    />
  )
}
