import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ui/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'Hospitello | Digital Patient Engagement Platform',
  description: 'Hospitello is a healthcare engagement platform for appointment booking, specialist discovery, patient education, and hospital communication.',
  alternates: {
    canonical: '/ecosystem/hospitello',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Hospitello',
    'applicationCategory': 'HealthApplication',
    'operatingSystem': 'iOS, Android, Web',
  };

  const features = [
    {
      name: 'Appointment Booking',
      description: 'Patients can search doctors, book appointments, reschedule visits, and receive reminders.',
    },
    {
      name: 'Specialist Discovery',
      description: 'Patients can find healthcare professionals by specialty, department, and availability.',
    },
    {
      name: 'Department Navigation',
      description: 'Hospitello helps patients navigate large healthcare facilities.',
    },
    {
      name: 'Patient Education',
      description: 'Hospitals can deliver health tips, medical information, and awareness campaigns.',
    },
    {
      name: 'Notifications & Alerts',
      description: 'Send appointment reminders, hospital announcements, and health alerts.',
    },
    {
      name: 'Hospital Dashboard',
      description: 'Administrators can monitor patient engagement, appointment trends, and user activity.',
    },
  ];

  const sidebar = {
    title: 'Challenges In Healthcare Engagement',
    items: [
      'Inefficient appointment scheduling and booking backlogs',
      'High call volumes and customer service strain',
      'Limited communication channels with active outpatients',
      'Administrative overhead in sharing medical bulletins',
    ],
    type: 'cross' as const,
  };

  return (
    <ProductPageTemplate
      title="Hospitello"
      h1="Hospitello: Digital Patient Engagement Platform"
      heroBody="Hospitello is a healthcare engagement platform developed by Logic Unit to help hospitals improve patient experience, increase operational efficiency, and strengthen communication between patients and healthcare providers."
      challengeTitle="Challenges In Healthcare Engagement"
      challengeText="Hospitals often face appointment management issues, high call volumes, limited communication channels, poor patient engagement, and administrative inefficiencies. Hospitello addresses these challenges through digital self-service and patient-facing healthcare workflows."
      sidebar={sidebar}
      featuresTitle="Core Features & Modules"
      features={features}
      audience={[
        'Outpatients & Hospital Visitors',
        'Medical Directors & Administrators',
        'Consulting Specialists & Staff',
        'Healthcare Operations Managers',
      ]}
      techStack={[
        'iOS & Android Mobile Applications',
        'Push Notifications System',
        'Analytics Dashboard Interface',
        'Appointment Booking Logic Engine',
        'Secure Patient Data Handling',
      ]}
      schemaJson={schemaJson}
    />
  );
}
