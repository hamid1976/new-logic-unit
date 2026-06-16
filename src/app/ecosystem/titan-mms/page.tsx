import type { Metadata } from 'next'
import { SubPageTemplate } from '@/components/ui/SubPageTemplate'

export const metadata: Metadata = {
  title: 'Titan MMS - Computerized Maintenance Management System | Logic Unit',
  description:
    'Titan MMS (CMMS) is a cloud-based maintenance management platform designed to automate work orders, track equipment history, schedule preventive service, and maximize asset uptime.',
  keywords: [
    'Titan MMS',
    'Titan CMMS',
    'maintenance management software',
    'work order automation',
    'preventive maintenance',
    'asset management system',
    'reliability engineering',
  ],
}

export default function TitanMmsPage() {
  const sections = [
    {
      title: 'Asset & Lifecycle Operations',
      body: 'Centrally register company equipment and physical assets, document technical specifications, store warranty dates, and log repairs to minimize lifetime depreciation.',
    },
    {
      title: 'Automated Work Orders',
      body: 'Log, schedule, dispatch, and track daily maintenance tasks. Transition technicians from reactive fixes to efficient preventive workflows with detailed completion logs.',
    },
    {
      title: 'Preventive Maintenance Scheduling',
      body: 'Automate inspection and service schedules based on elapsed time or usage metrics, ensuring regular equipment upkeep and preventing sudden operational breakdowns.',
    },
    {
      title: 'Reliability & Uptime Reporting',
      body: 'Real-time performance analytics measuring equipment downtime, maintenance overheads, technician productivity, and spare part usage metrics.',
    },
  ]

  return (
    <SubPageTemplate
      eyebrow="Ecosystem Product"
      h1="Titan MMS: Computerized Maintenance Management System."
      heroBody="A cloud-based CMMS built to streamline maintenance operations, track physical assets, run preventive maintenance schedules, and maximize hardware lifecycles."
      sections={sections}
      ctaTitle="Connect with the Titan MMS product team."
      backText="Back to Ecosystem"
      backHref="/ecosystem"
      externalHref="https://titanmms.com"
      externalText="Visit Titan MMS Website"
    />
  )
}
