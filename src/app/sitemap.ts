import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    
    // Product Ecosystem
    { url: `${baseUrl}/ecosystem`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ecosystem/hulm-solutions`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/titan-mms-maintenance-management-software`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/animalcare360-livestock-animal-care-software`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/hulm-pos`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/titan-cmms`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/analyzequran`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/hospitello`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/bike-tour-pro`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/mfcc-command-control-console`, lastModified, changeFrequency: 'monthly', priority: 0.7 },

    // Case Studies
    { url: `${baseUrl}/case-studies`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/case-studies/seagold-logistics-management-platform`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/novo-nordisk-sample-ordering-application`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/giftwifts-leopards-courier`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/agp-drug-verifier-platform`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/ksew-enterprise-erp-transformation`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/goodments-ethical-investing-platform`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/smart-salik-digital-toll-management`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/mpay-government-payment-platform`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/dunkin-donuts-retail-operations-platform`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/case-studies/qatar-airways-augmented-reality-campaign`, lastModified, changeFrequency: 'monthly', priority: 0.7 },

    // Capabilities & Industries
    { url: `${baseUrl}/technology`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/retail`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/healthcare`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/livestock`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/manufacturing`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/logistics`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/facilities`, lastModified, changeFrequency: 'monthly', priority: 0.6 },

    // Partnerships
    { url: `${baseUrl}/partnerships`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/partnerships/strategic-partnerships`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/partnerships/system-integrators`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/partnerships/enterprise-collaboration`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    
    // Contact
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },

    // Insights Hub & Articles
    { url: `${baseUrl}/insights`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/insights/what-is-operational-infrastructure-saas`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/what-is-a-saas-operating-company`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/product-engineering-vs-software-outsourcing`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/building-industry-specific-saas-platforms`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/livestock-software-platforms-animalcare360`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/retail-operations-platforms-hulm-pos`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/logistics-management-platforms-shipment-visibility`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights/strategic-saas-partnerships-product-ecosystem-growth`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
