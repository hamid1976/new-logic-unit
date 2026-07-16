import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Logic Unit | Product Engineering & SaaS Operating Company',
  description: 'Logic Unit builds and operates industry-specific SaaS platforms for retail, healthcare, logistics, manufacturing, facilities, and enterprise operations.',
  alternates: {

      canonical: '/',

  },

  openGraph: {

      url: '/',

  },
  keywords: [
    'product engineering company',
    'SaaS operating company',
    'industry-specific SaaS platforms',
    'software platforms for real industries',
    'product ecosystem',
    'SaaS architecture',
    'data infrastructure',
    'enterprise collaboration',
  ],
};

const ecosystem = [
  {
    name: 'HULM POS',
    category: 'Retail POS & Business Platform',
    description: 'Retail POS and business management platform for sales, inventory, procurement, CRM, reporting, and FBR integration.',
    internalHref: '/ecosystem/hulm-pos',
    href: '/ecosystem/hulm-pos',
  },
  {
    name: 'Titan CMMS',
    category: 'Maintenance Management Platform',
    description: 'Maintenance management platform for assets, work orders, preventive maintenance, spare parts, and analytics.',
    internalHref: '/ecosystem/titan-cmms',
    href: '/ecosystem/titan-cmms',
  },
  {
    name: 'Hospitello',
    category: 'Digital Patient Engagement',
    description: 'Digital patient engagement platform for appointment booking, specialist discovery, patient education, and hospital communication.',
    internalHref: '/ecosystem/hospitello',
    href: '/ecosystem/hospitello',
  },
  {
    name: 'Bike Tour Pro',
    category: 'White-Label Tour Operator Platform',
    description: 'White-label SaaS platform for tour operators managing bookings, payments, communications, and mobile experiences.',
    internalHref: '/ecosystem/bike-tour-pro',
    href: '/ecosystem/bike-tour-pro',
  },
  {
    name: 'AnalyzeQuran',
    category: 'AI Quranic Research Platform',
    description: 'AI-powered Quranic research and learning platform for root-word analysis, thematic exploration, and intelligent search.',
    internalHref: '/ecosystem/analyzequran',
    href: '/ecosystem/analyzequran',
  },
  {
    name: 'MFCC',
    category: 'Mission-Critical Command & Control',
    description: 'Command and control workstation for maritime, defense, surveillance, and mission systems integration.',
    internalHref: '/ecosystem/mfcc-command-control-console',
    href: '/ecosystem/mfcc-command-control-console',
  },
  {
    name: 'AnimalCare360',
    category: 'Veterinary & Livestock Platform',
    description: 'AnimalCare360: livestock, feed retail, animal trading, and pet hospital software for farms, veterinary clinics, and animal care businesses.',
    internalHref: '/ecosystem/animalcare360-livestock-animal-care-software',
    href: '/ecosystem/animalcare360-livestock-animal-care-software',
  },
];

const caseStudies = [
  {
    name: 'Seagold Logistics Platform',
    description: 'Logistics management and shipment tracking platform with customer self-service.',
    href: '/case-studies/seagold-logistics-management-platform',
  },
  {
    name: 'Novo Nordisk Ordering App',
    description: 'Healthcare professional sample ordering and compliance application.',
    href: '/case-studies/novo-nordisk-sample-ordering-application',
  },
  {
    name: "Dunkin' Donuts Operations",
    description: "Mobile-first retail operations and sales management platform for Dunkin' Donuts.",
    href: '/case-studies/dunkin-donuts-retail-operations-platform',
  },
  {
    name: 'Smart Salik Toll App',
    description: 'Digital toll account management, vehicle registration, and payments portal.',
    href: '/case-studies/smart-salik-digital-toll-management',
  },
];

