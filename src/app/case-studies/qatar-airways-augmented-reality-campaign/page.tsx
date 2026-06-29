import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: 'Qatar Airways Augmented Reality Campaign Case Study',
  description: 'Logic Unit helped create an augmented reality brand engagement campaign for Qatar Airways with mobile interaction and analytics.',
  alternates: {
    canonical: '/case-studies/qatar-airways-augmented-reality-campaign',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Qatar Airways Augmented Reality Brand Engagement Experience Case Study',
    'description': 'Logic Unit helped create an augmented reality brand engagement campaign for Qatar Airways with mobile interaction and analytics.',
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
      summaryText="Qatar Airways wanted a memorable way to engage travelers through interactive marketing experiences. Logic Unit partnered on an augmented reality campaign that transformed physical advertising materials into immersive digital experiences accessible through smartphones."
      challengeText="Traditional advertising channels often struggle to create meaningful engagement. Qatar Airways needed a campaign that increased interaction, differentiated the brand, supported measurable outcomes, and connected physical and digital experiences."
      solutionText="Logic Unit helped develop an AR-powered marketing experience that allowed users to scan campaign assets and unlock interactive digital content."
      features={features}
      impactText="The campaign increased engagement, improved brand recall, supported measurable user analytics, and created a differentiated customer experience."
      ctaText="Discuss An AR Engagement Platform"
      schemaJson={schemaJson}
    />
  );
}
