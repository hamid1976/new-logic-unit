import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries | Software Platforms for Real Industry Operations',
  description:
    'Logic Unit builds and operates SaaS platforms serving retail, healthcare, livestock, manufacturing, logistics, and facilities.',
}

const industries = ['Retail', 'Healthcare', 'Livestock', 'Manufacturing', 'Logistics', 'Facilities']

export default function IndustryPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">Industries</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Industries served through Logic Unit platforms.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Logic Unit builds platforms for industries where operational software can improve visibility, coordination, and long-term efficiency.
          </p>
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[rgba(16,39,122,0.14)] md:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry} className="bg-white p-10 text-2xl font-semibold text-[#10277a]">
              {industry}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
