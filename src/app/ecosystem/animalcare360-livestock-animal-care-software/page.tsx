import type { Metadata } from 'next'
import { AnimalCare360Client } from './AnimalCare360Client'

export const metadata: Metadata = {
  title: 'AnimalCare360 | Livestock & Animal Care Software',
  description: "AnimalCare360 is Logic Unit's livestock, feed retail, animal trading, pet hospital, and veterinary clinic software platform.",
  alternates: {
    canonical: '/ecosystem/animalcare360-livestock-animal-care-software',
  },
}

export default function Page() {
  return <AnimalCare360Client />
}
