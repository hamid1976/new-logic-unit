import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Software Platforms | Logic Unit',
  description: 'Logic Unit builds and operates industry-specific SaaS platforms for healthcare and service operating environments.',
  alternates: {
    canonical: '/industries/healthcare',
  },
};

export default function HealthcarePage() {
  const sections = [
    {
      title: 'Industry-specific SaaS platforms for healthcare',
      body: (
        <p>
          Healthcare organizations need secure, compliant, patient-facing and professional-facing digital workflows. Logic Unit builds software infrastructure to streamline appointments, patient discovery, and compliance tracking.
        </p>
      ),
    },
    {
      title: 'Connected to the Logic Unit product ecosystem',
      body: (
        <div>
          <p className="mb-4">
            The Logic Unit ecosystem includes Hospitello, a digital patient engagement platform supporting mobile self-service appointment booking and healthcare communications.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <Link
              href="/ecosystem/hospitello"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Explore Hospitello Details &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Healthcare Case Studies',
      body: (
        <div>
          <p className="mb-4">
            Explore our clinical and pharmaceutical software delivery experience:
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/case-studies/novo-nordisk-sample-ordering-application"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              &bull; Novo Nordisk Sample Ordering App &rarr;
            </Link>
            <Link
              href="/case-studies/agp-drug-verifier-platform"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              &bull; AGP Counterfeit Drug Verifier Platform &rarr;
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SubPageTemplate
      eyebrow="Healthcare"
      h1="Healthcare software platforms for real operating environments."
      heroBody="Logic Unit builds SaaS platforms for industries where operational software can improve visibility, coordination, and long-term efficiency. Healthcare is one of the industry categories served through the current Logic Unit ecosystem."
      sections={sections}
      ctaTitle="Discuss healthcare platform collaboration."
      backText="Back to Industries"
      backHref="/industries"
    />
  );
}
