'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import HubSpotProvider from '@/components/HubSpotProvider'

const CONSENT_KEY = 'logic-unit-nonessential-consent'
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-N7BGVDFD'

type ConsentChoice = 'accepted' | 'declined' | null

const updateGoogleConsent = (analyticsStorage: 'granted' | 'denied') => {
  window.gtag?.('consent', 'update', {
    analytics_storage: analyticsStorage,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    personalization_storage: 'denied',
  })
}

export default function ConsentManager() {
  const [choice, setChoice] = useState<ConsentChoice>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
      if (!window.sessionStorage.getItem('lu_landing_page_url')) {
        window.sessionStorage.setItem('lu_landing_page_url', window.location.href)
      }
      if (!window.sessionStorage.getItem('lu_referrer_url')) {
        window.sessionStorage.setItem('lu_referrer_url', document.referrer || '')
      }
    }

    const storedChoice = window.localStorage.getItem(CONSENT_KEY)
    if (storedChoice === 'accepted' || storedChoice === 'declined') {
      updateGoogleConsent(storedChoice === 'accepted' ? 'granted' : 'denied')
      setChoice(storedChoice)
      return
    }
    setIsOpen(true)
  }, [])

  const saveChoice = (nextChoice: Exclude<ConsentChoice, null>) => {
    window.localStorage.setItem(CONSENT_KEY, nextChoice)
    updateGoogleConsent(nextChoice === 'accepted' ? 'granted' : 'denied')
    if (choice === 'accepted' && nextChoice === 'declined') {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'logic_unit_consent_revoked',
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })
      window.location.reload()
      return
    }
    setChoice(nextChoice)
    setIsOpen(false)
  }

  const reopenChoices = () => setIsOpen(true)

  return (
    <>
      {choice === 'accepted' && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({event:'logic_unit_consent_granted',analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
          <HubSpotProvider />
        </>
      )}

      {isOpen ? (
        <section
          aria-label="Privacy choices"
          aria-live="polite"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl border border-slate-200 bg-white p-5 shadow-2xl md:flex md:items-center md:justify-between md:gap-6"
          role="dialog"
        >
          <div>
            <h2 className="text-lg font-bold text-[#071330]">Privacy choices</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Logic Unit uses optional analytics and CRM tracking to understand website use. You can accept or reject nonessential tracking. Contact-form submissions are still sent to HubSpot when you ask us to respond.
            </p>
          </div>
          <div className="mt-4 flex shrink-0 flex-wrap gap-3 md:mt-0">
            <button
              className="border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-500"
              onClick={() => saveChoice('declined')}
              type="button"
            >
              Reject nonessential
            </button>
            <button
              className="bg-[#10277a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#071330]"
              onClick={() => saveChoice('accepted')}
              type="button"
            >
              Accept
            </button>
          </div>
        </section>
      ) : (
        <button
          className="fixed bottom-3 left-3 z-[90] border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-md"
          onClick={reopenChoices}
          type="button"
        >
          Privacy choices
        </button>
      )}
    </>
  )
}
