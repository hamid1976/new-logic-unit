import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { insightsArticles } from '@/data/insights';
import { InsightVisual } from '@/components/ui/InsightVisual';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return insightsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = insightsArticles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      url: `/insights/${article.slug}`,
      images: [
        {
          url: `/og/insights-${article.slug}.png`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = insightsArticles.find((a) => a.slug === params.slug);
  if (!article) {
    notFound();
  }

  // Construct schemas
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title.split('|')[0].trim(),
    'description': article.description,
    'datePublished': '2026-07-14',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://logic-unit.com/',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Insights',
        'item': 'https://logic-unit.com/insights',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': article.title.split('|')[0].trim(),
        'item': `https://logic-unit.com/insights/${article.slug}`,
      },
    ],
  };

  // Find 3 other related articles
  const relatedArticles = insightsArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Schema Org Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Shell */}
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs />
          <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-slate-300 uppercase tracking-wider">
            <span className="text-[#7bd72f]">{article.category}</span>
            <span>•</span>
            <span>{article.publishDate}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl mt-4">
            {article.title.split('|')[0].trim()}
          </h1>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12">
          {/* Main Body */}
          <article className="lg:col-span-8 bg-white border border-[rgba(16,39,122,0.06)] p-8 md:p-12 shadow-sm rounded-none">
            <div className="text-lg leading-8 text-slate-800 font-medium border-b border-slate-100 pb-8 mb-8">
              {article.summary}
            </div>

            {/* Hero Visual infographic */}
            <InsightVisual slug={article.slug} />

            <div className="space-y-6">
              {article.sections.map((section, idx) => {
                if (section.type === 'p') {
                  return (
                    <p key={idx} className="text-base md:text-lg leading-8 text-slate-600">
                      {section.content as string}
                    </p>
                  );
                }
                if (section.type === 'h2') {
                  return (
                    <h2 key={idx} className="text-2xl md:text-3xl font-semibold tracking-tight text-[#071330] mt-12 mb-6">
                      {section.content as string}
                    </h2>
                  );
                }
                if (section.type === 'h3') {
                  return (
                    <h3 key={idx} className="text-xl md:text-2xl font-semibold tracking-tight text-[#071330] mt-8 mb-4">
                      {section.content as string}
                    </h3>
                  );
                }
                if (section.type === 'ul') {
                  const items = section.content as string[];
                  return (
                    <ul key={idx} className="list-disc pl-6 mt-4 space-y-3 text-slate-600 text-base md:text-lg">
                      {items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>

            {/* Custom CTA block */}
            <div className="mt-16 bg-[#fbfaf6] border-l-4 border-[#7bd72f] p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#071330] mb-3">
                {article.cta.heading}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {article.cta.copy}
              </p>
              <Link
                href={article.cta.btnHref}
                className="inline-block bg-[#10277a] px-6 py-3 text-sm font-bold text-white hover:bg-[#071330] no-underline shadow-sm transition-all duration-300"
              >
                {article.cta.btnText} &rarr;
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Gated Resource Checklist CTA */}
            <div className="lu-card p-6 bg-white border border-[rgba(16,39,122,0.06)] shadow-sm">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Readiness Checklist</span>
              <h3 className="text-lg font-bold text-[#10277a] mb-3">Industry SaaS Platform Readiness Checklist</h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Assess whether your organization is ready to scale operations, implement POS, EMR, or CMMS workflows, or deploy custom digital infrastructure.
              </p>
              <Link
                href="/contact?cta=checklist&page_type=insights"
                className="block text-center bg-[#7bd72f] px-4 py-3 text-xs font-bold text-[#071330] hover:bg-[#93e74e] no-underline shadow-sm transition-colors duration-300"
              >
                Get The Checklist
              </Link>
            </div>

            {/* Related Articles list */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-2">
                Other Insights
              </h4>
              <div className="space-y-4">
                {relatedArticles.map((rel) => {
                  const displayTitle = rel.title.split('|')[0].trim();
                  return (
                    <article key={rel.slug} className="p-4 bg-white border border-[rgba(16,39,122,0.04)] shadow-sm hover:border-[#10277a] transition-colors duration-200">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                        {rel.category}
                      </span>
                      <h5 className="font-bold text-sm text-[#071330] hover:text-[#10277a]">
                        <Link href={`/insights/${rel.slug}`} className="no-underline text-inherit">
                          {displayTitle}
                        </Link>
                      </h5>
                      <span className="text-[10px] text-slate-500 block mt-2">{rel.readTime}</span>
                    </article>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
