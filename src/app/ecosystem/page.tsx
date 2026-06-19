import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our SaaS Product Ecosystem',
  description:
    'Logic Unit operates a growing ecosystem of independent SaaS platforms built for operational industries.',
  alternates: {
    canonical: '/ecosystem',
  },
  keywords: [
    'product ecosystem',
    'SaaS operating company',
    'Hulm Solutions',
    'Titan MMS',
    'AnimalCare360',
    'independent software platforms',
    'industry-specific SaaS platforms',
  ],
}

const products = [
  {
    name: 'Hulm Solutions',
    category: 'Business Operating System',
    description:
      'A SaaS platform for managing business operations across retail, healthcare, and service environments.',
    href: 'https://hulmsolutions.com',
    internalHref: '/ecosystem/hulm-solutions',
  },
  {
    name: 'Titan MMS',
    category: 'Maintenance Management Platform',
    description:
      'A platform for managing maintenance operations, assets, service activity, and industrial reliability.',
    href: 'https://titanmms.com',
    internalHref: '/ecosystem/titan-mms-maintenance-management-software',
  },
  {
    name: 'AnimalCare360',
    category: 'Veterinary & Livestock Platform',
    description:
      'A digital platform supporting veterinary, livestock, and animal care operations.',
    href: 'https://animalcare360.com',
    internalHref: '/ecosystem/animalcare360-livestock-animal-care-software',
  },
]

export default function EcosystemPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Hero Shell */}
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">
            Product Ecosystem
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            A growing ecosystem of independent SaaS platforms.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Logic Unit operates a growing ecosystem of independent software platforms. Each product company serves a specific industry, with its own product architecture, roadmap, and customer adoption strategy.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
            Built, operated, and scaled by Logic Unit.
          </h2>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              We are not a single-product company or a short-term software agency. We identify key operational inefficiencies in real-world industries and engineer dedicated SaaS platforms to close those gaps.
            </p>
            <p>
              Logic Unit provides the R&D, core SaaS architecture, and technology backbone, while each product company focuses on customer-facing onboarding, industry adoption, and dedicated customer success.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="lu-card lu-rule-top flex min-h-[340px] flex-col p-8 bg-white justify-between">
                <div>
                  <p className="mb-4 text-sm font-medium text-slate-500">{product.category}</p>
                  <h3 className="mb-5 text-2xl font-semibold text-[#10277a]">{product.name}</h3>
                  <p className="mb-10 leading-7 text-slate-600">{product.description}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href={product.internalHref}
                    className="text-sm font-bold text-[#10277a] underline decoration-[#7bd72f] decoration-2 underline-offset-4 hover:text-[#071330] no-underline"
                  >
                    Explore Product Details →
                  </Link>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Visit official website
                  </a>
                </div>
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
              Collaborate on our SaaS ecosystem.
            </h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              For corporate inquiries, system integrator discussions, and strategic partnerships surrounding our industry platforms, reach out to Logic Unit.
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
