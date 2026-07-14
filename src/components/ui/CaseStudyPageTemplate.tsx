import Link from 'next/link';
import { Breadcrumbs } from './Breadcrumbs';

interface CaseStudyPageTemplateProps {
  title: string;
  eyebrow?: string;
  h1: string;
  summaryText: string;
  challengeText: string;
  solutionText: string;
  featuresTitle?: string;
  features: string[];
  impactText: string;
  ctaText?: string;
  schemaJson?: any;
}

export function CaseStudyPageTemplate({
  title,
  eyebrow = 'Case Study',
  h1,
  summaryText,
  challengeText,
  solutionText,
  featuresTitle = 'Key Features & Capabilities',
  features,
  impactText,
  ctaText = 'Discuss This Solution',
  schemaJson,
}: CaseStudyPageTemplateProps) {
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
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl mt-6">
            {h1}
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            {summaryText}
          </p>
        </div>
      </section>

      {/* Challenge & Solution Grid */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
          {/* Challenge Card */}
          <div className="bg-white border border-[rgba(16,39,122,0.1)] p-8 shadow-sm">
            <span className="text-xs font-extrabold uppercase tracking-wider text-red-500">
              The Challenge
            </span>
            <h2 className="text-2xl font-semibold text-[#071330] mt-2 mb-4">
              Core Issues & Objectives
            </h2>
            <div className="text-base leading-7 text-slate-600 space-y-4">
              <p>{challengeText}</p>
            </div>
          </div>

          {/* Solution Card */}
          <div className="bg-white border border-[rgba(16,39,122,0.1)] p-8 shadow-sm">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">
              The Solution
            </span>
            <h2 className="text-2xl font-semibold text-[#071330] mt-2 mb-4">
              Platform Delivery & Implementation
            </h2>
            <div className="text-base leading-7 text-slate-600 space-y-4">
              <p>{solutionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Deliverables Section */}
      <section className="lu-section bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Details</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              {featuresTitle}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <article key={i} className="lu-card p-6 bg-[#fbfaf6] flex items-start gap-3">
                <span className="text-[#7bd72f] font-bold text-lg select-none">•</span>
                <p className="text-sm font-semibold text-slate-700">{feature}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Results</span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2 mb-6">
            Operational & Business Impact
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            {impactText}
          </p>
        </div>
      </section>

      {/* Case Study Pack Gated CTA */}
      <section className="bg-[#071330] px-6 py-20 text-white lg:px-12 border-t border-white/5">
        <div className="mx-auto max-w-7xl flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Case Studies Resource</span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-2 mb-4">
              Case Study Pack: Software Platforms For Real Industries
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Explore in-depth technical breakdowns and workflow schemas for logistics, retail operations, healthcare, and enterprise ERP transformations.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact?cta=case-study-pack&page_type=case-study"
              className="inline-block bg-[#7bd72f] px-6 py-3 text-center text-sm font-bold text-[#071330] hover:bg-[#93e74e] no-underline transition-colors"
            >
              Download Case Study Pack &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mb-4">
              Discuss similar solution options?
            </h2>
            <p className="text-slate-600 text-lg">
              Connect with the Logic Unit team to explore how dynamic software platforms can support your business operations.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row flex-shrink-0">
            <Link
              href="/contact"
              className="bg-[#10277a] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#071330] whitespace-nowrap transition-colors"
            >
              {ctaText}
            </Link>
            <Link
              href="/case-studies"
              className="border border-[#10277a] px-6 py-3 text-center text-sm font-semibold text-[#10277a] hover:bg-[#f4f7fb] whitespace-nowrap transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
