import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import '../styles/globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { SchemaOrg } from '@/components/ui/SchemaOrg'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-barlow-condensed',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://logicunit.co'),
  title: {
    default: 'Logic Unit — Operational Control for Distribution & Trading Businesses',
    template: '%s | Logic Unit',
  },
  description:
    'Logic Unit rebuilds the operational structure of distribution and trading businesses. IFS Business Partner. ERP implementation, inventory control, and operational transformation in Pakistan and UAE.',
  keywords: [
    'ERP for distribution Pakistan',
    'ERP consultant Karachi',
    'IFS ERP partner Pakistan',
    'operational transformation Pakistan',
    'inventory control system Pakistan',
    'distribution business ERP',
    'trading company ERP Pakistan',
    'ERP implementation UAE',
    'operational consulting Karachi',
    'stock management software Pakistan',
    'supply chain ERP Pakistan',
    'distribution ERP UAE',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://logicunit.co',
    siteName: 'Logic Unit',
    title: 'Logic Unit — Operational Control for Distribution & Trading Businesses',
    description:
      'IFS Business Partner. Enterprise ERP at Karachi Shipyard. Operational transformation for distribution and trading SMEs in Pakistan and UAE.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Logic Unit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Unit — Operational Control for Distribution & Trading Businesses',
    description: 'IFS Business Partner. ERP and operational transformation for distribution businesses in Pakistan and UAE.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://logicunit.co',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
      </head>
      <body>
        <SchemaOrg type="organization" />
        <SchemaOrg type="localBusiness" />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
