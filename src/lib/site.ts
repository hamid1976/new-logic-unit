export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://new-logic-unit.vercel.app'

export const logoPath = '/logic-unit-logo.png'
export const logoUrl = `${siteUrl}${logoPath}`
export const ogImagePath = '/og-image.png'
