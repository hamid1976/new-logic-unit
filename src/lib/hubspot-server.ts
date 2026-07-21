interface HubSpotLeadPayload {
  leadId: string
  name: string
  email: string
  organization: string
  inquiryType: string
  message: string
  interest?: string
  landingPageUrl?: string
  referrerUrl?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  ctaSource?: string
  inquiryPageType?: string
  hubspotUtk?: string
}

export async function submitLeadToHubSpot(payload: HubSpotLeadPayload) {
  const portalId = process.env.HUBSPOT_PORTAL_ID || process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
  const formId = process.env.HUBSPOT_FORM_ID || process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID

  if (!portalId || !formId) {
    throw new Error('HubSpot form configuration is unavailable.')
  }

  const nameParts = payload.name.trim().split(/\s+/)
  const formattedMessage = [
    `Lead ID: ${payload.leadId}`,
    `Inquiry Type: ${payload.inquiryType}`,
    payload.interest ? `Interested Product/Industry: ${payload.interest}` : null,
    payload.utmSource ? `UTM Source: ${payload.utmSource}` : null,
    payload.utmMedium ? `UTM Medium: ${payload.utmMedium}` : null,
    payload.utmCampaign ? `UTM Campaign: ${payload.utmCampaign}` : null,
    payload.utmContent ? `UTM Content: ${payload.utmContent}` : null,
    payload.ctaSource ? `CTA Source: ${payload.ctaSource}` : null,
    payload.inquiryPageType ? `Inquiry Page Type: ${payload.inquiryPageType}` : null,
    `Message:\n${payload.message}`,
  ].filter(Boolean).join('\n\n')

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: nameParts[0] || '' },
          { name: 'lastname', value: nameParts.slice(1).join(' ') },
          { name: 'email', value: payload.email },
          { name: 'company', value: payload.organization },
          { name: 'message', value: formattedMessage },
          { name: 'lu_name', value: payload.name },
          { name: 'lu_organization', value: payload.organization },
          { name: 'lu_email', value: payload.email },
          { name: 'lu_inquiry_type', value: payload.inquiryType },
          { name: 'lu_interest', value: payload.interest || '' },
          { name: 'lu_message', value: payload.message },
          { name: 'lu_landing_page_url', value: payload.landingPageUrl || '' },
          { name: 'lu_referrer_url', value: payload.referrerUrl || '' },
          { name: 'lu_utm_source', value: payload.utmSource || '' },
          { name: 'lu_utm_medium', value: payload.utmMedium || '' },
          { name: 'lu_utm_campaign', value: payload.utmCampaign || '' },
          { name: 'lu_utm_content', value: payload.utmContent || '' },
        ],
        context: {
          hutk: payload.hubspotUtk || undefined,
          pageUri: payload.landingPageUrl || undefined,
          pageName: 'Logic Unit contact form',
        },
      }),
      cache: 'no-store',
    },
  )

  const result = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(result.message || 'HubSpot rejected the lead submission.')
  }

  return result
}
