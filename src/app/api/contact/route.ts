import { randomUUID } from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { submitLeadToHubSpot } from '@/lib/hubspot-server'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const normalize = (value: unknown, maxLength: number) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : ''

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[character] || character))

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const honeypot = normalize(body.website, 200)

    // Do not reveal honeypot behavior to automated submitters.
    if (honeypot) {
      return NextResponse.json({ success: true, ignored: true }, { status: 200 })
    }

    const lead = {
      leadId: randomUUID(),
      name: normalize(body.name, 120),
      email: normalize(body.email, 254).toLowerCase(),
      organization: normalize(body.organization, 160),
      inquiryType: normalize(body.inquiryType, 160),
      interest: normalize(body.interest, 200),
      message: normalize(body.message, 5000),
      landingPageUrl: normalize(body.landing_page_url, 1000),
      referrerUrl: normalize(body.referrer_url, 1000),
      utmSource: normalize(body.utm_source, 200),
      utmMedium: normalize(body.utm_medium, 200),
      utmCampaign: normalize(body.utm_campaign, 200),
      utmContent: normalize(body.utm_content, 200),
      ctaSource: normalize(body.cta_source, 200),
      inquiryPageType: normalize(body.inquiry_page_type, 200),
      hubspotUtk: normalize(body.hubspotutk, 200),
    }

    if (!lead.name || !lead.email || !lead.organization || !lead.inquiryType || !lead.message) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 })
    }

    if (!emailPattern.test(lead.email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
    }

    // HubSpot is the authoritative lead system. Do not show success unless it accepts the lead.
    await submitLeadToHubSpot(lead)

    let emailNotification: 'sent' | 'failed' | 'not_configured' = 'not_configured'
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const result = await resend.emails.send({
          from: process.env.CONTACT_FROM_EMAIL || 'Logic Unit Contact <onboarding@resend.dev>',
          to: process.env.CONTACT_TO_EMAIL || 'info@logic-unit.com',
          subject: `New Corporate Inquiry: ${lead.inquiryType} [${lead.leadId}]`,
          html: `
            <h2>New Corporate Inquiry</h2>
            <p><strong>Lead ID:</strong> ${escapeHtml(lead.leadId)}</p>
            <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
            <p><strong>Organization:</strong> ${escapeHtml(lead.organization)}</p>
            <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
            <p><strong>Inquiry type:</strong> ${escapeHtml(lead.inquiryType)}</p>
            <p><strong>Interest:</strong> ${escapeHtml(lead.interest || 'N/A')}</p>
            <h3>Message</h3>
            <p style="white-space:pre-wrap">${escapeHtml(lead.message)}</p>
            <h3>Attribution</h3>
            <p><strong>Landing page:</strong> ${escapeHtml(lead.landingPageUrl || 'N/A')}</p>
            <p><strong>Referrer:</strong> ${escapeHtml(lead.referrerUrl || 'N/A')}</p>
            <p><strong>UTM:</strong> ${escapeHtml([lead.utmSource, lead.utmMedium, lead.utmCampaign, lead.utmContent].filter(Boolean).join(' / ') || 'N/A')}</p>
            <p><strong>CTA source:</strong> ${escapeHtml(lead.ctaSource || 'N/A')}</p>
          `,
        })
        emailNotification = result.error ? 'failed' : 'sent'
        if (result.error) console.error('Secondary email notification failed:', result.error)
      } catch (error) {
        emailNotification = 'failed'
        console.error('Secondary email notification failed:', error)
      }
    }

    return NextResponse.json(
      { success: true, leadId: lead.leadId, emailNotification },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'We could not record your inquiry. Please try again.' },
      { status: 502 },
    )
  }
}
