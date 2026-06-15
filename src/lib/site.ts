const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://logic-unit.com'
export const siteUrl = rawUrl.replace(/\/$/, '').replace('://www.', '://')

export const logoPath = '/logic-unit-logo.png'
export const logoUrl = `${siteUrl}${logoPath}`
export const ogImagePath = '/og-image.png'
