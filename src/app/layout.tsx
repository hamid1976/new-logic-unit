import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'
import { SchemaOrg } from '@/components/ui/SchemaOrg'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { siteUrl } from '@/lib/site'
import ConsentManager from '@/components/ConsentManager'

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
  metadataBase: new URL(siteUrl),
  title: 'SaaS Operating & Product Engineering Company',
  description: 'A SaaS operating & product engineering company founded in 2013.',
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
    url: siteUrl,
    siteName: 'Logic Unit',
    title: 'SaaS Operating & Product Engineering Company',
    description: 'A SaaS operating & product engineering company founded in 2013.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Logic Unit — Product engineering and SaaS operating company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Operating & Product Engineering Company',
    description: 'A SaaS operating & product engineering company founded in 2013.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            window.gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              personalization_storage: 'denied',
              functionality_storage: 'granted',
              security_storage: 'granted',
              wait_for_update: 500
            });
          `}
        </Script>
      </head>
      <body className="relative">
        <ConsentManager />
        <SchemaOrg />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
