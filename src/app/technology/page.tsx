import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technology & R&D Backbone | Logic Unit',
  description:
    'Discover the R&D and engineering backbone behind Logic Unit SaaS platforms, including multi-tenant systems, data infrastructure, AI, and IoT integrations.',
  keywords: [
    'SaaS architecture',
    'product engineering',
    'multi-tenant systems',
    'data infrastructure',
    'AI integration',
    'IoT system integration',
    'operational software backbone',
  ],
}

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
]

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Hero Shell */}
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">
            Technology & Innovation
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
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
              <article key={cap.name} className="lu-card lu-rule-top p-8 bg-white">
                <h3 className="mb-4 text-xl font-semibold text-[#10277a]">{cap.name}</h3>
                <p className="leading-7 text-slate-600">{cap.description}</p>
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
  )
}
