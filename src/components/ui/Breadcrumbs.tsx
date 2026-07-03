'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteUrl } from '@/lib/site';

const segmentLabelMap: Record<string, string> = {
  about: 'About',
  ecosystem: 'Ecosystem',
  technology: 'Technology',
  industries: 'Industries',
  partnerships: 'Partnerships',
  contact: 'Contact',
  retail: 'Retail',
  healthcare: 'Healthcare',
  livestock: 'Livestock',
  logistics: 'Logistics',
  manufacturing: 'Manufacturing',
  facilities: 'Facilities',
  'strategic-partnerships': 'Strategic Partnerships',
  'system-integrators': 'System Integrators',
  'enterprise-collaboration': 'Enterprise Collaboration',
  'hulm-solutions': 'Hulm Solutions',
  'titan-mms-maintenance-management-software': 'Titan MMS',
  'animalcare360-livestock-animal-care-software': 'AnimalCare360',
  'hulm-pos': 'HULM POS',
  'titan-cmms': 'Titan CMMS',
  'analyzequran': 'AnalyzeQuran',
  'hospitello': 'Hospitello',
  'bike-tour-pro': 'Bike Tour Pro',
  'mfcc-command-control-console': 'MFCC Console',
  'case-studies': 'Case Studies',
  'seagold-logistics-management-platform': 'Seagold Logistics',
  'nova-nordisk-sample-ordering-application': 'Nova Nordisk App',
  'giftwifts-leopards-courier': 'GiftWifts',
  'agp-drug-verifier-platform': 'AGP Drug Verifier',
  'ksew-enterprise-erp-transformation': 'KS&EW ERP',
  'goodments-ethical-investing-platform': 'Goodments',
  'smart-salik-digital-toll-management': 'Smart Salik',
  'mpay-government-payment-platform': 'mPay',
  'dunkin-donuts-retail-operations-platform': "Dunkin' Donuts",
  'qatar-airways-augmented-reality-campaign': 'Qatar Airways AR',
};

export function Breadcrumbs() {
  const pathname = usePathname();

  // If we are on the homepage, do not render breadcrumbs
  if (!pathname || pathname === '/') {
    return null;
  }

  const segments = pathname.split('/').filter(Boolean);
  
  // Build breadcrumb items
  const items = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = segmentLabelMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return { label, href };
  });

  // Construct BreadcrumbList Schema Markup
  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `${siteUrl}${item.href}`,
      })),
    ],
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />

      {/* Visual Navigation */}
      <nav 
        className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300"
        aria-label="Breadcrumb"
      >
        <Link 
          href="/" 
          className="hover:text-white transition-colors duration-200"
        >
          Home
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <span key={item.href} className="flex items-center gap-2">
              <span className="text-slate-500 select-none">/</span>
              {isLast ? (
                <span className="text-[#7bd72f] font-bold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
