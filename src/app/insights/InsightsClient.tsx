'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InsightArticle } from '@/data/insights';

interface InsightsClientProps {
  articles: InsightArticle[];
}

export default function InsightsClient({ articles }: InsightsClientProps) {
  const categories = [
    'All',
    'Product Engineering',
    'SaaS Operating Company',
    'Operational Infrastructure SaaS',
    'Industry Platforms',
    'Product Ecosystem',
    'Case Studies',
    'Partnerships',
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter((article) => article.category === activeCategory);

  return (
    <section className="lu-section bg-[#fbfaf6] px-6 py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-slate-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                activeCategory === category
                  ? 'bg-[#10277a] text-white border-[#10277a]'
                  : 'bg-white text-slate-600 border-slate-200 hover:text-[#10277a] hover:border-[#10277a]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[rgba(16,39,122,0.06)] p-8">
            <p className="text-slate-500 text-lg">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => {
              const displayTitle = article.title.split('|')[0].trim();
              return (
                <article
                  key={article.slug}
                  className="lu-card lu-rule-top flex flex-col p-8 bg-white border border-[rgba(16,39,122,0.06)] shadow-sm hover:translate-y-[-4px] transition-all duration-300"
                >
                  <p className="mb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {article.category}
                  </p>
                  <h3 className="mb-4 text-xl font-semibold text-[#071330] line-clamp-2 hover:text-[#10277a]">
                    <Link href={`/insights/${article.slug}`} className="no-underline text-inherit">
                      {displayTitle}
                    </Link>
                  </h3>
                  <p className="mb-8 leading-7 text-slate-600 text-sm flex-grow line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                    <span>{article.publishDate}</span>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="text-xs font-bold text-[#10277a] underline decoration-[#7bd72f] decoration-2 underline-offset-4 hover:text-[#071330] no-underline"
                    >
                      Read Insight &rarr;
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
