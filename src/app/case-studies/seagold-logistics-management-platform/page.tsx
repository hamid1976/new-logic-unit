import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'Seagold Logistics Platform Case Study | Logic Unit',
  description: 'See how Logic Unit built a real-time logistics and shipment tracking platform with customer self-service for Seagold.',
  alternates: {

      canonical: '/case-studies/seagold-logistics-management-platform',

  },

  openGraph: {

      url: '/case-studies/seagold-logistics-management-platform',

  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Seagold Logistics Management & Shipment Tracking Platform Case Study',
    'description': 'See how Logic Unit built a real-time logistics and shipment tracking platform with customer self-service for Seagold.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const features = [
    'Real-time shipment tracking & milestone updates',
    'Customer self-service portal for tracking and documents',
    'Centralized digital document management & storage',
    'Operations management control dashboard',
    'Automated email and SMS notification engine',
    'Advanced multi-criteria search and sorting',
  ];

  return (
    <CaseStudyPageTemplate
      title="Seagold Case Study"
      h1="Seagold Logistics Management & Shipment Tracking Platform"
      summaryText="Seagold (Private) Limited, a prominent freight forwarding and maritime logistics enterprise, needed a centralized logistics management platform with a customer self-service portal to digitize shipment tracking, streamline complex transit operations, and improve real-time visibility for international clients and internal teams. Logic Unit designed and developed a web-based logistics platform that consolidated fragmented shipment data, cargo documentation, customer communication, and operational workflows into a single high-availability environment."
      challengeText="Before implementation, Seagolds shipment management was heavily dependent on manual data entry, spreadsheets, unstructured email chains, and constant phone call follow-ups. International customers had limited visibility into cargo milestones, and internal operations teams spent hours responding to tracking inquiries. Essential transit documents, such as Bills of Lading, Commercial Invoices, Packing Lists, and Customs Clearances, were distributed across disconnected databases and folders, causing delay bottlenecks. Operational reporting lacked real-time accuracy, making it difficult for management to optimize shipping routes, analyze customer margins, and manage load planning."
      solutionText="Logic Unit built a centralized, web-based platform tailored for freight forwarding and transport operations. The system features secure customer portals with a tracking engine, internal dashboards for operations managers, a structured document repository, and automated alert engines. The technology backbone incorporates a cloud-hosted deployment for regional availability, role-based access controls, an API-ready architecture for carrier sync, scalable database design, mobile-responsive interface, secure document storage, and a trigger-based email and SMS notification engine that updates users instantly as containers cross ports."
      features={features}
      impactText="The platform transformed Seagolds customer experience and operational model. By introducing automated self-service, Seagold reduced tracking support inquiries, streamlined internal workflows, and secured documentation in a central repository. This digital transformation established a scalable operational framework that allowed Seagold to handle larger shipment volumes and strengthen its standing in the global freight forwarding industry."
      ctaText="Discuss A Logistics Platform"
      schemaJson={schemaJson}
    />
  );
}
