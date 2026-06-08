import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Logic Unit | Product Engineering & Operating Company',
  description:
    'Logic Unit is a product engineering and operating company founded in 2013 to build and run industry-specific SaaS platforms.',
}

const principles = [
  {
    title: 'Long-term platform ownership',
    body: 'We build product ecosystems with the expectation that they will be operated, improved, and supported over many years.',
  },
  {
    title: 'Industry-specific architecture',
    body: 'Each platform is shaped around a real operating environment rather than a generic software category.',
  },
  {
    title: 'Practical innovation',
    body: 'AI, IoT, automation, and data systems are introduced where they improve concrete platform capability.',
  },
  {
    title: 'Product company separation',
    body: 'Logic Unit builds and operates the ecosystem. Product companies own customer adoption, pricing, onboarding, and product-specific sales.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">About Logic Unit</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Building software infrastructure for real industries.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Logic Unit was founded in 2013 with a clear belief: many essential industries need software built around how they actually operate.
          </p>
        </div>
      </section>

      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">Why Logic Unit exists</h2>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Across emerging markets, sectors such as retail, healthcare, livestock, manufacturing, logistics, and facilities management often rely on fragmented tools, manual processes, and disconnected systems.
            </p>
            <p>
              Logic Unit exists to close that gap through dedicated SaaS platforms designed for long-term operational use. These platforms are not short-term experiments or client projects. They are continuously engineered, improved, and operated as long-term software ecosystems.
            </p>
            <p>
              Our role is to identify industry gaps, design scalable SaaS systems, build the underlying technology, and support the long-term growth of each product company.
            </p>
          </div>
        </div>
      </section>

      <section className="lu-section bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="lu-eyebrow mb-4">Operating Philosophy</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              We build, operate, and evolve product companies.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle.title} className="lu-card p-8">
                <h3 className="mb-4 text-xl font-semibold text-[#10277a]">{principle.title}</h3>
                <p className="leading-7 text-slate-600">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071330] px-6 py-24 text-white lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">Corporate Direction</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Expanding digital infrastructure across industries that need stronger software foundations.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Logic Unit continues to build and operate software platforms for industries where long-term digital infrastructure can improve operational visibility, coordination, and scale.
            </p>
          </div>
          <Link href="/contact" className="border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white hover:border-[#7bd72f]">
            Corporate Inquiry
          </Link>
        </div>
      </section>
    </main>
  )
}
