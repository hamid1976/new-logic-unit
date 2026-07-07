import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Livestock Software Platform | AnimalCare360 By Logic Unit',
  description: "AnimalCare360 is Logic Unit's livestock software platform for cattle farms, feed retailers, animal traders, pet hospitals, and veterinary clinics.",
  alternates: {
    canonical: '/industries/livestock',
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
            className="inline-block text-sm font-semibold text-[#10277a] hover:text-[#7bd72f]"
          >
            Explore Cattle Management &rarr;
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
            className="inline-block text-sm font-semibold text-[#10277a] hover:text-[#7bd72f]"
          >
            Explore Feed Retail POS &rarr;
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
            className="inline-block text-sm font-semibold text-[#10277a] hover:text-[#7bd72f]"
          >
            Explore Animal Trading &rarr;
          </a>
        </div>
      ),
    },
    {
      title: 'Pet Hospital & Vet Clinic Software',
      body: (
        <div className="space-y-4">
          <p>
            AnimalCare360 supports pet hospitals and veterinary clinics with EMR, appointments, veterinary notes, pharmacy inventory, billing, and alerts.
          </p>
          <div className="flex flex-col gap-1">
            <a
              href="https://animalcare360.com/pet-hospital"
              className="text-sm font-semibold text-[#10277a] hover:text-[#7bd72f]"
            >
              Explore Pet Hospital ERP &rarr;
            </a>
            <a
              href="https://animalcare360.com/solutions/veterinary-clinic-software"
              className="text-sm font-semibold text-[#10277a] hover:text-[#7bd72f]"
            >
              Explore Vet Clinic Software &rarr;
            </a>
          </div>
        </div>
      ),
    },
    {
      title: 'CattlePro operations system',
      body: (
        <div className="space-y-4">
          <p>
            CattlePro is AnimalCare360's livestock operations and finance system with detailed modules for animals, inventory, finances, health, breeding, operations, and advisory workflows.
          </p>
          <div className="flex flex-col gap-1">
            <a
              href="https://animalcare360.com/cattlepro"
              className="text-sm font-semibold text-[#10277a] hover:text-[#7bd72f]"
            >
              Explore CattlePro Overview &rarr;
            </a>
            <a
              href="https://animalcare360.com/cattlepro/features"
              className="text-sm font-semibold text-[#10277a] hover:text-[#7bd72f]"
            >
              Explore CattlePro Features &rarr;
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Logic Unit's Product Ecosystem Bridge",
      body: (
        <div className="space-y-4">
          <p>
            AnimalCare360 gives Logic Unit a dedicated livestock and animal care software platform inside its wider product ecosystem. It strengthens the company's positioning as a SaaS operating company building industry-specific software platforms for real operational environments.
          </p>
          <Link
            href="/ecosystem/animalcare360-livestock-animal-care-software"
            className="inline-block text-sm font-semibold text-[#10277a] hover:text-[#7bd72f]"
          >
            View Logic Unit Product Page &rarr;
          </Link>
        </div>
      ),
    },
    {
      title: 'Related Product Resources',
      body: (
        <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-500">
          <a href="https://animalcare360.com" className="hover:text-slate-800">Website &rarr;</a>
          <a href="https://animalcare360.com/solutions" className="hover:text-slate-800">Solutions &rarr;</a>
          <a href="https://animalcare360.com/features" className="hover:text-slate-800">Features &rarr;</a>
          <a href="https://animalcare360.com/pricing" className="hover:text-slate-800">Pricing Plans &rarr;</a>
          <a href="https://animalcare360.com/resources" className="hover:text-slate-800">Resources &rarr;</a>
          <a href="https://animalcare360.com/download-app" className="hover:text-slate-800">Download App &rarr;</a>
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
      backText="Explore Logic Unit Ecosystem"
      backHref="/ecosystem/animalcare360-livestock-animal-care-software"
      externalHref="https://animalcare360.com"
      externalText="Visit AnimalCare360"
    />
  );
}
