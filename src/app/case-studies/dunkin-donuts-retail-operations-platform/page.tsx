import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: "Dunkin' Donuts Retail Operations Platform Case Study",
  description: "Logic Unit built a mobile-first retail operations and sales management platform for Dunkin' Donuts Pakistan branch visibility.",
  alternates: {
    canonical: '/case-studies/dunkin-donuts-retail-operations-platform',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': "Dunkin' Donuts Pakistan Retail Operations & Sales Management Platform Case Study",
    'description': "Logic Unit built a mobile-first retail operations and sales management platform for Dunkin' Donuts Pakistan branch visibility.",
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const features = [
    'Daily sales reporting and automated consolidation',
    'Branch performance and metric monitoring',
    'Operations management control dashboard',
    'Task assignments and workflow management',
    'Internal message board and notification engine',
    'Historical analytics and executive KPI reporting',
  ];

  return (
    <CaseStudyPageTemplate
      title="Dunkin' Donuts Case Study"
      h1="Dunkin' Donuts Pakistan Retail Operations & Sales Platform"
      summaryText="Dunkin' Donuts Pakistan needed real-time visibility into sales, operations, inventory, and performance across multiple retail outlets. Logic Unit developed a mobile-first operational platform that digitized reporting, standardized workflows, and improved communication between branches and management."
      challengeText="As the organization expanded, management faced delayed sales reporting, manual data collection, inconsistent branch processes, limited operational visibility, and communication inefficiencies."
      solutionText="Logic Unit developed a hybrid mobile application for branch teams and management to collaborate through a centralized digital platform. The technology stack features Ionic, Angular, mobile APIs, cloud infrastructure, and secure authentication controls."
      features={features}
      impactText="The platform supported faster reporting cycles, improved operational visibility, better communication, increased accountability, and data-driven decision-making."
      ctaText="Discuss A Retail Operations Platform"
      schemaJson={schemaJson}
    />
  );
}
