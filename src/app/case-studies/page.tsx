import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Proof | Logic Unit',
  description:
    'Selected examples of Logic Unit experience across industrial, manufacturing, logistics, and enterprise environments.',
}

const examples = [
  {
    title: 'Industrial operations',
    body: 'Experience supporting complex operational environments where reliability, data visibility, and long-term system maintainability matter.',
  },
  {
    title: 'Manufacturing environments',
    body: 'Experience with software systems that connect operational activity, maintenance data, and management visibility.',
  },
  {
    title: 'Enterprise and public-sector systems',
    body: 'Experience delivering structured software and implementation work in environments with high coordination requirements.',
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">Corporate Proof</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Experience across real operational environments.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Logic Unit’s background spans industrial, manufacturing, logistics, and enterprise environments. On the parent company website, this proof remains corporate and ecosystem-level.
          </p>
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {examples.map((example) => (
            <article key={example.title} className="lu-card p-8">
              <h2 className="mb-4 text-2xl font-semibold text-[#10277a]">{example.title}</h2>
              <p className="leading-7 text-slate-600">{example.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
