import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'

export const metadata: Metadata = {
  title: 'Hulm Solutions - Cloud POS & Business Operating System | Logic Unit',
  description:
    'Hulm Solutions is an integrated business management and Point of Sale (POS) system built to streamline retail operations, multi-location inventory, and supply chains.',
  keywords: [
    'Hulm Solutions',
    'Point of Sale',
    'POS system',
    'inventory management',
    'retail operating system',
    'multi-location retail software',
    'order management',
  ],
}

export default function HulmSolutionsPage() {
  const sections = [
    {
      title: 'Point of Sale (POS)',
      body: 'A core billing, sales, and checkout system designed for retail outlets, restaurants, hospitality, and service-oriented businesses to manage high-speed daily operational transactions.',
    },
    {
      title: 'Inventory & Multi-Warehouse Management',
      body: 'Real-time stock level synchronization, warehouse transfer systems, barcode tracking, and automatic notifications for low-stock thresholds across multiple physical locations.',
    },
    {
      title: 'Order & Vendor Operations',
      body: 'Centralized order tracking for retail channels, vendor purchase order automation, supplier payment logs, and supplier credit balance reporting.',
    },
    {
      title: 'Finance & Compliance Analytics',
      body: 'Integrated invoice printing (FBR-compliant), daily sales margin tracking, tax compliance tools, and automated profit-and-loss reports.',
    },
  ]

  return (
    <SubPageTemplate
      eyebrow="Ecosystem Product"
      h1="Hulm Solutions: Cloud POS & Business Operating System."
      heroBody="An integrated business management and POS platform designed for retail, wholesale, and service environments to digitize daily operations, control inventory, and track financial cycles."
      sections={sections}
      ctaTitle="Connect with the Hulm Solutions product team."
      backText="Back to Ecosystem"
      backHref="/ecosystem"
      externalHref="https://hulmsolutions.com"
      externalText="Visit Hulm Solutions Website"
    />
  )
}
