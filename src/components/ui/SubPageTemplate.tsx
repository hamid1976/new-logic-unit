import Link from 'next/link'

interface Section {
  title: string
  body: string
}

interface SubPageTemplateProps {
  eyebrow: string
  h1: string
  heroBody: string
  sections: Section[]
  ctaTitle: string
}

export function SubPageTemplate({
  eyebrow,
  h1,
  heroBody,
  sections,
  ctaTitle,
}: SubPageTemplateProps) {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Hero Shell */}
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">
            {eyebrow}
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            {h1}
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">{heroBody}</p>
        </div>
      </section>

      {/* Body Content Grid */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section, index) => (
              <article key={index} className="lu-card p-8 bg-white">
                <h2 className="mb-4 text-2xl font-semibold text-[#10277a]">{section.title}</h2>
                <p className="leading-7 text-slate-600">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
            {ctaTitle}
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
