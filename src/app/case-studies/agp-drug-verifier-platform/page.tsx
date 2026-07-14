import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'AGP Drug Verifier Platform Case Study | Logic Unit',
  description: "Logic Unit built AGP's drug authentication platform with barcode verification, scan analytics, and compliance reporting.",
  alternates: {

      canonical: '/case-studies/agp-drug-verifier-platform',

  },

  openGraph: {

      url: '/case-studies/agp-drug-verifier-platform',

  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'AGP Drug Verifier Platform Case Study',
    'description': "Logic Unit built AGP's drug authentication platform with barcode verification, scan analytics, and compliance reporting.",
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
      summaryText="AGP, a leading pharmaceutical manufacturer, partnered with Logic Unit to develop a comprehensive drug authentication ecosystem designed to combat the rising threat of counterfeit medicines and comply with evolving industry regulations. The platform enables consumers to verify medicine authenticity instantly through barcode scanning, while providing AGP with vital supply chain visibility, scan geo-location analytics, and security alerts."
      challengeText="Counterfeit pharmaceuticals pose severe risks to patient health and damage corporate brand trust. AGP needed a reliable method to authenticate products at the point of purchase. Prior to the project, there was no customer-facing verification system, and the manufacturer had limited visibility into where counterfeit products were being distributed. The company required a secure system to serialize drug packaging, track scanning locations, identify counterfeit patterns, and compile regulatory compliance reports."
      solutionText="Logic Unit designed and built a multi-layered verification ecosystem. The solution includes a unique product serialization database, a dynamic 2D barcode generator for packaging lines, a user-friendly mobile application for consumers, and a centralized manufacturer dashboard. When a consumer scans a pack, the system checks the database, validates the code, and logs the GPS location. If a duplicated or invalid code is scanned, the platform triggers an alert to AGPs security team, mapping suspected counterfeit hotspots."
      features={features}
      impactText="The platform significantly improved consumer confidence in AGP products by offering an immediate verification method. The analytics dashboard provided AGP with real-time visibility into product distribution and geolocated counterfeit attempts. This proactive monitoring strengthened brand protection and ensured the manufacturer met strict regulatory requirements for pharmaceutical traceability."
      ctaText="Discuss A Healthcare Verification Platform"
      schemaJson={schemaJson}
    />
  );
}
