import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'Novo Nordisk Sample Ordering App | Logic Unit',
  description: 'Logic Unit built a secure iOS sample ordering app for healthcare professionals with compliance and education workflows.',
  alternates: {
    canonical: '/case-studies/novo-nordisk-sample-ordering-application',
  },
  openGraph: {
    url: '/case-studies/novo-nordisk-sample-ordering-application',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Novo Nordisk Healthcare Professional Sample Ordering Application Case Study',
    'description': 'Logic Unit built a secure iOS sample ordering app for healthcare professionals with compliance and education workflows.',
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
      summaryText="Novo Nordisk, a global leader in diabetes and chronic care therapeutics, required a secure, compliant, and user-friendly mobile application to modernize the distribution of medical product samples to healthcare professionals. Logic Unit developed a native iOS application that streamlined sample request approvals, improved regulatory compliance adherence, and delivered a consistent digital experience for authorized doctors and medical representatives."
      challengeText="Traditional medical sample ordering processes involved multiple manual steps, paper forms, and face-to-face handovers, introducing compliance risks and limiting traceability. Within a highly regulated pharmaceutical industry, Novo Nordisk needed to ensure that doctors were fully educated on product indications, responsibilities, and guidelines before requesting samples. The organization required a secure, mobile-first solution that reduced administrative workload, prevented unauthorized orders, and maintained an auditable record of sample distribution."
      solutionText="Logic Unit designed and engineered a native iOS application using Swift. The solution features a comprehensive responsibilities module that displays compliance guidelines and training materials. Healthcare professionals must complete these educational modules before the application allows them to place sample requests. Built with enterprise security, the app features role-based access control, secure API integrations with corporate CRM systems, offline content support, and a push notification engine that alerts doctors of order approvals or compliance updates."
      features={features}
      impactText="The application digitized the sample distribution pipeline, reducing manual verification time. By integrating educational gateways, Novo Nordisk improved compliance adherence and established complete traceability for every product sample distributed. Healthcare professionals gained a fast, self-service channel to request samples and access up-to-date clinical studies directly from their mobile devices."
      ctaText="Discuss A Healthcare Platform"
      schemaJson={schemaJson}
    />
  );
}
