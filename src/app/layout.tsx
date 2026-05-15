import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import '../styles/globals.css'
import { SchemaOrg } from '@/components/ui/SchemaOrg'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

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
    default: 'Logic Unit | Product Engineering & SaaS Operating Company',
    template: '%s | Logic Unit',
  },
  description:
    'Logic Unit builds and operates industry-specific SaaS platforms for retail, healthcare, livestock, manufacturing, logistics, and facilities across emerging markets.',
  keywords: [
    'product engineering company',
    'SaaS operating company',
    'industry-specific SaaS platforms',
    'software platforms for real industries',
    'SaaS ecosystem company',
    'emerging market digital infrastructure',
    'multi-industry software platforms',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://logicunit.co',
    siteName: 'Logic Unit',
    title: 'Logic Unit | Product Engineering & SaaS Operating Company',
    description:
      'Logic Unit builds and operates software platforms that run real industries.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Logic Unit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Unit | Product Engineering & SaaS Operating Company',
    description: 'Logic Unit builds and operates software platforms that run real industries.',
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
      <body className="relative">
        <SchemaOrg type="organization" />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
