import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'

export const metadata: Metadata = {
  title: 'AnimalCare360 - Livestock ERP & Veterinary Management | Logic Unit',
  description:
    'AnimalCare360 is an integrated cloud-based ERP and clinical platform designed for dairy/cattle farms, feed retailers, livestock trading, and veterinary clinics.',
  keywords: [
    'AnimalCare360',
    'Livestock ERP',
    'veterinary software',
    'cattle farm software',
    'feed management',
    'animal EMR',
    'livestock trading system',
  ],
}

export default function AnimalCare360Page() {
  const sections = [
    {
      title: 'Herd & Cattle Tracking',
      body: 'Digitize complete animal profiles including breed, vaccination status, breeding cycles, weight records, milk yield logs, and detailed parent histories.',
    },
    {
      title: 'Veterinary Electronic Medical Records (EMR)',
      body: 'Centralized patient histories, surgery documentation, treatment schedules, clinical notes, appointment calendars, and integrated pharmacy inventory.',
    },
    {
      title: 'Inventory & Retail Feed POS',
      body: 'Operate FBR-compliant billing for wanda and feed retailers. Manage pharmaceutical stock with expiration alerts, batch controls, and minimum-quantity thresholds.',
    },
    {
      title: 'Trading & Broker Contracts',
      body: 'Custom ERP workflows designed to manage livestock sales contracts, transport billing calculations, broker commissions, and investor account ledger statements.',
    },
  ]

  return (
    <SubPageTemplate
      eyebrow="Ecosystem Product"
      h1="AnimalCare360: Livestock ERP & Veterinary Management."
      heroBody="An all-in-one cloud platform built specifically for cattle farms, veterinary clinics, feed shops, and livestock traders to automate business operations, billing, and logs."
      sections={sections}
      ctaTitle="Connect with the AnimalCare360 product team."
      backText="Back to Ecosystem"
      backHref="/ecosystem"
      externalHref="https://animalcare360.com"
      externalText="Visit AnimalCare360 Website"
    />
  )
}
