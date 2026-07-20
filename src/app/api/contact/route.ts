import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with key or fallback for validation
const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key_for_build')

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      organization,
      inquiryType,
      message,
      landing_page_url,
      referrer_url,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      cta_source,
      inquiry_page_type
    } = await req.json()

    // Validate inputs
    if (!name || !email || !organization || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    // Fallback if API key is not configured (e.g. local build or environment setup)
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY is not defined. Simulating email send.')
      return NextResponse.json(
        { success: true, message: 'Simulated email sent successfully.' },
        { status: 200 }
      )
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Logic Unit Contact <onboarding@resend.dev>', // Default sender for Resend free tier/onboarding
      to: 'info@logic-unit.com',
      subject: `New Corporate Inquiry: ${inquiryType}`,
      html: `
        <h2 style="color: #071330; font-family: sans-serif;">New Corporate Inquiry Received</h2>
        <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 14px; color: #111827;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Organization:</td>
            <td style="padding: 8px 0;">${organization}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Inquiry Type:</td>
            <td style="padding: 8px 0;">${inquiryType}</td>
          </tr>
        </table>
        <h3 style="color: #071330; font-family: sans-serif; margin-top: 24px;">Message:</h3>
        <div style="white-space: pre-wrap; background: #fbfaf6; border-left: 4px solid #10277a; padding: 16px; font-family: sans-serif; font-size: 14px; color: #111827; line-height: 1.6; margin-bottom: 24px;">${message}</div>
        
        <h3 style="color: #071330; font-family: sans-serif; margin-top: 24px; border-top: 1px solid #e5e7eb; padding-top: 16px;">Tracking Metadata</h3>
        <table style="width: 100%; border-collapse: collapse; font-family: sans-serif; font-size: 12px; color: #4b5563;">
          <tr>
            <td style="padding: 4px 0; font-weight: bold; width: 150px;">Landing Page URL:</td>
            <td style="padding: 4px 0;">${landing_page_url || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; font-weight: bold;">Referrer URL:</td>
            <td style="padding: 4px 0;">${referrer_url || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; font-weight: bold;">UTM Source:</td>
            <td style="padding: 4px 0;">${utm_source || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; font-weight: bold;">UTM Medium:</td>
            <td style="padding: 4px 0;">${utm_medium || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; font-weight: bold;">UTM Campaign:</td>
            <td style="padding: 4px 0;">${utm_campaign || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; font-weight: bold;">UTM Content:</td>
            <td style="padding: 4px 0;">${utm_content || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; font-weight: bold;">CTA Source:</td>
            <td style="padding: 4px 0;">${cta_source || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; font-weight: bold;">Inquiry Page Type:</td>
            <td style="padding: 4px 0;">${inquiry_page_type || 'N/A'}</td>
          </tr>
        </table>
      `,
    })

    if (data.error) {
      console.error('Resend API Error:', data.error)
      return NextResponse.json(
        { error: data.error.message || 'Failed to send email.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, id: data.data?.id },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error.' },
      { status: 500 }
    )
  }
}
