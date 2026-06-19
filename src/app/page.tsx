import type { Metadata } from 'next'
import Link from 'next/link'
import { LogicUnitLogo } from '@/components/brand/LogicUnitLogo'

export const metadata: Metadata = {
  title: 'SaaS Operating & Product Engineering Company',
  description: 'A SaaS operating & product engineering company founded in 2013.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'product engineering company',
    'SaaS operating company',
    'industry-specific SaaS platforms',
    'software platforms for real industries',
    'SaaS ecosystem company',
    'emerging market digital infrastructure',
    'multi-industry software platforms',
  ],
}

const ecosystem = [
  {
    name: 'Hulm Solutions',
    category: 'Business Operating System',
    description: 'A SaaS platform for managing business operations across retail, healthcare, and service environments.',
    href: 'https://hulmsolutions.com',
  },
  {
    name: 'Titan MMS',
    category: 'Maintenance Management Platform',
    description: 'A platform for managing maintenance operations, assets, service activity, and industrial reliability.',
    href: 'https://titanmms.com',
  },
  {
    name: 'AnimalCare360',
    category: 'Veterinary & Livestock Platform',
    description: 'A digital platform supporting veterinary, livestock, and animal care operations.',
    href: 'https://animalcare360.com',
  },
]

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
]

const industries = [
  { name: 'Retail', href: '/industry/retail' },
  { name: 'Healthcare', href: '/industry/healthcare' },
  { name: 'Livestock', href: '/industry/livestock' },
  { name: 'Manufacturing', href: '/industry/manufacturing' },
  { name: 'Logistics', href: '/industry/logistics' },
  { name: 'Facilities', href: '/industry/facilities' },
]

const capabilities = [
  'SaaS architecture capability',
  'Practical AI integration',
  'IoT system integration',
  'Scalable multi-tenant systems',
  'Data infrastructure',
]

const partnershipRoutes = [
  { name: 'Strategic Partnerships', href: '/partnerships/strategic-partnerships' },
  { name: 'System Integrators', href: '/partnerships/system-integrators' },
  { name: 'Enterprise Collaboration', href: '/partnerships/enterprise-collaboration' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
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
              Logic Unit is a product engineering company. building & operating industry-specific SaaS platforms for real industries. Our platforms support retail, healthcare, livestock, manufacturing, logistics, and facilities through software built for operational use.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/ecosystem" className="bg-[#7bd72f] px-6 py-3 text-center text-sm font-bold text-[#071330] hover:bg-[#93e74e]">
                Explore Ecosystem
              </Link>
              <Link href="/contact" className="border border-white/35 px-6 py-3 text-center text-sm font-semibold text-white hover:border-[#7bd72f]">
                Partner With Us
              </Link>
            </div>

            {/* Sleek horizontal metrics bar */}
            <div className="mt-14 grid gap-6 sm:grid-cols-3 max-w-3xl border-t border-white/10 pt-8">
              {[
                ['2013', 'Founded with a long-term engineering mindset'],
                ['3 Platforms', 'Independent SaaS platforms in operation'],
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
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-radial-gradient from-[#7bd72f]/10 to-transparent blur-3xl opacity-60" aria-hidden="true" />
            
            <div className="relative w-full max-w-[420px] aspect-square rounded-full border border-white/5 bg-white/[0.02] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md">
              {/* Spinning outer rings */}
              <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-dashed border-[#7bd72f]/20 animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* SVG connection lines with flow particles */}
              <svg className="absolute inset-0 w-full h-full animate-pulse" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connection lines */}
                <line x1="200" y1="200" x2="200" y2="80" stroke="rgba(123, 215, 47, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="200" x2="80" y2="280" stroke="rgba(123, 215, 47, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="200" x2="320" y2="280" stroke="rgba(123, 215, 47, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Moving particles */}
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
              {/* Node 1: Hulm Solutions */}
              <Link href="/ecosystem/hulm-solutions" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 group cursor-pointer no-underline block">
                <div className="flex flex-col items-center">
                  <div className="bg-[#071330] border border-white/10 group-hover:border-[#7bd72f] p-3 shadow-lg rounded-xl transition-all duration-300">
                    <span className="text-xs font-bold text-slate-400 group-hover:text-white uppercase tracking-wider block text-center">Hulm</span>
                    <span className="text-[9px] text-slate-500 block text-center">Business OS</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#7bd72f] mt-1 animate-pulse" />
                </div>
              </Link>

              {/* Node 2: Titan MMS */}
              <Link href="/ecosystem/titan-mms-maintenance-management-software" className="absolute bottom-[10%] left-0 -translate-x-1/4 group cursor-pointer no-underline block">
                <div className="flex flex-col items-center">
                  <div className="bg-[#071330] border border-white/10 group-hover:border-[#7bd72f] p-3 shadow-lg rounded-xl transition-all duration-300">
                    <span className="text-xs font-bold text-slate-400 group-hover:text-white uppercase tracking-wider block text-center">Titan MMS</span>
                    <span className="text-[9px] text-slate-500 block text-center">Maintenance</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#7bd72f] mt-1 animate-pulse" />
                </div>
              </Link>

              {/* Node 3: AnimalCare360 */}
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

      <section id="ecosystem" className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="lu-eyebrow mb-4">Ecosystem</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">Our Product Ecosystem</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Logic Unit operates a growing ecosystem of independent SaaS platforms. Each product company serves a specific industry, with its own website, customers, roadmap, and go-to-market strategy.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ecosystem.map((product) => (
              <article key={product.name} className="lu-card lu-rule-top flex min-h-72 flex-col p-8">
                <p className="mb-4 text-sm font-medium text-slate-500">{product.category}</p>
                <h3 className="mb-5 text-2xl font-semibold text-[#10277a]">{product.name}</h3>
                <p className="mb-10 leading-7 text-slate-600">{product.description}</p>
                <a href={product.href} className="mt-auto text-sm font-bold text-[#10277a] underline decoration-[#7bd72f] decoration-2 underline-offset-4">
                  Visit Product Website
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="lu-section bg-white px-6 py-24 lg:px-12">
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
            href="/industry"
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
              className="bg-[#fbfaf6] p-8 text-lg font-bold text-[#10277a] hover:bg-[#10277a] hover:text-white transition-all duration-200 no-underline"
            >
              {industry.name}
            </Link>
          ))}
        </div>
      </div>
      </section>

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

      <section id="partnerships" className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="lu-eyebrow mb-4">Partnerships</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
            Partnership routes for long-term ecosystem growth.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Logic Unit works with partners that support industry SaaS growth, platform expansion, enterprise collaboration, and system integration.
          </p>
          <Link
            href="/partnerships"
            className="inline-block mt-6 text-sm font-bold text-[#10277a] underline decoration-[#7bd72f] decoration-2 underline-offset-4 hover:text-[#071330]"
          >
            Explore Partnerships
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {partnershipRoutes.map((route) => (
            <Link key={route.name} href={route.href} className="lu-card p-8 text-xl font-semibold text-[#10277a] no-underline hover:border-[#10277a]">
              {route.name}
            </Link>
          ))}
        </div>
      </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="lu-eyebrow mb-4">Corporate Inquiry</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              For partnerships, investor relations, enterprise collaboration, and talent conversations.
            </h2>
          </div>
          <Link href="/contact" className="bg-[#10277a] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#071330]">
            Contact Logic Unit
          </Link>
        </div>
      </section>
    </main>
  )
}
