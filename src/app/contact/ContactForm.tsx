'use client'

import { useState } from 'react'
import Link from 'next/link'

const inquiryTypes = [
  'Strategic partnership',
  'System integrator relationship',
  'Enterprise collaboration',
  'Investor relations',
  'Talent conversation',
  'General corporate inquiry',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const fieldClass =
    'w-full border border-[rgba(16,39,122,0.18)] bg-white px-4 py-3 text-[#071330] outline-none transition focus:border-[#10277a]'
  const labelClass = 'mb-2 block text-sm font-semibold text-slate-700'

  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#111827]">
      <section className="lu-shell relative overflow-hidden px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">Contact</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Corporate inquiries for the Logic Unit ecosystem.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Use this channel for partnerships, enterprise collaboration, investor relations, system integrator conversations, and talent inquiries.
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
                  Send a corporate inquiry.
                </h2>
                <p className="text-slate-600 mb-8 leading-7">
                  Share your inquiry type, organization, and message so the Logic Unit team can route the conversation appropriately.
                </p>
                <form
                  className="grid gap-6"
                  onSubmit={(event) => {
                    event.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="name">Name</label>
                      <input className={fieldClass} id="name" name="name" required type="text" />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="organization">Organization</label>
                      <input className={fieldClass} id="organization" name="organization" required type="text" />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="email">Email</label>
                      <input className={fieldClass} id="email" name="email" required type="email" />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="inquiryType">Inquiry type</label>
                      <select className={fieldClass} id="inquiryType" name="inquiryType" required defaultValue="">
                        <option value="" disabled>Select one</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="message">Message</label>
                    <textarea className={fieldClass} id="message" name="message" required rows={6} />
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <button className="bg-[#10277a] px-6 py-3 text-sm font-bold text-white hover:bg-[#071330]" type="submit">
                      Send Corporate Inquiry
                    </button>
                    <Link href="/partnerships" className="text-sm font-semibold text-[#10277a] hover:underline text-center sm:text-left no-underline">
                      Back to Partnerships
                    </Link>
                  </div>
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
