import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'Smart Salik Digital Toll App | Logic Unit',
  description: 'Logic Unit contributed to Smart Salik, Dubai\'s toll management app for balance, recharge, vehicles, and violation tracking.',
  alternates: {

      canonical: '/case-studies/smart-salik-digital-toll-management',

  },

  openGraph: {

      url: '/case-studies/smart-salik-digital-toll-management',

  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Smart Salik Digital Toll Management Case Study',
    'description': 'Logic Unit contributed to Smart Salik, Dubai\'s toll management app for balance, recharge, vehicles, and violation tracking.',
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
      contactHref="/contact?cta=case-study-discussion&page_type=case-study&inquiry_type=portfolio&interest=logistics&source_slug=smart-salik-digital-toll-management"
      discussionHref="/contact?cta=case-study-discussion&page_type=case-study&inquiry_type=portfolio&interest=logistics&source_slug=smart-salik-digital-toll-management"
      title="Smart Salik Case Study"
      h1="Smart Salik: Digital Toll Management Platform"
      summaryText="As part of Dubai's Smart City vision, the Roads and Transport Authority (RTA) sought to improve how motorists interact with the Salik electronic toll system. Logic Unit collaborated on the development of the Smart Salik mobile application, providing comprehensive toll account management, vehicle coordination, real-time recharge services, trip history, and violation management. The app transformed an administrative process into a convenient self-service mobile experience."
      challengeText="Prior to the mobile application, Dubai motorists faced several challenges managing their toll accounts. Checking balances required calling phone hotlines or visiting physical kiosks, tag activation was manual and slow, and tracking crossings or toll violations was difficult, leading to unexpected fines. The RTA required a secure, high-concurrency mobile application capable of supporting millions of transactions per day, with real-time database synchronization."
      solutionText="Logic Unit contributed to the design and development of the Smart Salik mobile applications for iOS and Android. The platform integrates directly with government databases, allowing users to recharge balances securely using credit cards or online vouchers. Key modules include vehicle profile updates, optical character recognition (OCR) for tag scanning, interactive crossing history logs, and instant push notifications to alert drivers of low balances or violations."
      features={features}
      impactText="The application achieved high digital adoption, surpassing 1 million downloads on mobile stores. By providing a convenient, 24/7 self-service channel, the RTA reduced customer service center visits, shortened call center queue times, and improved overall motorist satisfaction. The real-time notification system significantly lowered outstanding toll violations across the emirate."
      ctaText="Discuss a Similar Logistics Platform"
      schemaJson={schemaJson}
    />
  );
}
