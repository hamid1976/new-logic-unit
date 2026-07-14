/**
 * HubSpot Integration Utilities
 * Handles Form submissions to HubSpot Forms API v3 and Custom Event tracking.
 */

// Helper to retrieve the HubSpot Visitor Token (hubspotutk) cookie
const getHubspotUtk = (): string | undefined => {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(/hubspotutk=([^;]+)/);
  return match ? match[1] : undefined;
};

interface SubmitFormPayload {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  message: string;
  interest?: string;
  landing_page_url?: string;
  referrer_url?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  cta_source?: string;
  inquiry_page_type?: string;
}

/**
 * Submits contact form data to HubSpot Forms API.
 * Maps 'name' to 'firstname' and 'lastname', 'organization' to 'company',
 * and combines 'inquiryType' and 'message' into the 'message' field.
 */
export async function submitToHubspot(payload: SubmitFormPayload): Promise<{ success: boolean; error?: string }> {
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || '246175508';
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

  if (!formId) {
    console.warn('HubSpot Form ID (NEXT_PUBLIC_HUBSPOT_FORM_ID) is not configured.');
    return { success: false, error: 'HubSpot Form ID is not configured.' };
  }

  // Parse first and last name from name
  const nameParts = payload.name.trim().split(/\s+/);
  const firstname = nameParts[0] || '';
  const lastname = nameParts.slice(1).join(' ') || '';

  // Combine inquiryType and message for HubSpot's message field
  const formattedMessage = [
    `Inquiry Type: ${payload.inquiryType}`,
    payload.interest ? `Interested Product/Industry: ${payload.interest}` : null,
    payload.utm_source ? `UTM Source: ${payload.utm_source}` : null,
    payload.utm_medium ? `UTM Medium: ${payload.utm_medium}` : null,
    payload.utm_campaign ? `UTM Campaign: ${payload.utm_campaign}` : null,
    payload.cta_source ? `CTA Source: ${payload.cta_source}` : null,
    `Message:\n${payload.message}`
  ].filter(Boolean).join('\n\n');

  const fields = [
    { name: 'firstname', value: firstname },
    { name: 'lastname', value: lastname },
    { name: 'email', value: payload.email },
    { name: 'company', value: payload.organization },
    { name: 'message', value: formattedMessage }
  ];

  const hutk = getHubspotUtk();
  const context = {
    hutk,
    pageUri: typeof window !== 'undefined' ? window.location.href : '',
    pageName: typeof document !== 'undefined' ? document.title : ''
  };

  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields,
        context
      })
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'HubSpot submission failed');
    }

    return { success: true };
  } catch (err: any) {
    console.error('Error submitting to HubSpot:', err);
    return { success: false, error: err.message || 'Submission failed' };
  }
}

/**
 * Tracks a custom event in HubSpot.
 */
export function trackHubspotEvent(eventName: string): void {
  if (typeof window !== 'undefined') {
    window._hsq = window._hsq || [];
    window._hsq.push([
      'trackEvent',
      {
        id: eventName
      }
    ]);
  }
}

/**
 * Pushes custom events to the Google Tag Manager (GTM) dataLayer.
 */
export function trackGtmEvent(eventName: string, data?: Record<string, any>): void {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...data
    });
  }
}
