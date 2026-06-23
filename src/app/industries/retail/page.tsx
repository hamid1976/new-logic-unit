import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Retail Software Platforms',
  description:
    'Logic Unit builds and operates industry-specific SaaS platforms that support retail and business operating environments.',
  alternates: {
    canonical: '/industries/retail',
  },
}

export default function RetailPage() {
  const sections = [
    {
      title: 'SaaS platforms for retail operations',
      body: (
        <p>
          Logic Unit&apos;s current source content connects retail with business operations, service environments, and industry-specific SaaS platforms. Retail software platform content should focus on operational visibility, business process support, and long-term SaaS infrastructure.
        </p>
      ),
    },
    {
      title: 'Connected to the Logic Unit product ecosystem',
      body: (
        <div>
          <p className="mb-4">
            The Logic Unit ecosystem includes Hulm Solutions, described in source content as a SaaS platform for managing business operations across retail, healthcare, and service environments.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/ecosystem/hulm-solutions"
              className="text-sm font-bold text-[#10277a] underline decoration-[#7bd72f] decoration-2 underline-offset-4 hover:text-[#071330] no-underline"
            >
              Explore Product Details →
            </Link>
            <a
              href="https://hulmsolutions.com"
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
      eyebrow="Retail"
      h1="Retail software platforms for operational visibility."
      heroBody="Logic Unit builds and operates SaaS platforms for industries where digital infrastructure is still evolving. Retail is one of the industry categories served through the Logic Unit product ecosystem."
      sections={sections}
      ctaTitle="Discuss retail platform collaboration."
      backText="Back to Industries"
      backHref="/industries"
    />
  )
}
