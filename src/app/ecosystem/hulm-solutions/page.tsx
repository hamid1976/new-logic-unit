import type { Metadata } from 'next'
import { HulmSolutionsClient } from './HulmSolutionsClient'

export const metadata: Metadata = {
  title: 'HULM POS: Cloud Based Retail POS & Business OS | Logic Unit',
  description: 'Discover HULM POS by Logic Unit — an all-in-one business management and point-of-sale platform built for retail, restaurants, and operations.',
  alternates: {

      canonical: '/ecosystem/hulm-solutions',

  },

  openGraph: {

      url: '/ecosystem/hulm-solutions',

  },
}

export default function Page() {
  return <HulmSolutionsClient />
}
