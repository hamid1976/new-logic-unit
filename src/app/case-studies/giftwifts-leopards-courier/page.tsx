import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'GiftWifts Digital Commerce Platform Case Study',
  description: 'Logic Unit helped build GiftWifts, a digital commerce and corporate gifting platform backed by Leopards Courier logistics operations.',
  alternates: {
    canonical: '/case-studies/giftwifts-leopards-courier',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'GiftWifts Digital Commerce Platform Case Study',
    'description': 'Logic Unit helped build GiftWifts, a digital commerce and corporate gifting platform backed by Leopards Courier logistics operations.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const features = [
    'Product catalog and category management',
    'Dynamic promotions and discount engines',
    'Personalized gift messages and custom packaging options',
    'Corporate gifting portal and bulk orders management',
    'Secure checkout and multiple payment gateways',
    'Real-time courier delivery tracking integration',
  ];

  return (
    <CaseStudyPageTemplate
      title="GiftWifts Case Study"
      h1="GiftWifts By Leopards Courier"
      summaryText="GiftWifts positioned Leopards as more than a logistics company by creating a new digital commerce channel for gifting, delivery tracking, and corporate ordering. Logic Unit supported the platform with eCommerce workflows, personalization, payment integration, real-time delivery tracking, and administrative management."
      challengeText="The opportunity was to build a digital gifting experience that combined product discovery, personalization, checkout, and delivery visibility with Leopards' logistics operations."
      solutionText="The platform integrated commerce, personalization, corporate gifting, payment processing, and delivery tracking into one customer-facing digital experience."
      features={features}
      impactText="GiftWifts opened a digital commerce channel for Leopards while improving convenience for retail and corporate gifting customers."
      ctaText="Discuss A Commerce Platform"
      schemaJson={schemaJson}
    />
  );
}
