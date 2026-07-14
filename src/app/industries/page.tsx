import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Industry-Specific SaaS Platforms | Logic Unit',
  description: 'Logic Unit builds and operates industry-specific SaaS platforms for retail, healthcare, livestock, manufacturing, logistics, and facilities.',
  alternates: {

      canonical: '/industries',

  },

  openGraph: {

      url: '/industries',

  },
};

const industries = [
  {
    name: 'Retail Software Platforms',
    description: "Retail teams need visibility across sales, branches, inventory, customers, reporting, and daily operations. Logic Unit's source-approved retail work includes HULM POS, Dunkin' Donuts Pakistan's retail operations platform, and GiftWifts by Leopards Courier.",
    hubHref: '/industries/retail',
    links: [
      { label: 'Retail Industry Hub', href: '/industries/retail' },
      { label: 'HULM POS Product Details', href: '/ecosystem/hulm-pos' },
      { label: "Dunkin' Donuts Case Study", href: '/case-studies/dunkin-donuts-retail-operations-platform' },
      { label: 'GiftWifts Leopards Case Study', href: '/case-studies/giftwifts-leopards-courier' },
    ],
  },
  {
    name: 'Healthcare Software Platforms',
    description: "Healthcare organizations need secure, compliant, patient-facing and professional-facing digital workflows. Logic Unit's healthcare source includes Hospitello, Novo Nordisk's sample ordering application, and AGP's drug verifier platform.",
    hubHref: '/industries/healthcare',
    links: [
      { label: 'Healthcare Industry Hub', href: '/industries/healthcare' },
      { label: 'Hospitello Product Details', href: '/ecosystem/hospitello' },
      { label: 'Novo Nordisk Case Study', href: '/case-studies/novo-nordisk-sample-ordering-application' },
      { label: 'AGP Drug Verifier Case Study', href: '/case-studies/agp-drug-verifier-platform' },
    ],
  },
  {
    name: 'Logistics Software Platforms',
    description: 'Logistics and transportation environments need real-time visibility, self-service, payment workflows, and operational tracking. Source-approved examples include Seagold, Smart Salik, and mPay.',
    hubHref: '/industries/logistics',
    links: [
      { label: 'Logistics Industry Hub', href: '/industries/logistics' },
      { label: 'Seagold Shipment Case Study', href: '/case-studies/seagold-logistics-management-platform' },
      { label: 'Smart Salik Toll Case Study', href: '/case-studies/smart-salik-digital-toll-management' },
      { label: 'mPay Government Payment Case Study', href: '/case-studies/mpay-government-payment-platform' },
    ],
  },
  {
    name: 'Manufacturing Software Platforms',
    description: 'Manufacturing and engineering organizations need maintenance visibility, asset control, procurement workflows, engineering integration, and enterprise reporting. Source-approved examples include Titan CMMS and KS&EW ERP transformation.',
    hubHref: '/industries/manufacturing',
    links: [
      { label: 'Manufacturing Industry Hub', href: '/industries/manufacturing' },
      { label: 'Titan CMMS Product Details', href: '/ecosystem/titan-cmms' },
      { label: 'KS&EW ERP Case Study', href: '/case-studies/ksew-enterprise-erp-transformation' },
    ],
  },
  {
    name: 'Facilities Software Platforms',
    description: 'Facilities and maintenance operations need work order visibility, asset history, spare parts management, preventive maintenance, and reliable operational monitoring. Titan CMMS and MFCC support this section.',
    hubHref: '/industries/facilities',
    links: [
      { label: 'Facilities Industry Hub', href: '/industries/facilities' },
      { label: 'Titan CMMS Product Details', href: '/ecosystem/titan-cmms' },
      { label: 'MFCC Workstation Details', href: '/ecosystem/mfcc-command-control-console' },
    ],
  },
  {
    name: 'Livestock Software Platforms',
    description: 'Logic Unit platforms support livestock, veterinary, and animal care operations through digital systems built for real industry workflows. Our primary source-backed livestock proof is AnimalCare360.',
    hubHref: '/industries/livestock',
    links: [
      { label: 'Livestock Industry Hub', href: '/industries/livestock' },
      { label: 'AnimalCare360 Product Details', href: '/ecosystem/animalcare360-livestock-animal-care-software' },
    ],
  },
];

export default function IndustryPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Hero Shell */}
      <section className="lu-shell relative overflow-hidden px-6 py-28 text-white lg:px-12 lg:py-36">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs />
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl mt-6">
            Industry-Specific SaaS Platforms For Real Operations
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Logic Unit builds and operates software platforms for real industries. The company's product ecosystem and case studies show experience across retail, healthcare, logistics, manufacturing, facilities, government digital services, fintech, and enterprise operating environments.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
            Unifying workflow, visibility, and control in specific verticals.
          </h2>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Rather than generic business software, we specialize in building deep-domain SaaS solutions tailored to specific industries. Each industry platform addresses the specific compliance, reporting, and operational needs of that sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.name} className="lu-card flex flex-col p-8 bg-white justify-between border border-[rgba(16,39,122,0.06)] shadow-sm">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-[#10277a]">{industry.name}</h3>
                  <p className="mb-8 text-sm leading-6 text-slate-600">{industry.description}</p>
                </div>
                <div className="border-t border-[rgba(16,39,122,0.08)] pt-4 mt-auto space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Related Links</p>
                  {industry.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.href}
                      className="block text-xs font-bold text-[#10277a] hover:text-[#071330] no-underline"
                    >
                      &bull; {link.label} &rarr;
                    </Link>
                  ))}
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
              Build Industry Software Infrastructure With Logic Unit
            </h2>
            <p className="text-slate-600 text-lg">
              If your organization needs a SaaS operating company or product engineering company for industry-specific SaaS platforms, contact Logic Unit for enterprise collaboration or strategic partnership discussions.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-block bg-[#10277a] px-8 py-4 text-center text-sm font-bold text-white hover:bg-[#071330] no-underline transition-colors"
            >
              Contact Logic Unit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
