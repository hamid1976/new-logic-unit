import type { Metadata } from 'next'
import { HulmSolutionsClient } from './HulmSolutionsClient'

export const metadata: Metadata = {
  title: 'Hulm Solutions Cloud Based POS & Business OS by Logic Unit',
  description: 'Hulm Solutions by Logic Unit is POS & all-in-one business management platform built for retail, restaurants & 10+ industries. Book a free demo!',
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
