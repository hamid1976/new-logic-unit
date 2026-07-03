import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'Qatar Airways AR Campaign | Logic Unit',
  description: 'Logic Unit helped create an augmented reality brand campaign for Qatar Airways with mobile interaction and analytics.',
  alternates: {
    canonical: '/case-studies/qatar-airways-augmented-reality-campaign',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Qatar Airways Augmented Reality Brand Engagement Experience Case Study',
    'description': 'Logic Unit helped create an augmented reality brand campaign for Qatar Airways with mobile interaction and analytics.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const features = [
    'Immersive augmented reality (AR) animations',
    'Mobile camera scanning and asset recognition controls',
    'Destination showcases and promotional video content',
    'Campaign engagement analytics and tracking',
    'Dynamic content management system (CMS) tools',
    'Cross-platform compatibility (iOS & Android browsers)',
  ];

  return (
    <CaseStudyPageTemplate
      title="Qatar Airways AR Case Study"
      h1="Qatar Airways Augmented Reality Campaign"
      summaryText="Qatar Airways sought an innovative, memorable method to engage travelers in Saudi Arabia through interactive marketing. Logic Unit partnered on an augmented reality campaign providing immersive AR brand engagement and detailed campaign analytics, transforming traditional advertising posters into digital experiences accessible instantly through smartphones."
      challengeText="Traditional print and outdoor advertising channels struggle to hold consumer attention and lack conversion metrics. Qatar Airways wanted to build customer interest, differentiate its premium brand from competitors, and drive mobile travel bookings. The airline required an augmented reality campaign that merged physical ad displays with rich digital content, providing marketing teams with analytics on user interaction."
      solutionText="Logic Unit collaborated on building the mobile AR campaign platform. Users scan physical display billboards to launch web-based AR animations without installing dedicated applications. The platform displays interactive flight route maps, video showcases, and promotional booking links. The system incorporates mobile web camera scanning, high-performance 3D graphics rendering, and a campaign analytics dashboard tracking user conversions."
      features={features}
      impactText="The campaign successfully increased user interaction rates and strengthened brand recall. The analytics modules provided marketing teams with insights into scanner demographics, location performance, and booking clicks, demonstrating how augmented reality can connect physical and digital advertising to deliver measurable results."
      ctaText="Discuss An AR Engagement Platform"
      schemaJson={schemaJson}
    />
  );
}
