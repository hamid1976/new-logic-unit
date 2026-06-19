import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Strategic SaaS Ecosystem Partnerships | Logic Unit',
  description:
    'Partner with Logic Unit through strategic partnerships, system integrator relationships, enterprise collaboration, and ecosystem expansion.',
  alternates: {
    canonical: '/partnerships',
  },
}

const partners = [
  {
    title: 'Strategic Partnerships',
    body: 'Strategic partnerships support market expansion, product ecosystem collaboration, and long-term industry digitization. Logic Unit works with partners aligned with its product engineering and SaaS operating model.',
    href: '/partnerships/strategic-partnerships',
  },
  {
    title: 'System Integrators',
    body: 'System integrator relationships support implementation, deployment, and integration work across operational industries where Logic Unit platforms are relevant.',
    href: '/partnerships/system-integrators',
  },
  {
    title: 'Enterprise Collaboration',
    body: 'Enterprise collaboration is for organizations seeking platform partnerships, infrastructure collaboration, or industry-specific digital transformation.',
    href: '/partnerships/enterprise-collaboration',
  },
  {
    title: 'Investment & Expansion',
    body: "Investment and expansion conversations are for investors and institutional partners interested in Logic Unit's product ecosystem and long-term platform strategy.",
    href: null,
  },
]

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Hero Shell */}
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">
            Partnerships
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Partner with Logic Unit.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Logic Unit works with strategic partners, system integrators, enterprises, and ecosystem collaborators who share our goal of building stronger software infrastructure for real industries.
          </p>
        </div>
      </section>

      {/* Partnership Routes Section */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <article key={partner.title} className="lu-card flex flex-col p-8 bg-white justify-between min-h-[220px]">
                <div>
                  <h2 className="mb-4 text-2xl font-semibold text-[#10277a]">{partner.title}</h2>
                  <p className="mb-8 leading-7 text-slate-600">{partner.body}</p>
                </div>
                {partner.href ? (
                  <Link
                    href={partner.href}
                    className="text-sm font-bold text-[#10277a] underline decoration-[#7bd72f] decoration-2 underline-offset-4 hover:text-[#071330]"
                  >
                    Explore {partner.title} Partnerships
                  </Link>
                ) : (
                  <span className="text-sm font-semibold text-slate-400 cursor-default">
                    Inquire for Details
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
            Start with a corporate partnership inquiry.
          </h2>
          <Link
            href="/contact"
            className="bg-[#10277a] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#071330] whitespace-nowrap"
          >
            Contact Logic Unit
          </Link>
        </div>
      </section>
    </main>
  )
}
