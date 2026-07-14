import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Manufacturing Software Platforms | Logic Unit',
  description: 'Logic Unit builds and operates SaaS platforms for industrial operations, maintenance management, and enterprise ERP integration.',
  alternates: {

      canonical: '/industries/manufacturing',

  },

  openGraph: {

      url: '/industries/manufacturing',

  },
};

export default function ManufacturingPage() {
  const sections = [
    {
      title: 'Industrial Manufacturing & Maintenance Challenges',
      body: (
        <div className="space-y-4">
          <p>
            Manufacturing plants, assembly factories, and industrial engineering facilities face severe operational losses from unplanned machine downtime. Without centralized tracking, maintenance remains reactive (break-fix), accelerating equipment wear and delaying schedules. Paper logs and spreadsheets lead to lost work history, poor spare parts visibility, and safety compliance gaps during audits.
          </p>
          <p>
            Logic Unit designs industrial software ecosystems that centralize asset registries, schedule automatic preventive maintenance, and connect spare parts inventory with operational maintenance schedules to reduce costs and maintain steady production throughput.
          </p>
        </div>
      ),
    },
    {
      title: 'Ecosystem Product: Titan CMMS Platform',
      body: (
        <div className="space-y-4">
          <p>
            To address unplanned failures and transition factories to proactive maintenance, Logic Unit engineered Titan CMMS (Computerized Maintenance Management System). Titan CMMS is designed to optimize asset performance, schedule preventive maintenance, and manage spare parts stock.
          </p>
          <p>
            Key modules of Titan CMMS include digital asset life cycle logs, calendar and meter-based work order triggers, real-time technician task dispatching, mobile offline access from the plant floor, and maintenance KPI dashboards tracking MTTR and MTBF.
          </p>
          <div className="pt-2">
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
      title: 'Case Study: KS&EW Enterprise ERP Transformation',
      body: (
        <div className="space-y-4">
          <p>
            Logic Unit participated in the digital transformation of Karachi Shipyard & Engineering Works (KS&EW), a leading maritime manufacturing and shipbuilding facility. The enterprise ERP integration unified engineering CAD designs, procurement logistics, shipbuilding operations, contract management, and financial reporting.
          </p>
          <p>
            By implementing a unified ERP platform, KS&EW eliminated information silos, established advanced project budgeting controls, optimized supplier tracking for marine steel, and created real-time executive reports for complex engineering projects.
          </p>
          <div className="pt-2">
            <Link
              href="/case-studies/ksew-enterprise-erp-transformation"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Read KS&EW Case Study &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Ecosystem Product: MFCC Command & Control Console',
      body: (
        <div className="space-y-4">
          <p>
            Extending our industrial capabilities, Logic Unit designs mission-critical hardware-software systems. The Multi-Function Command & Control Console (MFCC) is a ruggedized operational workstation engineered for maritime and defense environments.
          </p>
          <p>
            Featuring dual marine-grade displays, Touch Input Displays (TID), and vibration-resistant construction, the MFCC integrates radar, sonar, navigation, and video feeds, illustrating our ability to build critical software-hardware integrations.
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
