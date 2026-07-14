import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ui/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'MFCC | Command & Control Workstation Platform',
  description: 'MFCC is a mission-critical command and control workstation for maritime, defense, surveillance, and operational monitoring environments.',
  alternates: {

      canonical: '/ecosystem/mfcc-command-control-console',

  },

  openGraph: {

      url: '/ecosystem/mfcc-command-control-console',

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
      description: 'Provides high-brightness, anti-reflective, and dimmable screens designed to display radar, sonar, ECDIS electronic charting, and live video surveillance feeds side-by-side without operator eye strain.',
    },
    {
      name: 'Dedicated Touch Input Display (TID)',
      description: 'Features a customized lower touchscreen control console that hosts mission interaction controls, quick-access function maps, system diagnostics, and communication shortcuts.',
    },
    {
      name: 'Ergonomic Physical Form Factor',
      description: 'Engineered in compliance with ISO ergonomics standards to minimize physical fatigue during extended 12-hour operator shifts. Features adjustable keyboard trays, optimal display viewing angles, and reach-zones.',
    },
    {
      name: 'Ruggedized Industrial Enclosure',
      description: 'Constructed using marine-grade aluminum alloy and powder coating to resist saltwater corrosion, high humidity, and extreme temperatures. Features shock absorbers to withstand heavy naval vessel vibration.',
    },
    {
      name: 'C4I & Sensor Fusion Architecture',
      description: 'Integrates and displays data streams from multiple sensors, including maritime radars, sonar arrays, AIS tracking systems, and thermal imaging cameras into a single, unified operational view.',
    },
  ];

  const sidebar = {
    title: 'Tactical Operational Challenges',
    items: [
      'Unforgiving marine conditions (vibration, shock, salinity)',
      'Severe operator fatigue from long surveillance watch shifts',
      'Data fragmentation across isolated radar and sonar computers',
      'Requirement for absolute continuous uptime (zero-failure rate)',
    ],
    type: 'cross' as const,
  };

  return (
    <ProductPageTemplate
      title="MFCC"
      h1="MFCC: Multi-Function Command & Control Console"
      heroBody="The Multi-Function Console (MFCC) is a ruggedized, high-integrity command and control workstation engineered by Logic Unit for maritime navigation, coastal surveillance, and defense operations."
      challengeTitle="The Challenges of Harsh Operational Environments"
      challengeText="Command and control operators in naval ships, harbor control offices, and strategic defense stations work in demanding environments. Standard commercial computer workstations fail under these conditions due to constant mechanical vibration, thermal fluctuations, and saline air. Furthermore, operators must monitor multiple systems—including radars, sonar feeds, navigation charts, and CCTV displays—leading to interface fatigue and delayed response times during critical operations. The MFCC was developed to solve these issues, integrating ruggedized hardware chassis design with an ergonomic dual-display console and unified sensor aggregation software."
      sidebar={sidebar}
      featuresTitle="Workstation Capabilities"
      features={features}
      audience={[
        'Naval Operators & Coast Guard Crews',
        'Harbor Control & Vessel Traffic Service (VTS) Officers',
        'Tactical Security & Surveillance Personnel',
        'Defense Operations & C4I Coordination Units',
      ]}
      techStack={[
        'Ruggedized Marine Enclosures & Shock Mounts',
        'ECDIS & Maritime Radar System Protocols',
        'S57 / S63 Digital Vector Chart Engines',
        'Multisensor Data Fusion APIs (NMEA 0183 / 2000)',
        'Touchscreen Human-Machine Interfaces (HMI)',
      ]}
      schemaJson={schemaJson}
    />
  );
}
