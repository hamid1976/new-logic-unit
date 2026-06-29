import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'Smart Salik Digital Toll Management Case Study',
  description: 'Logic Unit contributed to Smart Salik, a digital toll management mobile app for account balance, recharge, vehicles, and violations.',
  alternates: {
    canonical: '/case-studies/smart-salik-digital-toll-management',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Smart Salik Digital Toll Management Case Study',
    'description': 'Logic Unit contributed to Smart Salik, a digital toll management mobile app for account balance, recharge, vehicles, and violations.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const features = [
    'Self-service account creation & management',
    'Instant card and digital balance recharge',
    'Multi-vehicle management & license plate updates',
    'Detailed trip history log & toll logs',
    'Toll violations tracking, notifications, & fine payments',
    'Low-balance indicators and automated payment alerts',
  ];

  return (
    <CaseStudyPageTemplate
      title="Smart Salik Case Study"
      h1="Smart Salik: Digital Toll Management Platform"
      summaryText="Dubai's Roads and Transport Authority needed a mobile platform to improve how motorists interact with the Salik electronic toll system. Logic Unit contributed to the Smart Salik mobile application, giving users real-time access to account balances, vehicle management, trip history, recharge services, and violation tracking."
      challengeText="Users had limited account visibility, inconvenient balance checks, manual recharge processes, poor access to trip history, difficulty managing violations, and reliance on customer service channels."
      solutionText="The mobile application centralized Salik account, vehicle, payment, toll activity, and notification workflows into one self-service experience. The technology utilizes iOS and Android applications, government systems integrations, secure payment gateways, real-time sync, OCR scan capabilities, and push notification services."
      features={features}
      impactText="The application achieved over 1 million downloads, increased digital adoption, reduced customer service dependency, improved user satisfaction, and strengthened self-service capabilities."
      ctaText="Discuss A Government Digital Platform"
      schemaJson={schemaJson}
    />
  );
}
