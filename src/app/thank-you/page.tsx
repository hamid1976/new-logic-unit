import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Thank You | Logic Unit',
  description: 'Your inquiry has been received. The Logic Unit team will review your message and route it appropriately.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/thank-you',
  },
  openGraph: {
    url: '/thank-you',
  },
};

export default function ThankYouPage() {
  const links = [
    {
      title: 'Explore The Product Ecosystem',
      desc: "Logic Unit builds and operates industry-specific SaaS platforms for real operating environments.",
      cta: 'View Product Ecosystem',
      href: '/ecosystem',
    },
    {
      title: 'Review Case Study Proof',
      desc: 'See how Logic Unit has contributed to logistics, healthcare, retail, government, fintech, ERP, and augmented reality platforms.',
      cta: 'View Case Studies',
      href: '/case-studies',
    },
    {
      title: 'Partnership Routes',
      desc: 'Explore strategic SaaS partnerships, system integrator relationships, and enterprise collaboration.',
      cta: 'Explore Partnerships',
      href: '/partnerships',
    },
    {
      title: 'Insights',
      desc: 'Read Logic Unit thinking on operational infrastructure SaaS, product engineering, and industry platforms.',
      cta: 'Read Insights',
      href: '/insights',
    },
  ];

  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      {/* Hero Shell */}
      <section className="lu-shell relative overflow-hidden px-6 py-28 text-white lg:px-12 lg:py-36">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs />
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl mt-6">
            Thank You For Contacting Logic Unit
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Your inquiry has been received. The Logic Unit team will review your message and route it to the right conversation path.
          </p>
        </div>
      </section>

      {/* Main Body */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              Next Steps
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We review every inquiry to route it to the correct product or partnership lead. Whether it relates to product ecosystem inquiries, strategic SaaS partnerships, system integrator relationships, enterprise collaboration, or case study discussions, a representative will follow up soon.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {links.map((link) => (
              <article key={link.title} className="lu-card lu-rule-top flex flex-col p-8 bg-white border border-[rgba(16,39,122,0.06)] shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-[#10277a]">{link.title}</h3>
                <p className="mb-8 leading-7 text-slate-600 text-sm flex-grow">{link.desc}</p>
                <div className="mt-auto">
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-[#10277a] underline decoration-[#7bd72f] decoration-2 underline-offset-4 hover:text-[#071330] no-underline block"
                  >
                    {link.cta} &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
