import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Case Studies | Software Platforms For Real Industries',
  description: 'Explore Logic Unit case studies across logistics, healthcare, retail, government platforms, fintech, ERP, and augmented reality.',
  alternates: {
    canonical: '/case-studies',
  },
  keywords: [
    'Logic Unit case studies',
    'software platforms for real industries',
    'product engineering company',
    'digital transformation case studies',
  ],
};

const categories = [
  {
    title: 'Logistics & Shipment Visibility',
    description: 'Real-time tracking, customer visibility, and unified logistics workflows.',
    items: [
      {
        name: 'Seagold Logistics Management & Shipment Tracking Platform',
        description: 'Logic Unit built an integrated logistics platform for Seagold with dynamic shipment tracking, operations management, customer portals, and analytics.',
        href: '/case-studies/seagold-logistics-management-platform',
      },
      {
        name: 'Bike Tour Pro: White-Label Tour Operator Platform',
        description: 'A specialized tour operator SaaS platform built to manage bookings, guides, schedules, routes, payments, and customer mobile apps.',
        href: '/ecosystem/bike-tour-pro',
      },
    ],
  },
  {
    title: 'Healthcare & Pharmaceutical Compliance',
    description: 'Patient engagement, clinical workflows, and pharmaceutical supply chain trust.',
    items: [
      {
        name: 'Novo Nordisk Professional Sample Ordering Application',
        description: 'Logic Unit developed a sample ordering and tracking portal to connect pharmaceutical teams with certified healthcare professionals.',
        href: '/case-studies/novo-nordisk-sample-ordering-application',
      },
      {
        name: 'AGP Drug Verifier Platform',
        description: 'Logic Unit built a secure pharmaceutical authentication platform to combat counterfeit drugs through digital validation workflows.',
        href: '/case-studies/agp-drug-verifier-platform',
      },
      {
        name: 'Hospitello: Digital Patient Engagement Platform',
        description: 'A comprehensive healthcare application supporting secure appointment booking, specialist discovery, clinic alerts, and patient communications.',
        href: '/ecosystem/hospitello',
      },
    ],
  },
  {
    title: 'Retail & Commerce Platforms',
    description: 'Enterprise point of sale systems, franchise operations, and digital commerce channel growth.',
    items: [
      {
        name: "Dunkin' Donuts Pakistan Retail Operations & Sales Platform",
        description: "Logic Unit designed and built Dunkin' Donuts Pakistan's core sales management, retail operations, and reporting platform.",
        href: '/case-studies/dunkin-donuts-retail-operations-platform',
      },
      {
        name: 'GiftWifts By Leopards Courier',
        description: 'Logic Unit supported a digital commerce and corporate gifting platform integrated with Leopard Courier logistics operations.',
        href: '/case-studies/giftwifts-leopards-courier',
      },
      {
        name: 'HULM POS: Unified Retail & Business OS',
        description: 'A multi-tenant retail operating platform consolidating billing, inventory control, purchase/vendor tracking, CRM, and regulatory tax compliance.',
        href: '/ecosystem/hulm-pos',
      },
    ],
  },
  {
    title: 'Government & Public Digital Platforms',
    description: 'Toll management, secure public payments, and high-transaction municipal platforms.',
    items: [
      {
        name: 'Smart Salik Digital Toll Management Platform',
        description: 'Logic Unit developed a digital toll account management platform to support traveler self-service, toll top-ups, and balance visibility.',
        href: '/case-studies/smart-salik-digital-toll-management',
      },
      {
        name: 'mPay Unified Government Payment Platform',
        description: 'Logic Unit built a high-security mobile and web billing portal for unified municipal service payments and revenue collection.',
        href: '/case-studies/mpay-government-payment-platform',
      },
    ],
  },
  {
    title: 'Enterprise & Emerging Technology',
    description: 'ERP transformation, asset management, and mission-critical consoles.',
    items: [
      {
        name: 'KS&EW Enterprise ERP Transformation',
        description: 'Logic Unit supported the shipyard’s digital transformation by integrating planning, inventory, HR, finance, and engineering into one system.',
        href: '/case-studies/ksew-enterprise-erp-transformation',
      },
      {
        name: 'Goodments Ethical Investing Platform',
        description: 'Logic Unit developed a specialized fintech application matching portfolios to ethical, environmental, and social criteria.',
        href: '/case-studies/goodments-ethical-investing-platform',
      },
      {
        name: 'Qatar Airways Augmented Reality Brand Engagement Experience',
        description: 'Logic Unit designed and built a mobile augmented reality campaign to drive interactive customer experiences and brand engagement.',
        href: '/case-studies/qatar-airways-augmented-reality-campaign',
      },
      {
        name: 'Titan CMMS: Enterprise Asset Maintenance Management',
        description: 'Pakistan’s first locally developed enterprise-grade CMMS designed to optimize asset performance, track lifecycle costs, and manage work orders.',
        href: '/ecosystem/titan-cmms',
      },
      {
        name: 'AnalyzeQuran: AI-Powered Quranic Research Platform',
        description: 'A linguistic study platform supporting morphological analysis, thematic root search, concept cross-referencing, and translation matrices.',
        href: '/ecosystem/analyzequran',
      },
      {
        name: 'MFCC: Mission-Critical Command & Control Console',
        description: 'A ruggedized maritime and defense operator workstation integrating radar, sonar, navigation parameters, and video surveillance feeds.',
        href: '/ecosystem/mfcc-command-control-console',
      },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Hero Section */}
      <section className="lu-shell relative overflow-hidden px-6 py-28 text-white lg:px-12 lg:py-36">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <Breadcrumbs />
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl mt-6">
            Case Studies: Software Platforms For Real Industries
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Logic Unit is a product engineering company and SaaS operating company building software platforms for real industries. These case studies show how the team has delivered logistics platforms, healthcare applications, retail operations systems, government digital services, fintech products, ERP transformation, and immersive brand experiences.
          </p>
        </div>
      </section>

      {/* Case Studies Categorized */}
      <section className="lu-section px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-20">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-8">
              <div className="border-b border-[rgba(16,39,122,0.1)] pb-4 max-w-3xl">
                <h2 className="text-2xl font-bold text-[#10277a] md:text-3xl">
                  {cat.title}
                </h2>
                <p className="text-slate-500 text-sm mt-1">{cat.description}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item, idx) => (
                  <article
                    key={idx}
                    className="lu-card lu-rule-top flex flex-col justify-between p-6 bg-white border border-[rgba(16,39,122,0.06)] shadow-sm hover:shadow-md transition-all"
                  >
                    <div>
                      <h3 className="mb-3 text-lg font-bold text-[#071330] line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="mb-8 text-sm leading-6 text-slate-600 line-clamp-4">
                        {item.description}
                      </p>
                    </div>
                    <div>
                      <Link
                        href={item.href}
                        className="inline-block text-sm font-bold text-[#10277a] hover:text-[#071330]"
                      >
                        Read Case Study &rarr;
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white px-6 py-24 lg:px-12 border-t border-[rgba(16,39,122,0.08)]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mb-4">
              Build Software Platforms For Real Industry Operations
            </h2>
            <p className="text-slate-600 text-lg">
              If your organization needs a product engineering and operating partner for industry-specific SaaS platforms, enterprise collaboration, or long-term product ecosystem growth, contact Logic Unit.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-block bg-[#10277a] px-8 py-4 text-center text-sm font-bold text-white hover:bg-[#071330] whitespace-nowrap transition-colors"
            >
              Contact Logic Unit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
