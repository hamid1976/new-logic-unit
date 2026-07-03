import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retail Software Platforms | Logic Unit',
  description: 'Logic Unit builds and operates industry-specific SaaS platforms that support retail, franchise operations, and multi-location business management.',
  alternates: {
    canonical: '/industries/retail',
  },
};

export default function RetailPage() {
  const sections = [
    {
      title: 'SaaS Platforms for Retail Operations',
      body: (
        <div className="space-y-4">
          <p>
            Modern retail environments demand seamless orchestration across multiple locations, channels, and operational departments. Traditional legacy systems and disconnected point-of-sale machines create information silos, resulting in inventory discrepancies, revenue leakage, and delayed decision-making.
          </p>
          <p>
            Logic Unit design-engineers retail operating platforms built to unify billing, inventory, procurement, customer relationship management, and regulatory compliance into a centralized cloud database. Our systems provide real-time sales visibility, automate stock replenishment, and support local tax integration, empowering retail leaders to scale operations efficiently.
          </p>
        </div>
      ),
    },
    {
      title: 'Connected Product: HULM POS Business OS',
      body: (
        <div className="space-y-4">
          <p>
            At the center of our retail capabilities is HULM POS, a unified retail and business management platform designed by Logic Unit. HULM POS goes beyond simple checkout billing, serving as a comprehensive business operating system for franchise networks, bakeries, pharmacies, supermarkets, and fashion retailers.
          </p>
          <p>
            HULM POS supports multi-tenant cloud and on-premise hybrid deployments. Key modules include fast barcode scanning, automated purchase orders, vendor performance tracking, customer loyalty segmentation, shift scheduling, and FBR tax-compliant invoice reporting.
          </p>
          <div className="pt-2">
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
      title: 'Case Study: Dunkin\' Donuts Pakistan Operations',
      body: (
        <div className="space-y-4">
          <p>
            To manage operational visibility across nationwide retail outlets, Dunkin&apos; Donuts Pakistan partnered with Logic Unit. We developed a mobile-first sales management and task management platform that digitizes daily branch reporting, standardizes opening/closing checklists, and connects on-the-ground store teams directly with management.
          </p>
          <p>
            The hybrid mobile solution ensures instant sales data consolidation, branch-by-branch performance comparisons, inventory alerts, and accountability tracking, allowing regional managers to make data-driven decisions that improve efficiency.
          </p>
          <div className="pt-2">
            <Link
              href="/case-studies/dunkin-donuts-retail-operations-platform"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Read Dunkin&apos; Donuts Case Study &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Case Study: GiftWifts Gifting & Delivery Platform',
      body: (
        <div className="space-y-4">
          <p>
            Logic Unit partnered with Leopards Courier to launch GiftWifts, a nationwide digital gifting and corporate gifting platform. This project transformed a logistics giant into an eCommerce player by building a catalog system, personalization engine, and checkout interface backed by Leopards&apos; nationwide delivery network.
          </p>
          <p>
            GiftWifts features bulk recipient management, scheduled delivery dispatching, secure digital wallets, and automated cargo status notifications, providing high scalability for seasonal retail spikes and corporate gifting operations.
          </p>
          <div className="pt-2">
            <Link
              href="/case-studies/giftwifts-leopards-courier"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Read GiftWifts Case Study &rarr;
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
