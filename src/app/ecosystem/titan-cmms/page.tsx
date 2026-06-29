import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ui/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Titan CMMS | Maintenance Management Software Platform',
  description: 'Titan CMMS is an enterprise-grade maintenance management platform for asset management, preventive maintenance, work orders, and analytics.',
  alternates: {
    canonical: '/ecosystem/titan-cmms',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Titan CMMS',
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Cloud, On-Premise',
  };

  const features = [
    {
      name: 'Asset Management',
      description: 'Maintain visibility into asset inventory, asset history, maintenance schedules, and lifecycle tracking.',
    },
    {
      name: 'Preventive Maintenance',
      description: 'Automate maintenance planning, job scheduling, work order generation, and inspection routines.',
    },
    {
      name: 'Predictive Maintenance',
      description: 'Use IoT integrations, sensor data, and performance indicators to support condition-based maintenance planning.',
    },
    {
      name: 'Work Order Management',
      description: 'Track requests, assignments, completion status, and resource allocation.',
    },
    {
      name: 'Spare Parts Management',
      description: 'Manage inventory levels, consumption patterns, procurement planning, and stock forecasting.',
    },
    {
      name: 'Maintenance Analytics',
      description: 'Visualize MTTR, MTBF, downtime trends, maintenance costs, and operational reliability.',
    },
  ];

  const sidebar = {
    title: 'The Maintenance Challenge',
    items: [
      'Unplanned equipment failures and production downtime',
      'Paper-based or scattered maintenance records',
      'Poor spare parts visibility and stock tracking gaps',
      'Maintenance cost overruns and limited asset lifecycle history',
    ],
    type: 'cross' as const,
  };

  return (
    <ProductPageTemplate
      title="Titan CMMS"
      h1="Titan CMMS: Computerized Maintenance Management System"
      heroBody="Titan CMMS is an enterprise-grade maintenance management platform developed by Logic Unit to help organizations optimize asset performance, reduce downtime, and improve maintenance efficiency."
      challengeTitle="The Maintenance Challenge"
      challengeText="Industrial organizations often face unplanned equipment failures, paper-based maintenance records, poor spare parts visibility, maintenance cost overruns, and limited asset lifecycle visibility. These issues directly affect productivity, reliability, and profitability. Titan CMMS brings asset records, work orders, schedules, parts, and analytics into one maintenance management platform."
      sidebar={sidebar}
      featuresTitle="Core CMMS Capabilities"
      features={features}
      audience={[
        'Manufacturing Facilities & Plants',
        'Textile & Energy Sectors',
        'Utilities, Oil & Gas Enterprises',
        'Healthcare Facilities & Logistics Hubs',
      ]}
      techStack={[
        'IoT & Sensor Integrations',
        'ERP & Enterprise Integrations',
        'Real-Time Dashboards',
        'Predictive Analytics Engines',
        'Mobile & Cloud-Based Architecture',
      ]}
      schemaJson={schemaJson}
    />
  );
}
