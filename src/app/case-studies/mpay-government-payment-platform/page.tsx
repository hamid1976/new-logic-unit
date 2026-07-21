import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'mPay Government Payment App | Logic Unit',
  description: 'Logic Unit contributed to mPay, a unified mobile payment platform for Dubai Smart Government utility and service fees.',
  alternates: {

      canonical: '/case-studies/mpay-government-payment-platform',

  },

  openGraph: {

      url: '/case-studies/mpay-government-payment-platform',

  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'mPay Government Payment Platform Case Study',
    'description': 'Logic Unit contributed to mPay, a unified mobile payment platform for Dubai Smart Government utility and service fees.',
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
      contactHref="/contact?cta=case-study-discussion&page_type=case-study&inquiry_type=portfolio&interest=enterprise&source_slug=mpay-government-payment-platform"
      discussionHref="/contact?cta=case-study-discussion&page_type=case-study&inquiry_type=portfolio&interest=enterprise&source_slug=mpay-government-payment-platform"
      title="mPay Case Study"
      h1="mPay: Unified Government Payment Platform"
      summaryText="Dubai Smart Government launched the mPay initiative to simplify how residents pay utility bills and public service fees. Logic Unit contributed to the development of this unified mobile payment platform, which allows citizens to pay for municipal services, electricity, water, telecom, and transit fees through a single application. The platform is a key component of Dubai's smart city digitizing strategy."
      challengeText="Prior to mPay, residents had to use fragmented payment portals and visiting physical locations to settle bills for DEWA (electricity/water), telecom operators (Du, Etisalat), road tolls (Salik), traffic fines, and municipal permits. This disconnected experience caused administrative delays and user inconvenience. The government needed a single, secure mobile application that aggregated payments, integrated complex APIs, and supported high volume transactions."
      solutionText="Logic Unit collaborated on building a secure mobile payment engine. The platform integrates with multiple government and enterprise API gateways, facilitating unified transactions. Key features include a smart payment dashboard, stored credentials for fast checkout, voice-driven payment actions, automatic due date alerts, and bilingual (English/Arabic) support. The technical setup features secure transaction tokens, encryption standards, and cloud-native databases."
      features={features}
      impactText="The mPay platform achieved high adoption among citizens, significantly reducing visits to physical government service offices. It increased digital transaction volume and accelerated fee collections for public services. By centralizing billing, the application improved public satisfaction and helped drive Dubai's smart government goals."
      ctaText="Discuss a Similar Enterprise Platform"
      schemaJson={schemaJson}
    />
  );
}
