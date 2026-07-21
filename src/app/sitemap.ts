import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl

  return [
    { url: baseUrl, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    
    // Product Ecosystem
    { url: `${baseUrl}/ecosystem`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ecosystem/hulm-solutions`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/titan-mms-maintenance-management-software`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/animalcare360-livestock-animal-care-software`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/analyzequran`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/hospitello`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/bike-tour-pro`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/mfcc-command-control-console`, changeFrequency: 'monthly', priority: 0.7 },

    // Case Studies
    { url: `${baseUrl}/case-studies`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/case-studies/seagold-logistics-management-platform`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/novo-nordisk-sample-ordering-application`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/giftwifts-leopards-courier`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/agp-drug-verifier-platform`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/ksew-enterprise-erp-transformation`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/goodments-ethical-investing-platform`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/smart-salik-digital-toll-management`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/mpay-government-payment-platform`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/dunkin-donuts-retail-operations-platform`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/qatar-airways-augmented-reality-campaign`, changeFrequency: 'monthly', priority: 0.7 },

    // Capabilities & Industries
    { url: `${baseUrl}/technology`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/retail`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/healthcare`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/livestock`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/manufacturing`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/logistics`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/facilities`, changeFrequency: 'monthly', priority: 0.6 },

    // Partnerships
    { url: `${baseUrl}/partnerships`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/partnerships/strategic-partnerships`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/partnerships/system-integrators`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/partnerships/enterprise-collaboration`, changeFrequency: 'monthly', priority: 0.6 },
    
    // Contact
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.6 },

    // Insights Hub & Articles
    { url: `${baseUrl}/insights`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/insights/what-is-operational-infrastructure-saas`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/what-is-a-saas-operating-company`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/product-engineering-vs-software-outsourcing`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/building-industry-specific-saas-platforms`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/livestock-software-platforms-animalcare360`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/retail-operations-platforms-hulm-pos`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/logistics-management-platforms-shipment-visibility`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/strategic-saas-partnerships-product-ecosystem-growth`, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
