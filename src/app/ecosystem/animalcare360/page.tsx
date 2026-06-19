import type { Metadata } from 'next'
import { AnimalCare360Client } from './AnimalCare360Client'

export const metadata: Metadata = {
  title: 'AnimalCare360 | Livestock & Animal Care ERP by Logic Unit',
  description: 'AnimalCare360 by Logic Unit is Pakistan\'s #1 cloud ERP for cattle farms, wanda retailers, animal traders & pet hospitals. FBR-compliant. Start free trial.',
  alternates: {
    canonical: '/ecosystem/animalcare360',
  },
}

export default function Page() {
  return <AnimalCare360Client />
}
