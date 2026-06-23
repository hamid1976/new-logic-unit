import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ecosystem`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ecosystem/hulm-solutions`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/titan-mms-maintenance-management-software`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/ecosystem/animalcare360-livestock-animal-care-software`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/technology`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/retail`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/healthcare`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/livestock`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/manufacturing`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/logistics`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industries/facilities`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/partnerships`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/partnerships/strategic-partnerships`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/partnerships/system-integrators`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/partnerships/enterprise-collaboration`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
  ]
}
