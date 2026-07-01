import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Facilities Software Platforms | Logic Unit',
  description: 'Logic Unit builds and operates industry-specific SaaS platforms for facilities, maintenance, and service activity.',
  alternates: {
    canonical: '/industries/facilities',
  },
};

export default function FacilitiesPage() {
  const sections = [
    {
      title: 'SaaS platforms for facilities environments',
      body: (
        <p>
          Facilities and maintenance operations need work order visibility, asset history, spare parts management, preventive maintenance, and reliable operational monitoring. Logic Unit builds software for command environments, surveillance, and computerized maintenance management.
        </p>
      ),
    },
    {
      title: 'Connected to the Logic Unit product ecosystem',
      body: (
        <div className="space-y-6">
          <div>
            <p className="mb-2">
              <strong>Titan CMMS</strong>: An enterprise-grade computerized maintenance management system that unifies asset records, preventive schedules, work requests, and parts inventory.
            </p>
            <Link
              href="/ecosystem/titan-cmms"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Explore Titan CMMS Details &rarr;
            </Link>
          </div>
          <div className="border-t border-[rgba(16,39,122,0.08)] pt-4">
            <p className="mb-2">
              <strong>MFCC Console</strong>: A mission-critical command and control workstation designed for marine displays, surveillance inputs, C4I system protocols, and maritime operations environments.
            </p>
            <Link
              href="/ecosystem/mfcc-command-control-console"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Explore MFCC Console Details &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Facilities & Maintenance Case Studies',
      body: (
        <div>
          <p className="mb-4">
            See our operational systems and ERP integration work in facility-related environments:
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
      eyebrow="Facilities"
      h1="Facilities software platforms for service and maintenance operations."
      heroBody="Logic Unit builds software platforms for industries where maintenance, service activity, and operational reliability matter. Facilities is one of the industry categories named in the current website."
      sections={sections}
      ctaTitle="Discuss facilities platform collaboration."
      backText="Back to Industries"
      backHref="/industries"
    />
  );
}
