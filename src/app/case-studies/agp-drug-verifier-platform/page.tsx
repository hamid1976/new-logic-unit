import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'AGP Drug Verifier Platform Case Study',
  description: 'Logic Unit developed a drug authentication ecosystem for AGP with barcode verification, scan analytics, and compliance reporting.',
  alternates: {
    canonical: '/case-studies/agp-drug-verifier-platform',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'AGP Drug Verifier Platform Case Study',
    'description': 'Logic Unit developed a drug authentication ecosystem for AGP with barcode verification, scan analytics, and compliance reporting.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const features = [
    'Instant consumer medicine verification',
    'Secure product authentication protocols',
    'Dynamic 2D barcode generation systems',
    'Verification scan tracking and logs',
    'Geographic scan analytics and hotspots map',
    'Counterfeit activity detection & security alerts',
    'Regulatory compliance & pharmaceutical reporting support',
  ];

  return (
    <CaseStudyPageTemplate
      title="AGP Case Study"
      h1="AGP Drug Verifier Platform"
      summaryText="AGP partnered with Logic Unit to develop a drug authentication ecosystem designed to combat counterfeit medicines and support pharmaceutical compliance. The platform enables consumers to verify medicine authenticity through barcode scanning while giving AGP visibility into supply chain activity and scan analytics."
      challengeText="AGP needed to address counterfeit medicine risk, regulatory compliance, product traceability, consumer trust, and supply chain visibility."
      solutionText="Logic Unit developed a verification ecosystem with unique product serialization, 2D barcode generation, consumer verification, manufacturer dashboards, analytics, and compliance reporting."
      features={features}
      impactText="The platform improved consumer confidence, supply chain visibility, counterfeit monitoring, regulatory readiness, and brand protection."
      ctaText="Discuss A Healthcare Verification Platform"
      schemaJson={schemaJson}
    />
  );
}
