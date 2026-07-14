import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Technology & R&D Backbone | Logic Unit',
  description: "Explore Logic Unit's SaaS architecture, data infrastructure, mobile platforms, AI integration, IoT integration, and enterprise system experience.",
  alternates: {
    canonical: '/technology',
  },
  keywords: [
    'SaaS architecture',
    'data infrastructure',
    'multi-tenant systems',
    'AI integration',
    'IoT integration',
    'cloud infrastructure',
    'mobile applications',
    'enterprise integrations',
    'secure authentication',
    'payment integrations',
  ],
};

const capabilities = [
  {
    name: 'SaaS Architecture & Multi-Tenant Systems',
    description:
      'We design robust, secure, and scalable multi-tenant architectures. Our platforms ensure absolute database separation, data safety, and optimized resource allocation to handle enterprise-level scale.',
  },
  {
    name: 'Data Infrastructure & Real-Time Analytics',
    description:
      'Our systems are built on high-performance data infrastructure capable of processing high-volume transactional logs, operation metrics, and reporting analytics for real-world industries.',
  },
  {
    name: 'Practical AI & Machine Learning Integration',
    description:
      'We integrate AI capabilities directly into operational workflows where they solve concrete business problems, such as predictive asset reliability in facilities or veterinary health insights in livestock.',
  },
  {
    name: 'IoT & Device System Integration',
    description:
      'We connect physical operations to cloud environments. Our IoT layers integrate device diagnostics, telemetry, and tracking networks directly into SaaS platform dashboards.',
  },
  {
    name: 'Practical Operational Automation',
    description:
      'Reducing operational overhead is central to our platforms. We automate repetitive industrial and logistical workflows, reducing manual errors and enhancing speed across organizations.',
  },
];

