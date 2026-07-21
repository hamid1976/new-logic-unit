const hasTrackingConsent = () =>
  typeof window !== 'undefined' &&
  window.localStorage.getItem('logic-unit-nonessential-consent') === 'accepted'

/** Queue a HubSpot tracking event when consent-controlled tracking is available. */
export function trackHubspotEvent(eventName: string): void {
  if (hasTrackingConsent()) {
    window._hsq = window._hsq || []
    window._hsq.push(['trackEvent', { id: eventName }])
  }
}

/** Push a consent-controlled event to the GTM data layer. */
export function trackGtmEvent(eventName: string, data?: Record<string, unknown>): void {
  if (hasTrackingConsent()) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: eventName, ...data })
  }
}
