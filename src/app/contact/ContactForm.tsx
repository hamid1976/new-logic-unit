'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { trackGtmEvent } from '@/lib/hubspot'
import { isTrackableLeadResult } from '@/lib/lead-analytics'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

const inquiryTypes = [
  'Product ecosystem inquiry',
  'HULM POS inquiry',
  'Titan CMMS inquiry',
  'AnimalCare360 / livestock platform inquiry',
  'Hospitello inquiry',
  'Bike Tour Pro inquiry',
  'AnalyzeQuran inquiry',
  'MFCC inquiry',
  'Strategic SaaS partnership',
  'System integrator relationship',
  'Enterprise collaboration',
  'Case study or portfolio discussion',
]

export default function ContactForm() {
  const router = useRouter()
  const [submitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [tracking, setTracking] = useState({
    landing_page_url: '',
    referrer_url: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    cta_source: '',
    inquiry_page_type: '',
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      setTracking({
        landing_page_url: window.location.href,
        referrer_url: document.referrer || '',
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_content: params.get('utm_content') || '',
        cta_source: params.get('cta') || '',
        inquiry_page_type: params.get('page_type') || '',
      })
    }
  }, [])

  const fieldClass =
    'w-full border border-[rgba(16,39,122,0.18)] bg-white px-4 py-3 text-[#071330] outline-none transition focus:border-[#10277a] disabled:bg-slate-50 disabled:text-slate-500'
  const labelClass = 'mb-2 block text-sm font-semibold text-slate-700'

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: formData.get('name') as string,
      organization: formData.get('organization') as string,
      email: formData.get('email') as string,
      inquiryType: formData.get('inquiryType') as string,
      interest: formData.get('interest') as string,
      message: formData.get('message') as string,
      website: formData.get('website') as string,
      ...tracking,
    }

    try {
      // 1. Submit to local API for Resend email forwarding
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.')
      }

      // Count only a lead accepted by HubSpot; neutral honeypot responses are ignored.
      if (isTrackableLeadResult(result)) {
        trackGtmEvent('generate_lead', {
          form_name: 'contact',
          inquiry_type: payload.inquiryType,
          lead_id: result.leadId,
        })
      }
      router.push('/thank-you')
    } catch (err: any) {
      setError(err.message || 'Failed to send inquiry. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs />
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl mt-6">
            Contact Logic Unit
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Talk to Logic Unit about product ecosystem inquiries, strategic SaaS partnerships, system integrator relationships, enterprise collaboration, investor relations, talent conversations, or software platforms for real industry operations.
          </p>
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_0.75fr]">
          <div className="lu-card p-8">
            {submitted ? (
              <div>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight">Inquiry received.</h2>
                <p className="leading-7 text-slate-600">
                  Thank you. The Logic Unit team will review your message and respond through the appropriate corporate channel.
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#071330] mb-4">
                  Choose The Right Conversation
                </h2>
                <p className="text-slate-600 mb-6 leading-7">
                  Logic Unit receives inquiries across product ecosystem discussions, strategic SaaS partnerships, system integrator relationships, enterprise collaboration, investor relations, talent conversations, and case study discussions. Use the inquiry type dropdown to help the team route your message to the right person. After submission, the Logic Unit team will review your inquiry and route it based on product, partnership, enterprise, or portfolio relevance.
                </p>
                <div className="bg-[#fbfaf6] border border-[rgba(16,39,122,0.1)] p-6 text-sm text-slate-600 mb-8 space-y-4 leading-relaxed">
                  <div>
                    <strong className="block text-[#10277a] text-xs uppercase tracking-wider mb-1">Product Ecosystem Inquiries</strong>
                    <p className="text-xs text-slate-500">
                      For questions about HULM POS, Titan CMMS, AnimalCare360, Hospitello, Bike Tour Pro, AnalyzeQuran, MFCC, or Logic Unit's wider product ecosystem, please include the product name and your operating context. For AnimalCare360 product usage, pricing, app download, cattle management, feed retail, animal trading, pet hospital, or veterinary clinic workflows, visit AnimalCare360.com or mention AnimalCare360 in your inquiry.
                    </p>
                  </div>
                  <div>
                    <strong className="block text-[#10277a] text-xs uppercase tracking-wider mb-1">Partnership Inquiries</strong>
                    <p className="text-xs text-slate-500">
                      For strategic SaaS partnerships, system integrator relationships, or enterprise collaboration, include your organization, market, partnership idea, and the platform or industry area you want to discuss.
                    </p>
                  </div>
                  <div>
                    <strong className="block text-[#10277a] text-xs uppercase tracking-wider mb-1">Case Study Or Portfolio Discussions</strong>
                    <p className="text-xs text-slate-500">
                      If you want to discuss a case study, mention the relevant area: logistics, healthcare, retail, government platforms, fintech, ERP, augmented reality, livestock, or operational infrastructure SaaS.
                    </p>
                  </div>
                </div>
                <form
                  className="grid gap-6"
                  onSubmit={handleSubmit}
                >
                  <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
                    <label htmlFor="website">Website</label>
                    <input autoComplete="off" id="website" name="website" tabIndex={-1} type="text" />
                  </div>
                  <input type="hidden" name="landing_page_url" value={tracking.landing_page_url} />
                  <input type="hidden" name="referrer_url" value={tracking.referrer_url} />
                  <input type="hidden" name="utm_source" value={tracking.utm_source} />
                  <input type="hidden" name="utm_medium" value={tracking.utm_medium} />
                  <input type="hidden" name="utm_campaign" value={tracking.utm_campaign} />
                  <input type="hidden" name="utm_content" value={tracking.utm_content} />
                  <input type="hidden" name="cta_source" value={tracking.cta_source} />
                  <input type="hidden" name="inquiry_page_type" value={tracking.inquiry_page_type} />
                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="name">Name</label>
                      <input className={fieldClass} id="name" name="name" required type="text" disabled={isSubmitting} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="organization">Organization</label>
                      <input className={fieldClass} id="organization" name="organization" required type="text" disabled={isSubmitting} />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <label className={labelClass} htmlFor="email">Email</label>
                      <input className={fieldClass} id="email" name="email" required type="email" disabled={isSubmitting} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="inquiryType">Inquiry type</label>
                      <select className={fieldClass} id="inquiryType" name="inquiryType" required defaultValue="" disabled={isSubmitting}>
                        <option value="" disabled>Select one</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="interest">Interested product or industry</label>
                      <input className={fieldClass} id="interest" name="interest" placeholder="e.g. Retail POS, Livestock" type="text" disabled={isSubmitting} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="message">Message</label>
                    <textarea className={fieldClass} id="message" name="message" required rows={6} disabled={isSubmitting} />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <button
                      className="bg-[#10277a] px-6 py-3 text-sm font-bold text-white hover:bg-[#071330] disabled:opacity-50 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Corporate Inquiry'}
                    </button>
                    <Link href="/partnerships" className="text-sm font-semibold text-[#10277a] hover:underline text-center sm:text-left no-underline">
                      Back to Partnerships
                    </Link>
                  </div>
                  <p className="text-xs leading-5 text-slate-500">
                    Your inquiry is sent to Logic Unit&apos;s HubSpot CRM for follow-up. Email is used only as a secondary team notification.
                  </p>
                </form>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            {[
              { title: 'Strategic Partnerships', body: 'Market expansion, product ecosystem collaboration, and long-term industry digitization.', href: '/partnerships/strategic-partnerships' },
              { title: 'System Integrators', body: 'Implementation, deployment, and integration relationships across operational industries.', href: '/partnerships/system-integrators' },
              { title: 'Enterprise Collaboration', body: 'Platform partnerships and digital infrastructure collaboration.', href: '/partnerships/enterprise-collaboration' },
            ].map((card) => (
              <Link key={card.title} href={card.href} className="lu-card p-6 block no-underline hover:border-[#10277a] transition-colors">
                <h2 className="mb-3 text-xl font-semibold text-[#10277a]">{card.title}</h2>
                <p className="leading-7 text-slate-600">{card.body}</p>
              </Link>
            ))}
          </aside>
        </div>
      </section>
    </main>
  )
}
