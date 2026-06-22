'use client';

import Script from 'next/script';
import HubSpotPageTracker from './HubSpotPageTracker';

/**
 * HubSpotProvider component
 * Loads the HubSpot tracking script and initializes SPA page view tracking.
 * Placed in the root layout to load on all pages.
 */
export default function HubSpotProvider() {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '246175508';

  return (
    <>
      <Script
        id="hs-script-loader"
        strategy="afterInteractive"
        src={`//js-na2.hs-scripts.com/${portalId}.js`}
      />
      <HubSpotPageTracker />
    </>
  );
}
