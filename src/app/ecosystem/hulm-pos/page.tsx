import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ui/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'HULM POS | Retail POS & Business Management Platform',
  description: 'HULM POS is a unified retail and business management platform for billing, inventory, procurement, CRM, reporting, and FBR integration.',
  alternates: {

      canonical: '/ecosystem/hulm-pos',

  },

  openGraph: {

      url: '/ecosystem/hulm-pos',

  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'HULM POS',
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Cloud, On-Premise, Hybrid',
  };

  const features = [
    {
      name: 'Point Of Sale',
      description: 'Fast billing workflows with barcode scanning, multiple payment methods, discounts, promotions, refund management, and receipt generation.',
    },
    {
      name: 'Inventory Management',
      description: 'Real-time product tracking, multi-location inventory, batch management, stock transfers, and low-stock alerts.',
    },
    {
      name: 'Purchase & Vendor Management',
      description: 'Create purchase orders, manage vendors, track supplier performance, and monitor procurement activity.',
    },
    {
      name: 'Customer Relationship Management',
      description: 'Customer profiles, purchase history, loyalty programs, customer segmentation, and marketing campaign support.',
    },
    {
      name: 'Employee Management',
      description: 'Track employee activity, shift performance, sales performance, and access permissions.',
    },
    {
      name: 'Reporting & Analytics',
      description: 'Dashboards for sales trends, inventory insights, profitability analysis, and business KPIs.',
    },
    {
      name: 'FBR Integration',
      description: 'Support for tax-compliant invoicing, FBR integration, and digital record keeping.',
    },
  ];

  const sidebar = {
    title: 'Built For Growing Retail & Service Businesses',
    items: [
      'Inventory discrepancies and stock tracking gaps',
      'Disconnected billing, procurement, and customer tools',
      'FBR tax compliance and reporting complexities',
      'Delayed reports and manual sales consolidation',
    ],
    type: 'cross' as const,
  };

  return (
    <ProductPageTemplate
      title="HULM POS"
      h1="HULM POS: Unified Retail & Business Management Platform"
      heroBody="HULM POS is a comprehensive business management platform developed by Logic Unit for retailers, restaurants, franchises, and multi-location businesses that need one centralized system for daily operations."
      challengeTitle="Built For Growing Retail And Service Businesses"
      challengeText="Many businesses still manage billing, inventory, procurement, customer records, reporting, and accounting through disconnected tools. This creates inventory discrepancies, manual reporting, poor customer visibility, delayed decisions, compliance challenges, and revenue leakage. HULM POS helps reduce those gaps by giving teams real-time visibility across stock, sales, customers, vendors, and business performance."
      sidebar={sidebar}
      featuresTitle="Core Modules Suite"
      features={features}
      audience={[
        'Retail Stores & Supermarkets',
        'Restaurants & Bakeries',
        'Pharmacies & Electronics Stores',
        'Fashion Retailers & Franchise Networks',
      ]}
      techStack={[
        'FBR Systems Integration',
        'Payment Gateways Integration',
        'ERP & Accounting Systems',
        'eCommerce Platforms Connection',
        'Mobile & Web Applications',
      ]}
      schemaJson={schemaJson}
    />
  );
}
