import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'GiftWifts by Leopards Courier | Logic Unit',
  description: 'Logic Unit helped build GiftWifts, a digital gifting and eCommerce platform powered by Leopards Courier\'s logistics network.',
  alternates: {

      canonical: '/case-studies/giftwifts-leopards-courier',

  },

  openGraph: {

      url: '/case-studies/giftwifts-leopards-courier',

  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'GiftWifts Digital Commerce Platform Case Study',
    'description': 'Logic Unit helped build GiftWifts, a digital gifting and eCommerce platform powered by Leopards Courier\'s logistics network.',
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
      summaryText="GiftWifts was launched as a strategic corporate gifting platform and consumer eCommerce channel for Leopards Courier, one of Pakistan's largest logistics networks. Logic Unit designed, developed, and launched the end-to-end platform, integrating eCommerce storefront capabilities, personalized gifting workflows, and automated delivery tracking directly with Leopards' existing logistics infrastructure."
      challengeText="To diversify its core logistics business and capture the growing digital gifting market, Leopards Courier needed a consumer-facing eCommerce solution. Launching a new retail vertical required overcoming several challenges: building a product catalog system, managing personalization workflows (like custom messages and gift packaging), handling bulk orders for corporate accounts, and connecting order checkout with courier dispatch and cargo tracking databases to support delivery updates."
      solutionText="Logic Unit engineered a custom eCommerce and gifting platform. The solution features a product catalog dashboard, an interactive gift customization engine, a secure checkout supporting online card payments, digital wallets, and Cash on Delivery, a dedicated portal for corporate clients to manage bulk recipient lists, and direct integration with Leopards' core tracking APIs to provide real-time delivery status updates."
      features={features}
      impactText="The launch of GiftWifts successfully positioned Leopards Courier in the digital gifting market, opening a new revenue channel. By combining digital commerce with their established nationwide delivery network, Leopards provided clients with a seamless experience, simplifying personal and corporate gifting while maintaining complete tracking visibility."
      ctaText="Discuss A Commerce Platform"
      schemaJson={schemaJson}
    />
  );
}
