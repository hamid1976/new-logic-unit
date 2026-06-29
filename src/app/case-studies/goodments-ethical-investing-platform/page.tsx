import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'Goodments Ethical Investing Platform Case Study',
  description: 'Logic Unit helped build Goodments, a mobile-first fintech platform for ESG screening, portfolio management, and ethical investing.',
  alternates: {
    canonical: '/case-studies/goodments-ethical-investing-platform',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Goodments Ethical Investing Platform Case Study',
    'description': 'Logic Unit helped build Goodments, a mobile-first fintech platform for ESG screening, portfolio management, and ethical investing.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const features = [
    'Ethical investment screening & value alignment',
    'Custom ESG company filters & indicators',
    'Real-time portfolio management & order tracking',
    'Interactive practice portfolio mode for beginners',
    'Personalized ESG research & financial education tools',
    'Real-time market data & price feeds integration',
    'Automated alerts, push notifications, and daily insights',
  ];

  return (
    <CaseStudyPageTemplate
      title="Goodments Case Study"
      h1="Goodments: Ethical Investing Platform For The Next Generation"
      summaryText="Goodments was created to help individuals invest according to environmental, social, and ethical values while still using modern investment tools. Logic Unit designed and developed a mobile-first fintech platform combining investment research, ESG screening, portfolio management, and financial insights."
      challengeText="Traditional investment platforms focused mainly on financial performance and offered limited visibility into social and environmental impact. Goodments needed to make ESG data accessible, appeal to younger investors, improve financial literacy, and deliver an intuitive mobile experience."
      solutionText="Logic Unit collaborated with the founders to translate complex investment and ESG data into actionable mobile experiences for new and experienced investors."
      features={features}
      impactText="Goodments made ethical investing more accessible, helped users align portfolios with personal values, and contributed to the company's acquisition by Douugh Ltd."
      ctaText="Discuss A Fintech Platform"
      schemaJson={schemaJson}
    />
  );
}
