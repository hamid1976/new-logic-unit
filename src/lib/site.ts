export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.logic-unit.com'

export const logoPath = '/logic-unit-logo.png'
export const logoUrl = `${siteUrl}${logoPath}`
export const ogImagePath = '/og-image.png'
