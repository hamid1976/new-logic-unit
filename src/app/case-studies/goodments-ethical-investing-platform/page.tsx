import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'Goodments Ethical Investing App | Logic Unit',
  description: 'Logic Unit built Goodments, a mobile-first fintech app for ESG screening, portfolio management, and ethical investing.',
  alternates: {

      canonical: '/case-studies/goodments-ethical-investing-platform',

  },

  openGraph: {

      url: '/case-studies/goodments-ethical-investing-platform',

  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Goodments Ethical Investing Platform Case Study',
    'description': 'Logic Unit built Goodments, a mobile-first fintech app for ESG screening, portfolio management, and ethical investing.',
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
      contactHref="/contact?cta=case-study-discussion&page_type=case-study&inquiry_type=portfolio&interest=enterprise&source_slug=goodments-ethical-investing-platform"
      discussionHref="/contact?cta=case-study-discussion&page_type=case-study&inquiry_type=portfolio&interest=enterprise&source_slug=goodments-ethical-investing-platform"
      title="Goodments Case Study"
      h1="Goodments: Ethical Investing Platform For The Next Generation"
      summaryText="Logic Unit partnered with the Goodments founders in Australia to design and build a mobile-first fintech mobile platform. The application combines ESG environmental, social, and governance screening, financial market integrations, portfolio management tools, and personalized investment research into a user-friendly experience designed for the next generation of conscious investors."
      challengeText="Traditional investment applications focus primarily on financial performance, offering limited transparency into the environmental and social impact of portfolios. Goodments set out to simplify ethical investing for retail users, particularly younger demographics. The challenge was aggregating complex ESG metrics, combining it with real-time stock market data, and presenting it through a highly intuitive, secure, and engaging mobile interface."
      solutionText="Logic Unit built cross-platform iOS and Android mobile applications. The platform features an ESG screening engine that filters companies by environmental impact, diversity, and social responsibility. To support beginners, we implemented a simulated practice portfolio workspace. The technology stack includes real-time financial market API integrations, ESG data aggregation pipelines, secure multi-factor authentication, and responsive data visualization graphs."
      features={features}
      impactText="Goodments successfully launched in the competitive Australian fintech market, acquiring a growing user base of socially conscious investors. The platform's clean design and transparent ESG metrics received national media coverage. The project's commercial success and technological scalability contributed to Goodments' acquisition by Australian digital banking platform Douugh Ltd."
      ctaText="Discuss a Similar Enterprise Platform"
      schemaJson={schemaJson}
    />
  );
}
