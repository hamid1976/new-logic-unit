import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'Seagold Logistics Management Platform Case Study',
  description: 'See how Logic Unit built a logistics management and shipment tracking platform for Seagold with customer self-service and real-time visibility.',
  alternates: {
    canonical: '/case-studies/seagold-logistics-management-platform',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Seagold Logistics Management & Shipment Tracking Platform Case Study',
    'description': 'See how Logic Unit built a logistics management and shipment tracking platform for Seagold with customer self-service and real-time visibility.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://logicunit.com/logo.png', // Fallback URL
      },
    },
  };

  const features = [
    'Real-time shipment tracking & milestone updates',
    'Customer self-service access portal',
    'Centralized digital document management & storage',
    'Operations management control dashboard',
    'Automated email and SMS notification engine',
    'Advanced multi-criteria search and sorting',
  ];

  return (
    <CaseStudyPageTemplate
      title="Seagold Case Study"
      h1="Seagold Logistics Management & Shipment Tracking Platform"
      summaryText="Seagold needed a centralized logistics management platform to digitize shipment tracking, streamline operations, and improve visibility for customers and internal teams. Logic Unit designed and developed a web-based logistics platform that consolidated shipment data, documentation, customer communication, and operational workflows into one environment."
      challengeText="Shipment management relied on manual processes, spreadsheets, email communication, and telephone follow-ups. Customers had limited shipment visibility, teams spent time responding to tracking inquiries, documents were distributed across channels, and reporting lacked real-time accuracy."
      solutionText="Logic Unit built a centralized platform for freight forwarding operations with customer access, internal dashboards, document management, milestone updates, and automated notifications. The technology backbone features a web-based enterprise platform, cloud-hosted deployment, role-based access control, API-ready architecture, scalable database design, mobile-responsive interface, secure document storage, and an automated notification engine."
      features={features}
      impactText="The platform improved customer experience, reduced operational overhead, created a single source of truth for shipment data, and gave Seagold a scalable logistics ecosystem."
      ctaText="Discuss A Logistics Platform"
      schemaJson={schemaJson}
    />
  );
}
