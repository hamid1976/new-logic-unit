import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import Script from 'next/script'
import '../styles/globals.css'
import { SchemaOrg } from '@/components/ui/SchemaOrg'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ogImagePath, siteUrl } from '@/lib/site'

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
  title: {
    default: 'SaaS Operating & Product Engineering Company',
    template: '%s | Logic Unit',
  },
  description:
    'As product engineering company Logic Unit builds and operates industry-specific SaaS for retail, healthcare, livestock, manufacturing & more!',
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
    description:
      'As product engineering company Logic Unit builds and operates industry-specific SaaS for retail, healthcare, livestock, manufacturing & more!',
    images: [{ url: ogImagePath, width: 1200, height: 630, alt: 'Logic Unit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Operating & Product Engineering Company',
    description:
      'As product engineering company Logic Unit builds and operates industry-specific SaaS for retail, healthcare, livestock, manufacturing & more!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
      </head>
      <body className="relative">
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

        <SchemaOrg />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
