import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Livestock & Veterinary Software Platforms | Logic Unit',
  description: 'Logic Unit builds and operates SaaS platforms for livestock management, veterinary operations, and animal care infrastructure.',
  alternates: {
    canonical: '/industries/livestock',
  },
};

export default function LivestockPage() {
  const sections = [
    {
      title: 'Livestock & Veterinary Operational Challenges',
      body: (
        <div className="space-y-4">
          <p>
            Agricultural operations, commercial dairy farms, livestock cooperatives, and large-scale veterinary clinics face significant operational complexity. Tracking individual animal health logs, weight gains, pedigree lineages, milk/meat yields, vaccine schedules, and feed efficiency using paper sheets or basic spreadsheets leads to data silos and reduced farm productivity.
          </p>
          <p>
            In addition, regulatory compliance for food safety and disease control requires complete traceability. Logic Unit develops specialized SaaS platforms that digitize livestock and veterinary data, giving farmers and clinicians real-time visibility and tools to optimize animal welfare and yield.
          </p>
        </div>
      ),
    },
    {
      title: 'Ecosystem Product: AnimalCare360',
      body: (
        <div className="space-y-4">
          <p>
            At the forefront of our agricultural tech portfolio is AnimalCare360, a digital software platform built by Logic Unit to support comprehensive livestock monitoring and veterinary operations. AnimalCare360 streamlines farm tracking, health compliance, and breeding programs.
          </p>
          <p>
            The software features a centralized repository for animal profiles, medical history timelines, vaccination schedules, feed consumption tracking, breeding logs, and clinical audit reporting. AnimalCare360 provides a single source of truth for veterinary teams and enterprise farm operators alike.
          </p>
          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/ecosystem/animalcare360-livestock-animal-care-software"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Explore AnimalCare360 Product Details &rarr;
            </Link>
            <a
              href="https://animalcare360.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Visit AnimalCare360 Website &rarr;
            </a>
          </div>
        </div>
      ),
    },
    {
      title: 'Agriculture SaaS & Enterprise Support',
      body: (
        <div className="space-y-4">
          <p>
            Logic Unit does not just build standalone software; we engineer and operate entire SaaS ecosystems designed for long-term ownership and operation. Our livestock software platform integrates cloud infrastructure, offline capability for remote field workers, and mobile interfaces to ensure seamless data entry directly on the farm floor.
          </p>
          <p>
            By separating platform operation (handled by Logic Unit) from customer management and distribution, we ensure that our agricultural technology continues to evolve and scale with global agricultural standards.
          </p>
        </div>
      ),
    },
  ];

  return (
    <SubPageTemplate
      eyebrow="Livestock"
      h1="Livestock software platforms for animal care operations."
      heroBody="Logic Unit builds and operates industry-specific SaaS platforms for real operational environments. Livestock is one of the industry categories served through the current product ecosystem."
      sections={sections}
      ctaTitle="Discuss livestock platform collaboration."
      backText="Back to Industries"
      backHref="/industries"
    />
  );
}