const workModel = [
  {
    step: '01',
    title: 'Identify Industry Gaps',
    body: 'We study operational inefficiencies in real-world industries and look for gaps where dedicated SaaS platforms can create stronger digital infrastructure.',
  },
  {
    step: '02',
    title: 'Build Dedicated Platforms',
    body: 'We engineer SaaS systems tailored to industry needs, with architecture and product direction shaped around real operating environments.',
  },
  {
    step: '03',
    title: 'Operate & Scale',
    body: 'We continuously evolve and manage these platforms long-term, supporting product growth through engineering, data infrastructure, and practical automation.',
  },
];

const industries = [
  { name: 'Retail', href: '/industries/retail' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Livestock', href: '/industries/livestock' },
  { name: 'Manufacturing', href: '/industries/manufacturing' },
  { name: 'Logistics', href: '/industries/logistics' },
  { name: 'Facilities', href: '/industries/facilities' },
];

const capabilities = [
  'SaaS architecture capability',
  'Practical AI integration',
  'IoT system integration',
  'Scalable multi-tenant systems',
  'Data infrastructure',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Hero Section */}
      <section className="lu-shell relative overflow-hidden px-6 py-28 text-white lg:px-12 lg:py-36">
        <div className="lu-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-20 translate-y-20 border-[34px] border-[#7bd72f]/15" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:items-center">
          {/* Left Column - Core Text & Stats */}
          <div className="max-w-5xl lg:col-span-7">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">
              Product Engineering & Operating Company
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              SaaS Operating & Product Engineering Company
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
              Logic Unit is a product engineering company building and operating industry-specific SaaS platforms for real industries. Our platforms support retail, healthcare, logistics, manufacturing, facilities, and enterprise operations.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/ecosystem" className="bg-[#7bd72f] px-6 py-3 text-center text-sm font-bold text-[#071330] hover:bg-[#93e74e] no-underline">
                Explore Ecosystem
              </Link>
              <Link href="/contact" className="border border-white/35 px-6 py-3 text-center text-sm font-semibold text-white hover:border-[#7bd72f] no-underline">
                Partner With Us
              </Link>
            </div>

            {/* Sleek horizontal metrics bar */}
            <div className="mt-14 grid gap-6 sm:grid-cols-3 max-w-3xl border-t border-white/10 pt-8">
              {[
                ['2013', 'Founded with a long-term engineering mindset'],
                ['7 Platforms', 'Approved SaaS platforms & solutions'],
                ['6 Industries', 'Industry categories served through products'],
              ].map(([metric, label]) => (
                <div key={metric} className="flex flex-col border-l-2 border-[#7bd72f] pl-4">
                  <span className="text-2xl font-bold text-[#7bd72f]">{metric}</span>
                  <span className="text-xs leading-5 text-slate-300 mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Platform Diagram */}
          <div className="relative flex items-center justify-center p-4 lg:p-0 lg:col-span-5">
            <div className="absolute inset-0 bg-radial-gradient from-[#7bd72f]/10 to-transparent blur-3xl opacity-60" aria-hidden="true" />
            
            <div className="relative w-full max-w-[420px] aspect-square rounded-full border border-white/5 bg-white/[0.02] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md">
              <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-dashed border-[#7bd72f]/20 animate-[spin_40s_linear_infinite_reverse]" />
              
              <svg className="absolute inset-0 w-full h-full animate-pulse" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="200" y1="200" x2="200" y2="80" stroke="rgba(123, 215, 47, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="200" x2="80" y2="280" stroke="rgba(123, 215, 47, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="200" x2="320" y2="280" stroke="rgba(123, 215, 47, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                
                <circle r="4" fill="#7bd72f">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 200 200 L 200 80" />
                </circle>
                <circle r="4" fill="#7bd72f">
                  <animateMotion dur="3.5s" repeatCount="indefinite" path="M 200 200 L 80 280" />
                </circle>
                <circle r="4" fill="#7bd72f">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M 200 200 L 320 280" />
                </circle>
              </svg>

              {/* Orbiting Platforms */}
              <Link href="/ecosystem/hulm-pos" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 group cursor-pointer no-underline block">
                <div className="flex flex-col items-center">
                  <div className="bg-[#071330] border border-white/10 group-hover:border-[#7bd72f] p-3 shadow-lg rounded-xl transition-all duration-300">
                    <span className="text-xs font-bold text-slate-400 group-hover:text-white uppercase tracking-wider block text-center">HULM POS</span>
                    <span className="text-[9px] text-slate-500 block text-center">Retail OS</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#7bd72f] mt-1 animate-pulse" />
                </div>
              </Link>

              <Link href="/ecosystem/titan-cmms" className="absolute bottom-[10%] left-0 -translate-x-1/4 group cursor-pointer no-underline block">
                <div className="flex flex-col items-center">
                  <div className="bg-[#071330] border border-white/10 group-hover:border-[#7bd72f] p-3 shadow-lg rounded-xl transition-all duration-300">
                    <span className="text-xs font-bold text-slate-400 group-hover:text-white uppercase tracking-wider block text-center">Titan CMMS</span>
                    <span className="text-[9px] text-slate-500 block text-center">Maintenance</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#7bd72f] mt-1 animate-pulse" />
                </div>
              </Link>

              <Link href="/ecosystem/animalcare360-livestock-animal-care-software" className="absolute bottom-[10%] right-0 translate-x-1/4 group cursor-pointer no-underline block">
                <div className="flex flex-col items-center">
                  <div className="bg-[#071330] border border-white/10 group-hover:border-[#7bd72f] p-3 shadow-lg rounded-xl transition-all duration-300">
                    <span className="text-xs font-bold text-slate-400 group-hover:text-white uppercase tracking-wider block text-center">AnimalCare</span>
                    <span className="text-[9px] text-slate-500 block text-center">Livestock</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#7bd72f] mt-1 animate-pulse" />
                </div>
              </Link>

              {/* Central Core: Logic Unit Engine */}
              <div className="absolute inset-[30%] flex flex-col items-center justify-center bg-[#071330]/90 border-2 border-[#7bd72f] rounded-full shadow-[0_0_30px_rgba(123,215,47,0.3)] p-4 text-center">
                <span className="text-sm font-extrabold text-[#7bd72f] tracking-widest uppercase">Logic Unit</span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Ecosystem</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Position */}
      <section id="company" className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="lu-eyebrow mb-4">Company Positioning</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              A product engineering and operating company founded in 2013.
            </h2>
          </div>
          <div className="space-y-6 border-l-4 border-[#7bd72f] pl-8 text-lg leading-8 text-slate-600">
            <p>
              Logic Unit builds independent SaaS platforms designed for industries where digital infrastructure is still evolving.
            </p>
            <p>
              We are not a software agency or a single-product SaaS company. We develop long-term product ecosystems, engineer scalable platforms, and operate them with a deep understanding of the industries they serve.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="lu-section bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="lu-eyebrow mb-4">How We Work</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              We build industry platforms through a long-term operating model.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {workModel.map((item) => (
              <div key={item.step} className="lu-card lu-rule-top p-8">
                <p className="mb-10 text-sm font-bold text-[#7bd72f]">{item.step}</p>
                <h3 className="mb-4 text-xl font-semibold text-[#071330]">{item.title}</h3>
                <p className="leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Ecosystem Proof Section */}
      <section id="ecosystem" className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="lu-eyebrow mb-4">Product Ecosystem</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              A Product Ecosystem Built For Real Operating Environments
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Logic Unit builds and operates software platforms for real industries through a growing product ecosystem. The ecosystem includes retail operations, maintenance management, healthcare engagement, Quranic research, travel operations, and mission-critical command environments.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((product) => (
              <article key={product.name} className="lu-card lu-rule-top flex min-h-72 flex-col p-8 bg-white border border-[rgba(16,39,122,0.06)] shadow-sm">
                <p className="mb-4 text-sm font-medium text-slate-500">{product.category}</p>
                <h3 className="mb-5 text-2xl font-semibold text-[#10277a]">{product.name}</h3>
                <p className="mb-10 leading-7 text-slate-600">{product.description}</p>
                <div className="mt-auto">
                  <Link
                    href={product.internalHref}
                    className="text-sm font-bold text-[#10277a] underline decoration-[#7bd72f] decoration-2 underline-offset-4 hover:text-[#071330] no-underline block"
                  >
                    Explore Product Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/ecosystem"
              className="inline-block bg-[#10277a] px-8 py-3 text-sm font-bold text-white hover:bg-[#071330] no-underline"
            >
              Explore The Product Ecosystem
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Proof Section */}
      <section id="case-studies" className="lu-section bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="lu-eyebrow mb-4">Case Studies</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              Proof Across Real Industry Platforms
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Logic Unit's product engineering work includes logistics management platforms, healthcare applications, retail operations systems, government digital services, fintech platforms, ERP transformation, and augmented reality engagement experiences.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((cs) => (
              <article key={cs.name} className="lu-card flex flex-col justify-between p-6 bg-[#fbfaf6] border border-[rgba(16,39,122,0.06)] shadow-sm hover:border-[#10277a] transition-colors">
                <div>
                  <h3 className="mb-3 text-lg font-bold text-[#10277a]">{cs.name}</h3>
                  <p className="mb-6 text-xs leading-5 text-slate-600">{cs.description}</p>
                </div>
                <Link href={cs.href} className="text-xs font-bold text-[#10277a] hover:text-[#071330] no-underline">
                  Read Case Study &rarr;
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="inline-block bg-[#10277a] px-8 py-3 text-sm font-bold text-white hover:bg-[#071330] no-underline"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12 border-t border-[rgba(16,39,122,0.06)]">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="lu-eyebrow mb-4">Industries</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              Industries served through our platforms.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Logic Unit platforms serve retail, healthcare, livestock, manufacturing, logistics, and facilities through industry-specific SaaS products built for real operational environments.
            </p>
            <Link
              href="/industries"
              className="inline-block mt-8 text-sm font-bold text-[#10277a] underline decoration-[#7bd72f] decoration-2 underline-offset-4 hover:text-[#071330]"
            >
              Explore Industries
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-px bg-[rgba(16,39,122,0.14)] md:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="bg-white p-8 text-lg font-bold text-[#10277a] hover:bg-[#10277a] hover:text-white transition-all duration-200 no-underline"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section id="technology" className="lu-shell px-6 py-24 text-white lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">Technology & Innovation</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              The R&D and engineering backbone behind industry SaaS.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Logic Unit designs multi-tenant platforms, data infrastructure, integration layers, and practical automation capabilities that support long-term product growth. Our approach to innovation is grounded in real operational use, not technology hype.
            </p>
          </div>
          <div className="grid gap-px bg-white/15">
            {capabilities.map((capability) => (
              <div key={capability} className="bg-[#071330]/80 p-6 text-lg font-semibold text-slate-100">
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="lu-eyebrow mb-4">Build, Operate, Or Expand</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mb-4">
              Build, Operate, Or Expand An Industry Software Platform
            </h2>
            <p className="text-slate-600 text-lg">
              Talk to Logic Unit about product ecosystem growth, strategic SaaS partnerships, system integrator relationships, enterprise collaboration, or platform development for real industry operations.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row flex-shrink-0">
            <Link
              href="/contact"
              className="bg-[#10277a] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#071330] no-underline transition-colors"
            >
              Contact Logic Unit
            </Link>
            <Link
              href="/case-studies"
              className="border border-[#10277a] px-6 py-3 text-center text-sm font-semibold text-[#10277a] hover:bg-[#f4f7fb] no-underline transition-colors"
            >
              Explore Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
