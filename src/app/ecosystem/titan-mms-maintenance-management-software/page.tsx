import type { Metadata } from 'next'
import { TitanMmsClient } from './TitanMmsClient'

export const metadata: Metadata = {
  title: 'Titan CMMS: Asset Management Software | Logic Unit',
  description: 'Discover Titan CMMS by Logic Unit — a computerized maintenance management software (CMMS) that helps industries automate maintenance workflows.',
  alternates: {
    canonical: '/ecosystem/titan-mms-maintenance-management-software',
  },
  openGraph: {
    url: '/ecosystem/titan-mms-maintenance-management-software',
  },
}

export default function Page() {
  return <TitanMmsClient />
}
