import type { Metadata } from 'next'
import Link from 'next/link'
import { LogicUnitLogo } from '@/components/brand/LogicUnitLogo'

export const metadata: Metadata = {
  title: 'Logic Unit | Product Engineering & SaaS Operating Company',
  description:
    'Logic Unit builds and operates industry-specific SaaS platforms for retail, healthcare, livestock, manufacturing, logistics, and facilities across emerging markets.',
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
    body: 'We study operational inefficiencies in real-world industries.',
  },
  {
    step: '02',
    title: 'Build Dedicated Platforms',
    body: 'We engineer SaaS systems tailored to industry needs.',
  },
  {
    step: '03',
    title: 'Operate & Scale',
    body: 'We continuously evolve and manage these platforms long-term.',
  },
]

const industries = ['Retail', 'Healthcare', 'Livestock', 'Manufacturing', 'Logistics', 'Facilities']

const capabilities = [
  'SaaS architecture capability',
  'Practical AI integration',
  'IoT system integration',
  'Scalable multi-tenant systems',
  'Data infrastructure',
]

const partnershipRoutes = ['Strategic Partnerships', 'System Integrators', 'Enterprise Collaboration']

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-16 translate-y-16 border-[28px] border-[#7bd72f]/20" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">
              Product Engineering & Operating Company
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              We Build and Operate Software Platforms That Run Real Industries
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
              Logic Unit engineers and operates industry-specific SaaS platforms powering retail, healthcare, livestock, and industrial operations across emerging markets.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#ecosystem" className="bg-[#7bd72f] px-6 py-3 text-center text-sm font-bold text-[#071330] hover:bg-[#93e74e]">
                Explore Ecosystem
              </Link>
              <Link href="/contact" className="border border-white/35 px-6 py-3 text-center text-sm font-semibold text-white hover:border-[#7bd72f]">
                Partner With Us
              </Link>
            </div>
          </div>
          <div className="lu-card border-white/10 bg-white/8 p-8 backdrop-blur-sm">
            <LogicUnitLogo light className="mb-12 h-auto w-full" />
            <div className="grid gap-px bg-white/15">
              {['Engineering Platforms', 'Operating Ecosystems', 'Digitizing Industries'].map((item) => (
                <div key={item} className="bg-[#071330]/80 p-5 text-lg font-semibold text-white">
                  {item}
                </div>
              ))}
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
              <div key={item.step} className="lu-card p-8">
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
              <article key={product.name} className="lu-card flex min-h-72 flex-col p-8">
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
          </div>
          <div className="grid grid-cols-2 gap-px bg-[rgba(16,39,122,0.14)] md:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="bg-[#fbfaf6] p-8 text-lg font-bold text-[#10277a]">
                {industry}
              </div>
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
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {partnershipRoutes.map((route) => (
              <Link key={route} href="/contact" className="lu-card p-8 text-xl font-semibold text-[#10277a] no-underline hover:border-[#10277a]">
                {route}
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
