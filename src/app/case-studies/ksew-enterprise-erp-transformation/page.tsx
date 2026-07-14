import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'KS&EW Enterprise ERP Case Study | Logic Unit',
  description: "Logic Unit contributed to KS&EW's enterprise ERP transformation across project management, procurement, engineering, and finance.",
  alternates: {

      canonical: '/case-studies/ksew-enterprise-erp-transformation',

  },

  openGraph: {

      url: '/case-studies/ksew-enterprise-erp-transformation',

  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'KS&EW Enterprise ERP Transformation Case Study',
    'description': "Logic Unit contributed to KS&EW's enterprise ERP transformation across project management, procurement, engineering, and finance.",
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
      summaryText="Karachi Shipyard & Engineering Works (KS&EW) embarked on an enterprise-wide digital transformation to modernize shipbuilding, engineering, procurement, manufacturing, and financial operations. Logic Unit participated in implementing a comprehensive ERP platform based on IFS Applications, designed to unify disconnected divisions, improve resource scheduling, and provide real-time project management controls."
      challengeText="Managing complex heavy engineering and shipbuilding projects across multiple departments is a massive operational challenge. KS&EWs divisions—such as shipbuilding, general engineering, procurement, maintenance, and finance—operated on disconnected databases. This siloed model limited executive visibility, created material purchasing bottlenecks, delayed financial reporting, and made it difficult to manage contracts and project variations."
      solutionText="Logic Unit contributed to the deployment of the IFS Applications ERP system. The unified database integrates CAD engineering design workflows, automated RFQs, inventory tracking for heavy raw materials (steel, machinery), project milestone budgeting, contract retention trackers, and project accounting systems. Built with dashboard reports and workflow automations, the platform provides a single source of truth for shipyard operators."
      features={features}
      impactText="The ERP implementation modernized KS&EWs industrial operations. The platform broke down information silos, allowing cross-departmental data flow and improving project tracking. Shipyard management gained precise control over budgets and variations, while the automated purchasing modules streamlined supply chain logistics, positioning KS&EW for scalable operations."
      ctaText="Discuss Enterprise Collaboration"
      schemaJson={schemaJson}
    />
  );
}
