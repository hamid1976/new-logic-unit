import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Logistics & Transportation Software Platforms | Logic Unit',
  description: 'Logic Unit builds and operates SaaS platforms for shipment tracking, logistics coordination, and transit payment infrastructure.',
  alternates: {

      canonical: '/industries/logistics',

  },

  openGraph: {

      url: '/industries/logistics',

  },
};

export default function LogisticsPage() {
  const sections = [
    {
      title: 'Supply Chain & Logistics Challenges',
      body: (
        <div className="space-y-4">
          <p>
            Logistics, transport, and freight forwarding operations rely on complex, multi-stakeholder networks. Standard systems often lack real-time visibility, leaving customers dependent on phone calls and spreadsheets to locate cargo. Scattered documentation (such as bills of lading and customs clearances) across email chains creates operational bottlenecks and delays.
          </p>
          <p>
            Logic Unit designs logistics software systems where operational visibility, automated milestones, and secure transaction layers matter. Our platforms integrate database logic with customer self-service portals, reducing administrative overhead and enabling cargo managers to scale freight forwarding workflows.
          </p>
        </div>
      ),
    },
    {
      title: 'Case Study: Seagold Logistics & Shipment Tracking',
      body: (
        <div className="space-y-4">
          <p>
            To address operational bottlenecks as shipment volumes grew, Seagold Logistics partnered with Logic Unit. We designed and built a web-based logistics management platform containing a secure customer self-service portal, centralized document storage, and automated notification engines.
          </p>
          <p>
            Customers gain real-time visibility into cargo location and shipping milestones, while operations teams benefit from simplified data entry, unified document uploads (packing lists, manifests), and automated milestone alerts.
          </p>
          <div className="pt-2">
            <Link
              href="/case-studies/seagold-logistics-management-platform"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Read Seagold Case Study &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Case Study: Smart Salik & mPay Infrastructure',
      body: (
        <div className="space-y-4">
          <p>
            Logic Unit has proven experience contributing to large-scale, citizen-facing public transport and payment platforms in smart cities:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li>
              <strong>Smart Salik:</strong> Contributed to the mobile application for Dubai&apos;s Roads and Transport Authority (RTA), providing real-time toll account management, instant balances, vehicle activation tags, and violation tracking.
            </li>
            <li>
              <strong>mPay:</strong> Helped build a unified payment gateway for Dubai Smart Government, enabling citizens to pay utilities (DEWA), telecom, fines, and road tolls through a single interface.
            </li>
          </ul>
          <div className="pt-2 flex gap-4">
            <Link
              href="/case-studies/smart-salik-digital-toll-management"
              className="text-xs font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Smart Salik Study &rarr;
            </Link>
            <Link
              href="/case-studies/mpay-government-payment-platform"
              className="text-xs font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              mPay Study &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Ecosystem Product: Bike Tour Pro Fleet Logistics',
      body: (
        <div className="space-y-4">
          <p>
            Within our travel and logistics tech portfolio, Bike Tour Pro is a specialized white-label SaaS platform built for bicycle tour operators and adventure travel companies. The system manages transport fleets, guide routes, guest bookings, and secure payment processing.
          </p>
          <p>
            By centralizing itinerary scheduling, guide dispatching, real-time traveler communication, and navigation systems into a single operator dashboard, Bike Tour Pro removes the need for disconnected spreadsheets and custom booking engines.
          </p>
          <div className="pt-2">
            <Link
              href="/ecosystem/bike-tour-pro"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Explore Bike Tour Pro Details &rarr;
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
      contactHref="/contact?cta=industry-logistics-discuss&page_type=industry&interest=logistics&source_slug=logistics"
      contactText="Discuss a Logistics Platform"
    />
  );
}
