import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partnerships | Strategic SaaS Ecosystem Partnerships',
  description:
    'Partner with Logic Unit through strategic partnerships, system integrator relationships, enterprise collaboration, and ecosystem expansion.',
}

const routes = [
  {
    title: 'Strategic Partnerships',
    body: 'For organizations interested in market expansion, product ecosystem collaboration, or long-term industry digitization.',
  },
  {
    title: 'System Integrators',
    body: 'For implementation, deployment, and integration partners working across operational industries.',
  },
  {
    title: 'Enterprise Collaboration',
    body: 'For enterprises seeking platform partnerships, infrastructure collaboration, or industry-specific digital transformation.',
  },
  {
    title: 'Investment & Expansion',
    body: 'For investors and institutional partners interested in Logic Unit’s product ecosystem and long-term platform strategy.',
  },
]

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">Partnerships</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Partner with Logic Unit.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Logic Unit works with strategic partners, system integrators, enterprises, and ecosystem collaborators who share our goal of building stronger software infrastructure for real industries.
          </p>
        </div>
      </section>

      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {routes.map((route) => (
            <article key={route.title} className="lu-card p-8">
              <h2 className="mb-4 text-2xl font-semibold text-[#10277a]">{route.title}</h2>
              <p className="leading-7 text-slate-600">{route.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
            Start with a corporate partnership inquiry.
          </h2>
          <Link href="/contact" className="bg-[#10277a] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#071330]">
            Contact Logic Unit
          </Link>
        </div>
      </section>
    </main>
  )
}
