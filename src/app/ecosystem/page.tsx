import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Product Ecosystem | Industry SaaS Platforms By Logic Unit',
  description: "Explore Logic Unit's SaaS product ecosystem, including HULM POS, Titan CMMS, Hospitello, Bike Tour Pro, AnalyzeQuran, MFCC, and AnimalCare360.",
  alternates: {
    canonical: '/ecosystem',
  },
  keywords: [
    'product ecosystem',
    'SaaS product ecosystem',
    'SaaS operating company',
    'HULM POS',
    'Titan CMMS',
    'AnimalCare360',
    'Hospitello',
    'Bike Tour Pro',
    'AnalyzeQuran',
    'MFCC',
    'independent software platforms',
    'industry-specific SaaS platforms',
  ],
};

interface RelatedCaseStudy {
  name: string;
  href: string;
}

interface Product {
  name: string;
  category: string;
  description: string;
  internalHref: string;
  internalText?: string;
  externalHref?: string;
  externalText?: string;
  relatedCaseStudies?: RelatedCaseStudy[];
}

const products: Product[] = [
  {
    name: 'HULM POS',
    category: 'Retail POS & Business OS',
    description: 'Unified retail and business management platform for POS, inventory, procurement, CRM, reporting, employee management, and FBR integration.',
    internalHref: '/ecosystem/hulm-pos',
    relatedCaseStudies: [
      { name: "Dunkin' Donuts Pakistan", href: '/case-studies/dunkin-donuts-retail-operations-platform' },
      { name: 'GiftWifts Leopards', href: '/case-studies/giftwifts-leopards-courier' },
    ],
  },
  {
    name: 'Titan CMMS',
    category: 'Computerized Maintenance Management System',
    description: 'Enterprise-grade maintenance management platform for asset management, preventive maintenance, work orders, spare parts, and analytics.',
    internalHref: '/ecosystem/titan-cmms',
    relatedCaseStudies: [
      { name: 'KS&EW ERP', href: '/case-studies/ksew-enterprise-erp-transformation' },
    ],
  },
  {
    name: 'Hospitello',
    category: 'Digital Patient Engagement',
    description: 'Digital patient engagement platform for appointment booking, specialist discovery, patient education, notifications, and hospital dashboards.',
    internalHref: '/ecosystem/hospitello',
    relatedCaseStudies: [
      { name: 'Novo Nordisk App', href: '/case-studies/novo-nordisk-sample-ordering-application' },
      { name: 'AGP Drug Verifier', href: '/case-studies/agp-drug-verifier-platform' },
    ],
  },
  {
    name: 'Bike Tour Pro',
    category: 'White-Label Tour Operator Platform',
    description: 'White-label tour operator SaaS platform for booking management, customer mobile apps, payments, communications, and analytics.',
    internalHref: '/ecosystem/bike-tour-pro',
  },
  {
    name: 'AnalyzeQuran',
    category: 'AI Quranic Research Platform',
    description: 'AI-powered Quranic research and learning platform for root-word analysis, thematic search, translation comparison, notes, bookmarks, and cross-referencing.',
    internalHref: '/ecosystem/analyzequran',
  },
  {
    name: 'MFCC',
    category: 'Mission-Critical Command & Control',
    description: 'Mission-critical command and control workstation for maritime, defense, surveillance, and integrated operational monitoring environments.',
    internalHref: '/ecosystem/mfcc-command-control-console',
  },
  {
    name: 'AnimalCare360',
    category: 'Veterinary & Livestock Platform',
    description: 'Livestock, feed retail, animal trading, and pet hospital software for farms, wanda shops, veterinary clinics, and animal care businesses.',
    internalHref: '/ecosystem/animalcare360-livestock-animal-care-software',
    internalText: 'View Logic Unit Product Page',
    externalHref: 'https://animalcare360.com',
    externalText: 'Visit AnimalCare360',
  },
];

export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Hero Shell */}
      <section className="lu-shell relative overflow-hidden px-6 py-28 text-white lg:px-12 lg:py-36">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl mt-6">
            A Product Ecosystem For Real Industry Operations
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Logic Unit is a product engineering and SaaS operating company building software platforms for real industries. Its product ecosystem brings together independent platforms for retail operations, maintenance management, healthcare engagement, livestock and animal care, Quranic research, travel operations, and mission-critical command environments.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="lu-card lu-rule-top flex min-h-[320px] flex-col p-8 bg-white justify-between"
              >
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {product.category}
                  </p>
                  <h3 className="mb-5 text-2xl font-semibold text-[#10277a]">
                    {product.name}
                  </h3>
                  <p className="mb-6 text-sm leading-6 text-slate-600">
                    {product.description}
                  </p>

                  {/* Inline related case study links to prevent confusion */}
                  {product.relatedCaseStudies && (
                    <div className="mt-4 border-t border-[rgba(16,39,122,0.08)] pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Related Proof</p>
                      <div className="flex flex-col gap-2">
                        {product.relatedCaseStudies.map((cs) => (
                          <Link
                            key={cs.name}
                            href={cs.href}
                            className="block text-xs font-bold text-[#10277a] hover:text-[#071330] no-underline"
                          >
                            &bull; {cs.name} &rarr;
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-8 flex flex-col gap-2">
                  <Link
                    href={product.internalHref}
                    className="inline-block text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
                  >
                    {product.internalText || 'Explore Product Details'} &rarr;
                  </Link>
                  {product.externalHref && (
                    <a
                      href={product.externalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs font-semibold text-slate-500 hover:text-slate-800"
                    >
                      {product.externalText} &rarr;
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-6 py-24 lg:px-12 border-t border-[rgba(16,39,122,0.06)]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mb-4">
              Explore Partnership Routes Into The Logic Unit Ecosystem
            </h2>
            <p className="text-slate-600 text-lg">
              Logic Unit works with strategic partners, system integrators, and enterprise collaborators to expand industry-specific SaaS platforms and software infrastructure for real operating environments.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/partnerships"
              className="inline-block bg-[#10277a] px-8 py-4 text-center text-sm font-bold text-white hover:bg-[#071330] no-underline transition-colors"
            >
              Partner With Logic Unit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
