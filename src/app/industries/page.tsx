import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industry-Specific Software Solutions by Logic Unit',
  description:
    'Explore industrial software solutions designed to improve operations, efficiency, and growth. Connect with logic-unit for building industry software',
  alternates: {
    canonical: '/industries',
  },
}

const industries = [
  {
    name: 'Retail',
    description:
      'Logic Unit platforms support retail environments through SaaS systems built around business operations and operational visibility.',
    href: '/industries/retail',
  },
  {
    name: 'Healthcare',
    description:
      'Logic Unit platforms support healthcare and service environments through industry-specific software designed for operational use.',
    href: '/industries/healthcare',
  },
  {
    name: 'Livestock',
    description:
      'Logic Unit platforms support livestock, veterinary, and animal care operations through digital systems built for real industry workflows.',
    href: '/industries/livestock',
  },
  {
    name: 'Manufacturing',
    description:
      'Logic Unit platforms support manufacturing and industrial operations through software that improves visibility across assets, maintenance, and operational activity.',
    href: '/industries/manufacturing',
  },
  {
    name: 'Logistics',
    description:
      'Logic Unit platforms support logistics operations where coordination, operational visibility, and scalable systems matter.',
    href: '/industries/logistics',
  },
  {
    name: 'Facilities',
    description:
      'Logic Unit platforms support facilities and maintenance environments through software designed for service activity, assets, and operational reliability.',
    href: '/industries/facilities',
  },
]

export default function IndustryPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Hero Shell */}
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">
            Industries
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Industries served through Logic Unit platforms.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Logic Unit builds platforms for industries where operational software can improve visibility, coordination, and long-term efficiency.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
            Industry-specific SaaS platforms for real operations.
          </h2>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Logic Unit develops and operates software platforms for industries where day-to-day work depends on clear systems, reliable data, and better coordination. The current ecosystem serves retail, healthcare, livestock, manufacturing, logistics, and facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.name} className="lu-card flex flex-col p-8 bg-white justify-between">
                <div>
                  <h3 className="mb-4 text-2xl font-semibold text-[#10277a]">{industry.name}</h3>
                  <p className="mb-8 leading-7 text-slate-600">{industry.description}</p>
                </div>
                <Link
                  href={industry.href}
                  className="text-sm font-bold text-[#10277a] underline decoration-[#7bd72f] decoration-2 underline-offset-4 hover:text-[#071330]"
                >
                  Explore {industry.name} Software Platforms
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              Build with a long-term SaaS operating company.
            </h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              For partnerships, system integrator relationships, and enterprise collaboration around industry software platforms, contact Logic Unit.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row flex-shrink-0">
            <Link
              href="/partnerships"
              className="border border-[#10277a] px-6 py-3 text-center text-sm font-semibold text-[#10277a] hover:bg-[#f4f7fb] whitespace-nowrap no-underline"
            >
              Explore Partnerships
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
  )
}
