import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ui/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'MFCC | Command & Control Workstation Platform',
  description: 'MFCC is a mission-critical command and control workstation for maritime, defense, surveillance, and operational monitoring environments.',
  alternates: {
    canonical: '/ecosystem/mfcc-command-control-console',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Multi-Function Command & Control Console (MFCC)',
    'category': 'Hardware-Software Workstation',
  };

  const features = [
    {
      name: 'Dual 24-Inch Marine Displays',
      description: 'Support simultaneous monitoring of radar, sonar, navigation, and video feeds.',
    },
    {
      name: 'Touch Input Display',
      description: 'Provide dedicated operational controls and mission interaction.',
    },
    {
      name: 'Ergonomic Design',
      description: 'Designed to reduce operator fatigue, physical strain, and performance degradation during long operating periods.',
    },
    {
      name: 'Ruggedized Construction',
      description: 'Built for marine environments, vibration resistance, humidity resistance, and continuous operation.',
    },
    {
      name: 'Mission Flexibility',
      description: 'Suitable for maritime operations, surveillance systems, command centers, and defense applications.',
    },
  ];

  const sidebar = {
    title: 'Operational Challenge',
    items: [
      'Continuous monitoring requirements in harsh conditions',
      'Operator fatigue and physical strain during long shifts',
      'Fragmented feeds (radar, sonar, navigation, video)',
      'High standards for marine vibration and humidity resistance',
    ],
    type: 'cross' as const,
  };

  return (
    <ProductPageTemplate
      title="MFCC"
      eyebrow="Mission-Critical Workstation"
      h1="MFCC: Multi-Function Command & Control Console"
      heroBody="The Multi-Function Console, or MFCC, is a mission-critical command and control workstation designed for maritime, defense, and surveillance environments."
      challengeEyebrow="The Tactical Challenge"
      challengeTitle="Operational Challenge"
      challengeText="Operators in defense and maritime environments require continuous monitoring, rapid decision-making tools, long-duration comfort, and integration with multiple mission systems. Standard commercial workstations are often unsuitable for these operating conditions."
      sidebar={sidebar}
      featuresTitle="Workstation Capabilities"
      features={features}
      audience={[
        'Maritime & Naval Operators',
        'Defense Surveillance Teams',
        'Strategic Command Centers',
        'Integrated Security Monitoring Units',
      ]}
      techStack={[
        'Ruggedized Marine Hardware Integration',
        'C4I Systems Communication Protocol',
        'Real-Time Navigation Platforms',
        'Multisensor Network Processing',
        'Video Surveillance Matrix Interfaces',
      ]}
      schemaJson={schemaJson}
    />
  );
}
