import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'mPay Government Payment Platform Case Study',
  description: 'Logic Unit contributed to mPay, a unified government mobile payment platform for Dubai Smart Government digital services.',
  alternates: {
    canonical: '/case-studies/mpay-government-payment-platform',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'mPay Government Payment Platform Case Study',
    'description': 'Logic Unit contributed to mPay, a unified government mobile payment platform for Dubai Smart Government digital services.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const features = [
    'Unified payments for DEWA, DU, Etisalat, Salik, RTA, and municipality fees',
    'Smart payment dashboard & history tracking',
    'Voice-activated payment processing features',
    'Saved accounts, auto-fill, and saved payment profiles',
    'Automated bill reminders and push notifications',
    'Bilingual experience supporting Arabic & English',
  ];

  return (
    <CaseStudyPageTemplate
      title="mPay Case Study"
      h1="mPay: Unified Government Payment Platform"
      summaryText="Dubai Smart Government launched mPay to simplify how residents pay utility bills and government service fees. Logic Unit contributed to a unified mobile payment platform that allows citizens to pay multiple services through a single application."
      challengeText="Residents previously needed multiple systems and portals to pay utility bills, telecommunications services, road tolls, traffic fines, and municipality fees. This fragmented payment experience created unnecessary complexity."
      solutionText="mPay centralized payment access for multiple government entities through one mobile interface. The technical architecture includes government API integrations, secure payment processing, cloud infrastructure, Arabic NLP support, mobile applications, and enterprise security controls."
      features={features}
      impactText="mPay supported high citizen adoption, reduced physical service center visits, increased digital transaction volume, improved public satisfaction, and contributed directly to Dubai Smart Government initiatives."
      ctaText="Discuss A Government Payment Platform"
      schemaJson={schemaJson}
    />
  );
}
