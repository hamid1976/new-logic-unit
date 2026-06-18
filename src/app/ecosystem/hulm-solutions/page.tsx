import type { Metadata } from 'next'
import { HulmSolutionsClient } from './HulmSolutionsClient'

export const metadata: Metadata = {
  title: 'Hulm Solutions by Logic Unit — Cloud POS & Business OS',
  description: 'Hulm Solutions by Logic Unit is a cloud-based POS and business management platform built for retail, restaurants, salons, pharmacies, and 10+ industries in Pakistan and globally. Manage inventory, orders, vendors, and reporting in one system.',
}

export default function Page() {
  return <HulmSolutionsClient />
}
