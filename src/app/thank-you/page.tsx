import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You | Logic Unit',
  description: 'Thank you for your submission. The Logic Unit team will review your message shortly.',
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
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      <section className="lu-shell relative overflow-hidden px-6 py-28 text-white lg:px-12 lg:py-36">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Submission Received</span>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl mt-6 mx-auto">
            Thank You
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200 mx-auto">
            We have received your corporate inquiry. The Logic Unit team will review your message and respond through the appropriate corporate channel.
          </p>
          <div className="mt-12">
            <Link
              href="/"
              className="inline-block bg-[#7bd72f] px-8 py-4 text-center text-sm font-bold text-[#071330] hover:bg-[#93e74e] whitespace-nowrap transition-colors no-underline"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
