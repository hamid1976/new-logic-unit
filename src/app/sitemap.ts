import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industry`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industry/retail`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industry/healthcare`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industry/livestock`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industry/manufacturing`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industry/logistics`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/industry/facilities`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/partnerships`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/partnerships/strategic-partnerships`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/partnerships/system-integrators`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/partnerships/enterprise-collaboration`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
  ]
}
