import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://logicunit.co'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/industry`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/case-studies/candle-threads`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/case-studies/karachi-shipyard`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.9 },
  ]
}
