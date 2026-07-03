import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ui/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Bike Tour Pro | White-Label Tour Operator Platform',
  description: 'Bike Tour Pro is a white-label SaaS platform for tour operators to manage bookings, customers, payments, communications, and mobile apps.',
  alternates: {
    canonical: '/ecosystem/bike-tour-pro',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Bike Tour Pro',
    'applicationCategory': 'TravelApplication',
    'operatingSystem': 'iOS, Android, Web',
  };

  const features = [
    {
      name: 'Tour Management',
      description: 'Manage tour packages, itineraries, guides, and availability.',
    },
    {
      name: 'Booking Management',
      description: 'Track reservations, payments, and customer information.',
    },
    {
      name: 'Customer Mobile App',
      description: 'Travelers can book tours, view itineraries, chat with guides, and share experiences.',
    },
    {
      name: 'Communication Hub',
      description: 'Support group chats, announcements, and real-time updates.',
    },
    {
      name: 'Analytics Dashboard',
      description: 'View revenue, occupancy, and customer behavior insights.',
    },
    {
      name: 'White-Label Branding',
      description: 'Operators can launch fully branded solutions under their own identity.',
    },
  ];

  const sidebar = {
    title: 'The Tour Operator Challenge',
    items: [
      'Fragmented systems for bookings, guides, and schedules',
      'High cost of custom booking software development',
      'Poor real-time communication channels on active tours',
      'Manual tracking of guide assignments and client preferences',
    ],
    type: 'cross' as const,
  };

  return (
    <ProductPageTemplate
      title="Bike Tour Pro"
      h1="Bike Tour Pro: White-Label Tour Operator Platform"
      heroBody="Bike Tour Pro is a specialized tour operator SaaS platform built for bicycle tour operators, travel companies, and adventure tourism businesses."
      challengeTitle="The Tour Operator Challenge"
      challengeText="Tour operators often rely on spreadsheets, multiple booking tools, separate payment systems, and manual communication. This fragmented operating model limits scalability and customer experience. Bike Tour Pro centralizes tour operations and gives operators a branded digital platform without enterprise-level development cost."
      sidebar={sidebar}
      featuresTitle="Core Platform Features"
      features={features}
      audience={[
        'Bicycle Tour Operators',
        'Adventure Tourism Companies',
        'Regional Travel & Guiding Agencies',
        'Independent Outdoor Tour Directors',
      ]}
      techStack={[
        'Mobile Client Apps (iOS & Android)',
        'Operator Web Administration Portal',
        'Secure Payment Gateway Integrations',
        'GPS Navigation & Route Mapping',
        'Cloud Server Infrastructure',
      ]}
      schemaJson={schemaJson}
    />
  );
}
