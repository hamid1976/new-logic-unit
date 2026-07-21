import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Facilities Software Platforms | Logic Unit',
  description: 'Logic Unit builds and operates SaaS platforms for facility maintenance, computerized work orders, and command-and-control monitoring.',
  alternates: {

      canonical: '/industries/facilities',

  },

  openGraph: {

      url: '/industries/facilities',

  },
};

export default function FacilitiesPage() {
  const sections = [
    {
      title: 'Facility Operations & Asset Maintenance Challenges',
      body: (
        <div className="space-y-4">
          <p>
            Property managers, facility directors, and corporate campus operators manage diverse physical assets, including HVAC systems, power grids, elevators, plumbing, and structural components. Managing daily service requests, scheduling preventative fire inspections, and coordinating technician workloads without a unified platform leads to high repair costs, premature asset degradation, and safety audit failures.
          </p>
          <p>
            Logic Unit designs facilities software systems that streamline work request dispatching, track complete asset service history, monitor spare parts consumption, and generate auditable compliance logs. This approach ensures maximum building uptime and lower capital expenditure.
          </p>
        </div>
      ),
    },
    {
      title: 'Ecosystem Product: Titan CMMS Work Order System',
      body: (
        <div className="space-y-4">
          <p>
            At the core of our facility management capabilities is Titan CMMS (Computerized Maintenance Management System), an enterprise platform built by Logic Unit. Titan CMMS unifies building maintenance, technician dispatching, and inventory tracking.
          </p>
          <p>
            Facility teams can submit digital maintenance requests, track job completion milestones in real time, monitor spare parts inventory levels, receive automatic reorder alerts, and use mobile interfaces on-site to reduce administrative overhead.
          </p>
          <div className="pt-2">
            <Link
              href="/ecosystem/titan-mms-maintenance-management-software"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Explore Titan CMMS Details &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Ecosystem Product: MFCC Command & Control Workstation',
      body: (
        <div className="space-y-4">
          <p>
            For high-security facilities, critical infrastructure, and large command centers, Logic Unit designs the Multi-Function Console (MFCC). This ruggedized hardware-software console integrates multiple surveillance feeds and navigation parameters.
          </p>
          <p>
            Featuring dual marine-grade displays, Touch Input Displays (TID), and continuous operational availability, the console integrates radar, CCTV systems, and C4I protocols, demonstrating our expertise in hardware-software integrations.
          </p>
          <div className="pt-2">
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
      title: 'Case Study: Shipyard ERP Facility Tracking',
      body: (
        <div className="space-y-4">
          <p>
            Our experience in large industrial facilities includes our contribution to Karachi Shipyard & Engineering Works (KS&EW)&apos;s enterprise ERP transformation. Shipyard maintenance operations require tracking dry-docks, slipways, cranes, and heavy machining tools.
          </p>
          <p>
            By integrating engineering workflows, purchasing logistics, and asset tracking into a unified ERP database, the system ensures complete visibility and planning control for large industrial operations.
          </p>
          <div className="pt-2 flex gap-4">
            <Link
              href="/case-studies/ksew-enterprise-erp-transformation"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Read KS&EW ERP Case Study &rarr;
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
      contactHref="/contact?cta=industry-facilities-discuss&page_type=industry&interest=facilities&source_slug=facilities"
      contactText="Discuss a Facilities Platform"
    />
  );
}
