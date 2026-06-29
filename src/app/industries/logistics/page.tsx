import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Logistics Software Platforms | Logic Unit',
  description: 'Logic Unit builds and operates industry-specific SaaS platforms for logistics and operational coordination.',
  alternates: {
    canonical: '/industries/logistics',
  },
};

export default function LogisticsPage() {
  const sections = [
    {
      title: 'SaaS platforms for logistics operations',
      body: (
        <p>
          Logistics and transportation environments need real-time visibility, self-service, payment workflows, and operational tracking. Logic Unit builds logistics systems where coordination, operational visibility, and scalable transaction architectures matter.
        </p>
      ),
    },
    {
      title: 'Logistics and Government Payment Case Studies',
      body: (
        <div>
          <p className="mb-4">
            See our proven delivery experience in shipment visibility, electronic tolls, and unified payment portals:
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/case-studies/seagold-logistics-management-platform"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              &bull; Seagold Shipment Tracking Platform &rarr;
            </Link>
            <Link
              href="/case-studies/smart-salik-digital-toll-management"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              &bull; Smart Salik Digital Toll Management App &rarr;
            </Link>
            <Link
              href="/case-studies/mpay-government-payment-platform"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              &bull; mPay Unified Government Payment Portal &rarr;
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SubPageTemplate
      eyebrow="Logistics"
      h1="Logistics software platforms for operational coordination."
      heroBody="Logic Unit builds industry software platforms for real operating environments. Logistics is one of the industry categories served through the current Logic Unit positioning."
      sections={sections}
      ctaTitle="Discuss logistics platform collaboration."
      backText="Back to Industries"
      backHref="/industries"
    />
  );
}
