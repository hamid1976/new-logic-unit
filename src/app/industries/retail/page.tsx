import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retail Software Platforms | Logic Unit',
  description: 'Logic Unit builds and operates industry-specific SaaS platforms that support retail and business operating environments.',
  alternates: {
    canonical: '/industries/retail',
  },
};

export default function RetailPage() {
  const sections = [
    {
      title: 'SaaS platforms for retail operations',
      body: (
        <p>
          Logic Unit&apos;s retail platforms support businesses through billing, inventory, procurement, customer relationship management, and regulatory compliance. Our retail software platform content focuses on operational visibility, business process efficiency, and long-term SaaS infrastructure.
        </p>
      ),
    },
    {
      title: 'Connected to the Logic Unit product ecosystem',
      body: (
        <div>
          <p className="mb-4">
            The Logic Unit ecosystem includes HULM POS, a comprehensive business management and POS platform for retail networks, supermarkets, and franchises.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/ecosystem/hulm-pos"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Explore HULM POS Details &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Retail Operations Case Studies',
      body: (
        <div>
          <p className="mb-4">
            See our proven delivery experience in retail and digital commerce platforms:
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/case-studies/dunkin-donuts-retail-operations-platform"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              &bull; Dunkin&apos; Donuts Pakistan Retail Operations &rarr;
            </Link>
            <Link
              href="/case-studies/giftwifts-leopards-courier"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              &bull; GiftWifts Leopards Digital Gifting Platform &rarr;
            </Link>
          </div>
        </div>
      ),
    },
  ];

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
  );
}
