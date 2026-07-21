import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { insightsArticles } from '@/data/insights';
import InsightsClient from './InsightsClient';

export const metadata: Metadata = {
  title: 'Insights | Product Engineering & Industry SaaS Platforms',
  description: 'Read Logic Unit insights on product engineering, SaaS operating models, operational infrastructure SaaS, industry platforms, and product ecosystems.',
  alternates: {
    canonical: '/insights',
  },
  openGraph: {
    url: '/insights',
  },
};

export default function InsightsPage() {
  // Construct BlogPosting/CollectionPage Schema Markup
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Logic Unit Insights Hub',
    'description': 'Articles on product engineering, SaaS operating company models, and industry vertical SaaS.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const featuredArticle = insightsArticles.find(
    (a) => a.slug === 'what-is-operational-infrastructure-saas'
  ) || insightsArticles[0];

  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Schema Org Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Hero Shell */}
      <section className="lu-shell relative overflow-hidden px-6 py-28 text-white lg:px-12 lg:py-36">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs />
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl mt-6">
            Insights on Product Engineering & SaaS Platforms
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Logic Unit builds and operates software platforms for real industries. These insights explore product engineering, SaaS operating models, operational infrastructure, and case studies.
          </p>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="lu-section bg-[#fbfaf6] px-6 pt-24 pb-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Featured Article</span>
          </div>
          <div className="lu-card p-8 md:p-12 bg-white border border-[rgba(16,39,122,0.06)] shadow-sm grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{featuredArticle.category}</span>
              <h2 className="text-2xl md:text-4xl font-semibold text-[#071330] leading-tight">
                {featuredArticle.title.split('|')[0].trim()}
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                {featuredArticle.summary}
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
                <span>{featuredArticle.publishDate}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="inline-block bg-[#10277a] px-8 py-4 text-sm font-bold text-white hover:bg-[#071330] no-underline shadow-sm transition-all duration-300"
              >
                Read Article &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Filter & Grid Component */}
      <InsightsClient articles={insightsArticles} />

      {/* Insights discussion CTA */}
      <section className="bg-[#071330] px-6 py-24 text-white lg:px-12 border-t border-white/5">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Platform Discussion</span>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl mt-3">
              Discuss Your Industry SaaS Direction
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Talk with Logic Unit about product ecosystems, platform readiness, operational workflows, and partnership models.
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link
              href="/contact?cta=playbook&page_type=insights"
              className="inline-block bg-[#7bd72f] px-8 py-4 text-center text-sm font-bold text-[#071330] hover:bg-[#93e74e] shadow-lg transition-all duration-300 no-underline"
            >
              Start A Discussion &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12 border-t border-[rgba(16,39,122,0.06)]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              Build Or Scale An Industry Software Platform
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Talk to Logic Unit about product ecosystem growth, strategic SaaS partnerships, system integrator relationships, or enterprise collaboration around industry software platforms.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="bg-[#10277a] px-8 py-3 text-sm font-bold text-white hover:bg-[#071330] no-underline shadow-sm transition-all duration-300"
              >
                Contact Logic Unit
              </Link>
              <Link href="/ecosystem" className="text-sm font-semibold leading-6 text-[#10277a] hover:text-[#071330] no-underline">
                Explore Ecosystem <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
