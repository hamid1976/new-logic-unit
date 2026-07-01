import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'
import { SchemaOrg } from '@/components/ui/SchemaOrg'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ogImagePath, siteUrl } from '@/lib/site'
import HubSpotProvider from '@/components/HubSpotProvider'

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
    images: [{ url: ogImagePath, width: 1200, height: 630, alt: 'Logic Unit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Operating & Product Engineering Company',
    description: 'A SaaS operating & product engineering company founded in 2013.',
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
      </head>
      <body className="relative">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N7BGVDFD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N7BGVDFD');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wtmr1y1fq7");
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H2G5X82RJM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H2G5X82RJM');
          `}
        </Script>

        <HubSpotProvider />
        <SchemaOrg />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
