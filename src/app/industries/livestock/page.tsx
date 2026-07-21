import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Livestock Software Platform | AnimalCare360 By Logic Unit',
  description: "AnimalCare360 is Logic Unit's livestock software platform for cattle farms, feed retailers, animal traders, pet hospitals, and veterinary clinics.",
  alternates: {

      canonical: '/industries/livestock',

  },

  openGraph: {

      url: '/industries/livestock',

  },
};

export default function LivestockPage() {
  const sections = [
    {
      title: 'Cattle & Dairy Farm Management',
      body: (
        <div className="space-y-4">
          <p>
            AnimalCare360 supports cattle and dairy farm management workflows, including milk yield, breeding, animal health, vaccination schedules, feed costs, and farm operations.
          </p>
          <a
            href="https://animalcare360.com/cattle-management"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline mt-2"
          >
            Explore Cattle Management Software &rarr;
          </a>
        </div>
      ),
    },
    {
      title: 'Feed Retail & Wanda Shop Software',
      body: (
        <div className="space-y-4">
          <p>
            AnimalCare360 supports wanda and feed retailers with POS, stock tracking, customer credit, pharmacy expiry dates, and FBR invoices.
          </p>
          <a
            href="https://animalcare360.com/feed-retail"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline mt-2"
          >
            Explore Feed Retail Software &rarr;
          </a>
        </div>
      ),
    },
    {
      title: 'Animal Trading Software',
      body: (
        <div className="space-y-4">
          <p>
            AnimalCare360 supports animal trading and commission workflows, including purchase and sale deals, commissions, buyer/seller ledgers, transport costs, and profitability.
          </p>
          <a
            href="https://animalcare360.com/animal-trading"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline mt-2"
          >
            Explore Animal Trading Software &rarr;
          </a>
        </div>
      ),
    },
    {
      title: 'Pet Hospital & Veterinary Clinic Software',
      body: (
        <div className="space-y-4">
          <p>
            AnimalCare360 supports pet hospitals and veterinary clinics with EMR, appointments, veterinary notes, pharmacy inventory, billing, and alerts.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <a
              href="https://animalcare360.com/pet-hospital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Explore Pet Hospital Software &rarr;
            </a>
            <a
              href="https://animalcare360.com/solutions/veterinary-clinic-software"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Explore Veterinary Clinic Software &rarr;
            </a>
          </div>
        </div>
      ),
    },
    {
      title: 'CattlePro Operations & Finance System',
      body: (
        <div className="space-y-4">
          <p>
            CattlePro is AnimalCare360's livestock operations and finance system with detailed modules for animals, inventory, finances, health, breeding, operations, and advisory workflows.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <a
              href="https://animalcare360.com/cattlepro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Explore CattlePro Livestock Operations &rarr;
            </a>
            <a
              href="https://animalcare360.com/cattlepro/features"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              View CattlePro Features Guide &rarr;
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Logic Unit's Product Ecosystem Connection",
      body: (
        <div className="space-y-4">
          <p>
            AnimalCare360 gives Logic Unit a dedicated livestock and animal care software platform inside its wider product ecosystem. It strengthens the company's positioning as a SaaS operating company building industry-specific software platforms for real operational environments.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <Link
              href="/ecosystem/animalcare360-livestock-animal-care-software"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              View Logic Unit Product Page &rarr;
            </Link>
            <a
              href="https://animalcare360.com/solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Browse AnimalCare360 Solutions &rarr;
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SubPageTemplate
      eyebrow="Livestock"
      h1="Livestock Software Platforms For Animal Care Operations"
      heroBody="Logic Unit supports livestock and animal care operations through AnimalCare360, a dedicated software platform for farms, feed retailers, animal traders, pet hospitals, and veterinary clinics. AnimalCare360 helps animal care businesses manage livestock records, cattle and dairy farm workflows, feed and medicine inventory, animal health tracking, billing/POS, FBR invoicing, and mobile access through the AnimalCare360 Android app."
      sections={sections}
      ctaTitle="Explore Livestock And Animal Care Software"
      backText="Back to Industries"
      backHref="/industries"
      externalHref="https://animalcare360.com"
      externalText="Visit AnimalCare360"
      contactHref="/contact?cta=industry-livestock-discuss&page_type=industry&interest=livestock&source_slug=livestock"
      contactText="Discuss a Livestock Platform"
    />
  );
}
