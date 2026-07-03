import type { Metadata } from 'next';
import { CaseStudyPageTemplate } from '@/components/ui/CaseStudyPageTemplate';

export const metadata: Metadata = {
  title: "Dunkin' Donuts Retail Operations | Logic Unit",
  description: 'Logic Unit built a mobile-first retail operations platform giving Dunkin\' Donuts Pakistan real-time sales and branch visibility.',
  alternates: {
    canonical: '/case-studies/dunkin-donuts-retail-operations-platform',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Dunkin\' Donuts Pakistan Retail Operations & Sales Management Platform Case Study',
    'description': 'Logic Unit built a mobile-first retail operations platform giving Dunkin\' Donuts Pakistan real-time sales and branch visibility.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Logic Unit',
    },
  };

  const features = [
    'Daily sales reporting and automated consolidation',
    'Branch performance and metric monitoring',
    'Operations management control dashboard',
    'Task assignments and workflow management',
    'Internal message board and notification engine',
    'Historical analytics and executive KPI reporting',
  ];

  return (
    <CaseStudyPageTemplate
      title="Dunkin' Donuts Case Study"
      h1="Dunkin' Donuts Pakistan Retail Operations & Sales Platform"
      summaryText="Dunkin' Donuts Pakistan partnered with Logic Unit to build a mobile-first sales management platform and task management ecosystem, designed to give franchise management real-time visibility into store sales, operational checklists, inventory audits, and branch performance across multiple retail locations. The application standardizes daily store operations and connects branch managers directly with corporate administration."
      challengeText="Managing a rapidly growing retail franchise network with multiple locations makes it difficult to maintain operational consistency. Dunkin' Donuts Pakistan faced issues with delayed daily sales reporting, manual data aggregation, inconsistent branch processes, and limited visibility into store operations. Management lacked a central channel to assign tasks, monitor branch compliance, and coordinate issue resolution quickly."
      solutionText="Logic Unit designed and developed a hybrid mobile application built with Ionic and Angular. The platform integrates a daily sales reporting module, an operations control dashboard, a task management workflow engine, and an internal communication hub. Branch managers submit daily revenues, track equipment maintenance requests, and complete opening/closing checklists, while corporate managers monitor performance, track task completion, and resolve operational issues through a centralized web portal."
      features={features}
      impactText="The platform modernized Dunkin' Donuts' retail operations by streamlining reporting cycles and eliminating manual data entry. Real-time dashboards provided corporate management with immediate visibility into sales trends, branch compliance, and operational bottlenecks. The task management workflows increased store-level accountability, leading to improved branch coordination and overall operational efficiency."
      ctaText="Discuss A Retail Operations Platform"
      schemaJson={schemaJson}
    />
  );
}
