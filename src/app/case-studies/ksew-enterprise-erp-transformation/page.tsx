import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'KS&EW Enterprise ERP Transformation Case Study',
  description: 'Logic Unit contributed to an enterprise ERP transformation for KS&EW across project management, procurement, engineering, and finance.',
  alternates: {
    canonical: '/case-studies/ksew-enterprise-erp-transformation',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'KS&EW Enterprise ERP Transformation Case Study',
    'description': 'Logic Unit contributed to an enterprise ERP transformation for KS&EW across project management, procurement, engineering, and finance.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const features = [
    'Project controls: Budgeting, scheduling, forecasting, and risk management',
    'Procurement management: RFQs, purchasing, supplier management, and material tracking',
    'Engineering integration: CAD integration, design workflows, and document management',
    'Contract management: Contract variations, retentions, payments, and certificates',
    'Financial management: Project accounting, revenue recognition, and financial reporting',
  ];

  return (
    <CaseStudyPageTemplate
      title="KS&EW Case Study"
      h1="KS&EW Enterprise ERP Transformation"
      summaryText="Karachi Shipyard & Engineering Works launched a major digital transformation initiative to modernize engineering, procurement, project management, manufacturing, and finance operations. Logic Unit participated in the implementation of an enterprise-wide ERP platform designed to unify operations and improve visibility across complex shipbuilding and engineering projects."
      challengeText="KS&EW operated multiple functions across shipbuilding, engineering, procurement, maintenance, construction, and finance. Disconnected systems limited visibility and operational efficiency."
      solutionText="The ERP ecosystem covered project management, procurement management, engineering integration, contract management, and financial management. The technical stack included IFS Applications ERP, enterprise integrations, engineering data integration, reporting dashboards, workflow automation, and advanced project controls."
      features={features}
      impactText="The transformation supported unified processes, improved reporting accuracy, stronger project controls, greater procurement visibility, reduced information silos, and scalable enterprise architecture."
      ctaText="Discuss Enterprise Collaboration"
      schemaJson={schemaJson}
    />
  );
}
