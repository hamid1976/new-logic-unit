import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';

export const metadata: Metadata = {
  title: 'Strategic SaaS Partnerships | Logic Unit',
  description: 'Partner with Logic Unit through strategic SaaS partnerships focused on product ecosystem collaboration, joint ventures, and industry platform growth.',
  alternates: {

      canonical: '/partnerships/strategic-partnerships',

  },

  openGraph: {

      url: '/partnerships/strategic-partnerships',

  },
};

export default function StrategicPartnershipsPage() {
  const sections = [
    {
      title: 'Our SaaS Platform Operating Model',
      body: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            Logic Unit develops and operates software ecosystems designed for long-term ownership and multi-year operations. Unlike generic consulting firms that deliver code and walk away, we partner with industry leaders to maintain, support, and continuously update the software.
          </p>
          <p>
            We separate technology operations (which we design and manage) from customer acquisition, localized pricing, and on-the-ground support. This model allows both companies to focus on their core strengths, resulting in scalable, high-performance SaaS solutions.
          </p>
        </div>
      ),
    },
    {
      title: 'Strategic Joint Ventures & Co-Ownership',
      body: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            We work with forward-thinking enterprises, industry associations, and sector pioneers to launch specialized vertical SaaS platforms. These collaborations often take the form of joint ventures or co-ownership structures, where Logic Unit provides the complete technology stack and technical operations.
          </p>
          <p>
            By sharing the risks and rewards of platform growth, we align our engineering incentives with long-term commercial success, turning software from a capital expense into a valuable corporate asset.
          </p>
        </div>
      ),
    },
    {
      title: 'Product Ecosystem Expansion & Licensing',
      body: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            Partners can leverage our existing software components—such as HULM POS, Titan CMMS, and our payment and logistics APIs—to quickly launch branded solutions in new markets.
          </p>
          <p>
            Licensing or white-labeling our tested platforms reduces development costs, minimizes time-to-market, and gives partners access to a secure, enterprise-grade codebase built for real operational environments.
          </p>
        </div>
      ),
    },
    {
      title: 'Partner Evaluation & Alignment Criteria',
      body: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            To ensure the success of our strategic partnerships, we evaluate proposals based on clear criteria:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Domain Expertise:</strong> Deep understanding of the target industry and its workflows.</li>
            <li><strong>Commercial Capability:</strong> Established channels to handle customer sales and onboarding.</li>
            <li><strong>Long-Term Vision:</strong> Commitment to continuous platform improvement over a multi-year roadmap.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <SubPageTemplate
      eyebrow="Strategic Partnerships"
      h1="Strategic partnerships for long-term SaaS ecosystem growth."
      heroBody="Logic Unit works with strategic partners aligned with its goal of building stronger software infrastructure for real industries."
      sections={sections}
      ctaTitle="Start a strategic partnership conversation."
      backText="Back to Partnerships"
      backHref="/partnerships"
    />
  );
}
