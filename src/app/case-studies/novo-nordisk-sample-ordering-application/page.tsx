import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'Novo Nordisk Sample Ordering App Case Study',
  description: 'Logic Unit developed a secure iOS sample ordering application for healthcare professionals with education, compliance, and request workflows.',
  alternates: {
    canonical: '/case-studies/novo-nordisk-sample-ordering-application',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Novo Nordisk Healthcare Professional Sample Ordering Application Case Study',
    'description': 'Logic Unit developed a secure iOS sample ordering application for healthcare professionals with education, compliance, and request workflows.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const features = [
    'Responsibilities & regulatory compliance module',
    'Digital medical sample ordering interface',
    'Guided healthcare professional request workflows',
    'Request approval status tracking',
    'Secure user session and authentication experience',
    'Integrated educational resources library',
  ];

  return (
    <CaseStudyPageTemplate
      title="Novo Nordisk Case Study"
      h1="Novo Nordisk Sample Ordering Application"
      summaryText="Novo Nordisk required a secure and compliant mobile application to modernize medical sample distribution while educating healthcare professionals on approved procedures. Logic Unit developed a native iOS application that streamlined sample requests, improved compliance adherence, and delivered a consistent digital experience for healthcare professionals."
      challengeText="Traditional sample ordering workflows involved manual steps, compliance risk, limited traceability, and administrative workload. The organization needed a mobile-first solution aligned with pharmaceutical governance standards."
      solutionText="Logic Unit developed a native iOS application using Swift, combining education, compliance content, and sample request workflows in a guided mobile experience."
      features={features}
      impactText="The application reduced manual processes, improved transparency, supported compliance adherence, and gave healthcare professionals immediate access to approved sample request workflows."
      ctaText="Discuss A Healthcare Platform"
      schemaJson={schemaJson}
    />
  );
}
