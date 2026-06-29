import Link from 'next/link';
import { Breadcrumbs } from './Breadcrumbs';

interface Feature {
  name: string;
  description: string;
}

interface Sidebar {
  title: string;
  items: string[];
  type?: 'cross' | 'check' | 'dot';
}

interface ProductPageTemplateProps {
  title: string;
  eyebrow?: string;
  h1: string;
  heroBody: string;
  logoUrl?: string;
  challengeEyebrow?: string;
  challengeTitle?: string;
  challengeText: string;
  sidebar?: Sidebar;
  featuresTitle?: string;
  features: Feature[];
  audience?: string[];
  techStack?: string[];
  schemaJson?: any;
}

export function ProductPageTemplate({
  title,
  eyebrow = 'Ecosystem Product',
  h1,
  heroBody,
  logoUrl,
  challengeEyebrow = 'The Operational Challenge',
  challengeTitle = 'Understanding the Industry Gaps',
  challengeText,
  sidebar,
  featuresTitle = 'Core Platform Features',
  features,
  audience,
  techStack,
  schemaJson,
}: ProductPageTemplateProps) {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Schema Injection */}
      {schemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      )}

      {/* Hero Section */}
      <section className="lu-shell relative overflow-hidden px-6 py-28 text-white lg:px-12 lg:py-36">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <Breadcrumbs />
          {logoUrl && (
            <div className="mb-8 flex justify-start">
              <img
                src={logoUrl}
                alt={`${title} Logo`}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
          )}
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">
            {eyebrow}
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            {h1}
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            {heroBody}
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className={`${sidebar ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-6`}>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">
              {challengeEyebrow}
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              {challengeTitle}
            </h2>
            <div className="text-lg leading-8 text-slate-600 space-y-4">
              <p>{challengeText}</p>
            </div>
          </div>

          {sidebar && (
            <div className="lg:col-span-6 bg-white border border-[rgba(16,39,122,0.1)] p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#071330] mb-6">{sidebar.title}</h3>
              <ul className="space-y-4 text-slate-600">
                {sidebar.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {sidebar.type === 'cross' ? (
                      <span className="text-red-500 font-bold text-lg leading-none select-none mt-1">✕</span>
                    ) : sidebar.type === 'check' ? (
                      <span className="text-emerald-500 font-bold text-lg leading-none select-none mt-1">✓</span>
                    ) : (
                      <span className="text-[#10277a] font-bold text-lg leading-none select-none mt-1">•</span>
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="lu-section bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Features Suite</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              {featuresTitle}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <article key={i} className="lu-card p-6 bg-[#fbfaf6]">
                <h3 className="text-lg font-bold text-[#10277a] mb-2">{f.name}</h3>
                <p className="text-sm leading-6 text-slate-600">{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Audience & Tech Highlights */}
      {(audience || techStack) && (
        <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">
            {audience && (
              <div className="bg-white p-8 border border-[rgba(16,39,122,0.1)] shadow-sm">
                <h3 className="text-2xl font-semibold text-[#10277a] mb-6">Target Audience & Fit</h3>
                <ul className="space-y-3">
                  {audience.map((aud, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <span className="text-[#7bd72f] font-bold text-lg select-none">✓</span>
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {techStack && (
              <div className="bg-white p-8 border border-[rgba(16,39,122,0.1)] shadow-sm">
                <h3 className="text-2xl font-semibold text-[#10277a] mb-6">Technology Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#f4f7fb] text-[#10277a] border border-[rgba(16,39,122,0.08)] px-4 py-2 text-sm font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mb-4">
              Ready to explore {title}?
            </h2>
            <p className="text-slate-600 text-lg">
              Connect with the Logic Unit team to discuss platform capabilities, integration details, or customized deployments.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row flex-shrink-0">
            <Link
              href="/contact"
              className="bg-[#10277a] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#071330] whitespace-nowrap transition-colors"
            >
              Contact Logic Unit
            </Link>
            <Link
              href="/ecosystem"
              className="border border-[#10277a] px-6 py-3 text-center text-sm font-semibold text-[#10277a] hover:bg-[#f4f7fb] whitespace-nowrap transition-colors"
            >
              View Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
