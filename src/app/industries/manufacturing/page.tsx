import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Manufacturing Software Platforms | Logic Unit',
  description: 'Logic Unit builds and operates industry-specific SaaS platforms for manufacturing and industrial operations.',
  alternates: {
    canonical: '/industries/manufacturing',
  },
};

export default function ManufacturingPage() {
  const sections = [
    {
      title: 'SaaS platforms for manufacturing environments',
      body: (
        <p>
          Manufacturing and engineering organizations need maintenance visibility, asset control, procurement workflows, engineering integration, and enterprise reporting. Logic Unit builds software that unifies assets, maintenance logs, and inventory systems.
        </p>
      ),
    },
    {
      title: 'Connected to the Logic Unit product ecosystem',
      body: (
        <div>
          <p className="mb-4">
            The Logic Unit ecosystem includes Titan CMMS, an enterprise-grade maintenance management system designed to optimize asset performance, schedule preventive maintenance, and track spare parts inventory.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/ecosystem/titan-cmms"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Explore Titan CMMS Details &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Industrial & ERP Case Studies',
      body: (
        <div>
          <p className="mb-4">
            See our proven experience in shipyard digital transformation and enterprise resource planning:
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/case-studies/ksew-enterprise-erp-transformation"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              &bull; KS&amp;EW Enterprise ERP Transformation &rarr;
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SubPageTemplate
      eyebrow="Manufacturing"
      h1="Manufacturing software platforms for industrial operations."
      heroBody="Logic Unit builds software platforms for industries where operational visibility, coordination, and long-term digital infrastructure matter. Manufacturing is one of the industry categories named in the current Logic Unit website."
      sections={sections}
      ctaTitle="Discuss manufacturing platform collaboration."
      backText="Back to Industries"
      backHref="/industries"
    />
  );
}