const productProof = [
  {
    name: 'HULM POS',
    tech: 'POS, inventory, procurement, CRM, reporting, FBR integration, payment gateways, ERP systems, accounting platforms, and eCommerce platforms.',
  },
  {
    name: 'Titan CMMS',
    tech: 'Asset management, preventive maintenance, predictive maintenance, IoT integration, ERP integration, dashboards, and maintenance analytics.',
  },
  {
    name: 'AnalyzeQuran',
    tech: 'AI search engine, NLP processing, mobile applications, cloud infrastructure, and translation databases.',
  },
  {
    name: 'Hospitello',
    tech: 'Mobile applications, push notifications, analytics dashboard, appointment management, and secure data handling.',
  },
  {
    name: 'Bike Tour Pro',
    tech: 'Mobile apps, web portal, payment integrations, navigation integrations, and cloud infrastructure.',
  },
  {
    name: 'MFCC',
    tech: 'Ruggedized hardware, mission systems integration, sensor networks, C4I systems, navigation platforms, and video systems.',
  },
  {
    name: 'AnimalCare360',
    tech: 'CattlePro livestock operations, dairy farm management, feed/wanda retail software, animal trading, pet hospital EMR, inventory management, POS billing, and FBR integration.',
  },
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Hero Shell */}
      <section className="lu-shell relative overflow-hidden px-6 py-28 text-white lg:px-12 lg:py-36">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs />
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl mt-6">
            The R&D and engineering backbone behind industry SaaS.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Logic Unit designs multi-tenant platforms, data infrastructure, integration layers, and practical automation capabilities that support long-term product growth. Our approach to innovation is grounded in real operational use, not technology hype.
          </p>
        </div>
      </section>

      {/* R&D Overview Section */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
            Engineering software that runs real-world operations.
          </h2>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              We invest heavily in developing standard reusable software blocks that form the technical foundation of all our ecosystem platforms. This means our product companies can focus entirely on industry workflows, knowing they are supported by a high-grade security, database, and telemetry layer.
            </p>
            <p>
              Our engineering culture prioritizes longevity, robustness, and performance over chasing trending frameworks. We write clean, type-safe, and highly maintainable codebases meant to run for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="lu-eyebrow mb-4">Core Capabilities</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              Our engineering focus areas.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <article key={cap.name} className="lu-card lu-rule-top p-8 bg-white border border-[rgba(16,39,122,0.06)] shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-[#10277a]">{cap.name}</h3>
                <p className="leading-7 text-slate-600">{cap.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Proven Through Product Platforms */}
      <section className="lu-section bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Proven in Production</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Technology Proven Through Product Platforms
            </h2>
            <p className="mt-4 text-slate-600">
              Logic Unit's technology backbone supports software platforms for real industries, including POS and business management, maintenance management, healthcare engagement, AI-powered research, travel operations, and mission-critical command environments.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productProof.map((pp) => (
              <article key={pp.name} className="lu-card p-6 bg-[#fbfaf6] border border-[rgba(16,39,122,0.04)] shadow-sm">
                <h3 className="text-lg font-bold text-[#10277a] mb-3">{pp.name}</h3>
                <p className="text-xs leading-5 text-slate-600">{pp.tech}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mapped Capabilities Proof Section */}
      <section className="lu-section bg-white px-6 py-24 lg:px-12 border-t border-[rgba(16,39,122,0.06)]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Capability Mapping</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Technology Capabilities Proven In Delivered Platforms
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              We verify and demonstrate our technical capabilities through real-world ecosystem and case study deliveries.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                capability: 'Cloud Infrastructure',
                caseStudies: [
                  { name: 'Seagold Logistics', href: '/case-studies/seagold-logistics-management-platform' },
                  { name: 'Goodments', href: '/case-studies/goodments-ethical-investing-platform' },
                  { name: 'Bike Tour Pro', href: '/ecosystem/bike-tour-pro' },
                  { name: 'AnimalCare360 Platform', href: '/ecosystem/animalcare360-livestock-animal-care-software' }
                ]
              },
              {
                capability: 'Secure Authentication',
                caseStudies: [
                  { name: 'Seagold Logistics', href: '/case-studies/seagold-logistics-management-platform' },
                  { name: 'Goodments', href: '/case-studies/goodments-ethical-investing-platform' },
                  { name: "Dunkin' Donuts Pakistan", href: '/case-studies/dunkin-donuts-retail-operations-platform' }
                ]
              },
              {
                capability: 'Payment Integration',
                caseStudies: [
                  { name: 'mPay Government Payment', href: '/case-studies/mpay-government-payment-platform' },
                  { name: 'Smart Salik Toll', href: '/case-studies/smart-salik-digital-toll-management' },
                  { name: 'GiftWifts Leopards', href: '/case-studies/giftwifts-leopards-courier' }
                ]
              },
              {
                capability: 'Mobile Applications',
                caseStudies: [
                  { name: 'Novo Nordisk App', href: '/case-studies/novo-nordisk-sample-ordering-application' },
                  { name: 'Smart Salik Toll', href: '/case-studies/smart-salik-digital-toll-management' },
                  { name: 'mPay Government Payment', href: '/case-studies/mpay-government-payment-platform' },
                  { name: 'Goodments', href: '/case-studies/goodments-ethical-investing-platform' },
                  { name: "Dunkin' Donuts Pakistan", href: '/case-studies/dunkin-donuts-retail-operations-platform' },
                  { name: 'AnimalCare360 Android App', href: 'https://animalcare360.com/download-app' }
                ]
              },
              {
                capability: 'Inventory & POS Systems',
                caseStudies: [
                  { name: 'HULM Retail POS', href: '/ecosystem/hulm-pos' },
                  { name: 'AnimalCare360 Wanda POS', href: 'https://animalcare360.com/feed-retail' }
                ]
              },
              {
                capability: 'API & External Integrations',
                caseStudies: [
                  { name: 'Seagold Logistics', href: '/case-studies/seagold-logistics-management-platform' },
                  { name: 'mPay Government Payment', href: '/case-studies/mpay-government-payment-platform' },
                  { name: 'Smart Salik Toll', href: '/case-studies/smart-salik-digital-toll-management' },
                  { name: 'KS&EW ERP Transformation', href: '/case-studies/ksew-enterprise-erp-transformation' }
                ]
              },
              {
                capability: 'ERP & Enterprise Integration',
                caseStudies: [
                  { name: 'KS&EW ERP Transformation', href: '/case-studies/ksew-enterprise-erp-transformation' },
                  { name: 'Titan CMMS', href: '/ecosystem/titan-cmms' }
                ]
              },
              {
                capability: 'Analytics & Reporting',
                caseStudies: [
                  { name: 'Seagold Logistics', href: '/case-studies/seagold-logistics-management-platform' },
                  { name: 'GiftWifts Leopards', href: '/case-studies/giftwifts-leopards-courier' },
                  { name: "Dunkin' Donuts Pakistan", href: '/case-studies/dunkin-donuts-retail-operations-platform' },
                  { name: 'AGP Drug Verifier', href: '/case-studies/agp-drug-verifier-platform' },
                  { name: 'Qatar Airways AR', href: '/case-studies/qatar-airways-augmented-reality-campaign' }
                ]
              },
              {
                capability: 'Health Records Tracking',
                caseStudies: [
                  { name: 'Hospitello Patient Engagement', href: '/ecosystem/hospitello' },
                  { name: 'AnimalCare360 EMR & Health', href: 'https://animalcare360.com/features/health-tracking' }
                ]
              },
              {
                capability: 'AI / NLP Engineering',
                caseStudies: [
                  { name: 'AnalyzeQuran AI Search', href: '/ecosystem/analyzequran' },
                  { name: 'mPay Arabic NLP', href: '/case-studies/mpay-government-payment-platform' }
                ]
              },
              {
                capability: 'AR Technology',
                caseStudies: [
                  { name: 'Qatar Airways AR Campaign', href: '/case-studies/qatar-airways-augmented-reality-campaign' }
                ]
              }
            ].map((item) => (
              <article key={item.capability} className="lu-card p-6 bg-[#fbfaf6] border border-[rgba(16,39,122,0.06)] shadow-sm hover:border-[#10277a] transition-colors flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#10277a] mb-4">{item.capability}</h3>
                </div>
                <div className="space-y-2 border-t border-[rgba(16,39,122,0.08)] pt-4 mt-auto">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">Delivered Proof</p>
                  {item.caseStudies.map((cs) => (
                    <Link
                      key={cs.name}
                      href={cs.href}
                      className="block text-xs font-bold text-[#10277a] hover:text-[#071330] no-underline"
                    >
                      &bull; {cs.name} &rarr;
                    </Link>
                  ))}
                </div>
              </article>
            )) }
          </div>
        </div>
      </section>

      {/* Case Studies Proof Section */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Proven Delivery</span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2 mb-4">
            Enterprise, Government, Healthcare, And Retail Delivery Experience
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Logic Unit's case studies show delivery across logistics management, pharmaceutical compliance, eCommerce, drug authentication, ERP transformation, ethical investing, government toll management, government payments, retail operations, and augmented reality engagement.
          </p>
          <Link
            href="/case-studies"
            className="inline-block bg-[#10277a] px-8 py-3 text-sm font-bold text-white hover:bg-[#071330] no-underline"
          >
            View Case Studies
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-6 py-24 lg:px-12 border-t border-[rgba(16,39,122,0.06)]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              Partner with a technical operating company.
            </h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              If you want to collaborate on platform integrations, digital infrastructure, or explore how our R&D backbone can support your operations, contact Logic Unit.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row flex-shrink-0">
            <Link
              href="/ecosystem"
              className="border border-[#10277a] px-6 py-3 text-center text-sm font-semibold text-[#10277a] hover:bg-[#f4f7fb] whitespace-nowrap no-underline"
            >
              Explore Ecosystem
            </Link>
            <Link
              href="/contact"
              className="bg-[#10277a] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#071330] whitespace-nowrap"
            >
              Contact Logic Unit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
