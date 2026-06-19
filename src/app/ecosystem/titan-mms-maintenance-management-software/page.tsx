import type { Metadata } from 'next'
import { TitanMmsClient } from './TitanMmsClient'

export const metadata: Metadata = {
  title: 'TitanMMS: CMMS & Asset Management Software by Logic Unit',
  description: 'Titan MMS by Logic Unit is computerized maintenance management software (CMMS) that helps industries automate maintenance operations.',
  alternates: {
    canonical: '/ecosystem/titan-mms-maintenance-management-software',
  },
}

export default function Page() {
  return <TitanMmsClient />
}
