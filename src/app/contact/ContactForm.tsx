'use client'

import { useState } from 'react'
import { Eyebrow } from '@/components/ui'

const qualifiers = [
  'Distribution or trading business',
  'Between 15 and 60 employees',
  'Owner or senior decision-maker',
  'Facing operational control challenges',
]

const systemOptions = [
  { value: 'excel-only', label: 'Excel only — no ERP system' },
  { value: 'erp-partial', label: 'ERP installed — partially used' },
  { value: 'erp-active', label: 'ERP active — but problems persist' },
  { value: 'mixed', label: 'Mixed — ERP plus Excel and WhatsApp' },
  { value: 'nothing', label: 'No formal system at all' },
]

const warehouseOptions = [
  { value: '1', label: '1 warehouse / location' },
  { value: '2-3', label: '2–3 warehouses' },
  { value: '4+', label: '4 or more warehouses' },
]

const challengeOptions = [
  'Stock accuracy and inventory control',
  'Purchase decisions and procurement',
  'Sales order and customer fulfilment',
  'Financial visibility and reporting',
  'Owner dependency and delegation',
  'Previous ERP that failed or was abandoned',
  'Scaling operations without more chaos',
  'Credit sales tracking and customer management',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    employees: '',
    warehouses: '',
    currentSystem: '',
    challenges: [] as string[],
    description: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const toggleChallenge = (challenge: string) => {
    setForm((prev) => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter((c) => c !== challenge)
        : [...prev.challenges, challenge],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    background: '#FDFCF9',
    border: '1px solid rgba(27, 45, 107, 0.10)',
    borderRadius: 0,
    fontFamily: 'var(--font-barlow), sans-serif',
    fontSize: '15px',
    color: '#1B2D6B',
    outline: 'none',
    transition: 'border-color 0.2s',
    appearance: 'none' as const,
  }

  const labelStyle = {
    fontFamily: 'var(--font-barlow-condensed), sans-serif',
    fontSize: '13px',
    fontWeight: 700 as const,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#1B2D6B',
    display: 'block',
    marginBottom: '10px',
  }

  return (
    <>
      {/* Header */}
      <section style={{ background: '#0F1A40' }} className="section-pad pb-20">
        <div className="content-container pt-[40px] md:pt-[60px]">
          <Eyebrow>Free operational audit</Eyebrow>
          <h1
            style={{
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontSize: '56px',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#F0EEE8',
              lineHeight: '1.05',
              maxWidth: '640px',
              marginBottom: '24px',
            }}
          >
            START WITH A 30-MINUTE OPERATIONAL AUDIT.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-barlow), sans-serif',
              fontSize: '18px',
              color: '#8A94B0',
              fontWeight: 300,
              lineHeight: '1.75',
              maxWidth: '600px',
            }}
          >
            No deck. No proposal. No sales pitch. A direct conversation about
            where your operations are breaking down and what a structured fix
            would actually involve.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ background: '#F4F2EC' }} className="section-pad">
        <div
          className="content-container contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 400px',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  padding: '56px 48px',
                  background: '#FDFCF9',
                  border: '1px solid rgba(27, 45, 107, 0.10)',
                  borderLeft: '4px solid #6BB52E',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-barlow-condensed), sans-serif',
                    fontSize: '32px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: '#0F1A40',
                    marginBottom: '20px',
                    lineHeight: '1.2',
                  }}
                >
                  We have received your request.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-barlow), sans-serif',
                    fontSize: '16px',
                    color: '#8A94B0',
                    lineHeight: '1.7',
                    fontWeight: 300,
                    marginBottom: '16px',
                  }}
                >
                  Aamir reviews every submission personally. If your business
                  fits the profile we work with, you will hear back within one
                  business day to schedule the audit call.
                </p>
                <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '15px', fontWeight: 500, color: '#1B2D6B' }}>
                  If we do not think we are the right fit, we will tell you that
                  directly too.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
              >
                {/* Name + Company */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '24px',
                  }}
                  className="form-two-col"
                >
                  <div>
                    <label htmlFor="name" style={labelStyle}>
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" style={labelStyle}>
                      Company name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="you@company.com"
                  />
                </div>

                {/* Employees + Warehouses */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '24px',
                  }}
                  className="form-two-col"
                >
                  <div>
                    <label htmlFor="employees" style={labelStyle}>
                      Number of employees
                    </label>
                    <select
                      id="employees"
                      name="employees"
                      required
                      value={form.employees}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="">Select range</option>
                      <option value="10-20">10–20 employees</option>
                      <option value="21-40">21–40 employees</option>
                      <option value="41-60">41–60 employees</option>
                      <option value="61-80">61–80 employees</option>
                      <option value="80+">80+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="warehouses" style={labelStyle}>
                      Number of warehouses
                    </label>
                    <select
                      id="warehouses"
                      name="warehouses"
                      required
                      value={form.warehouses}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="">Select</option>
                      {warehouseOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Current Systems */}
                <div>
                  <label htmlFor="currentSystem" style={labelStyle}>
                    Current systems
                  </label>
                  <select
                    id="currentSystem"
                    name="currentSystem"
                    required
                    value={form.currentSystem}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="">How do you currently manage operations?</option>
                    {systemOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Challenges — multi select */}
                <div>
                  <label style={labelStyle}>
                    Main operational challenges
                    <span
                      style={{
                        fontFamily: 'var(--font-barlow), sans-serif',
                        fontSize: '12px',
                        color: 'rgba(138, 148, 176, 0.7)',
                        fontWeight: 300,
                        letterSpacing: 0,
                        textTransform: 'none',
                        marginLeft: '12px',
                      }}
                    >
                      Select all that apply
                    </span>
                  </label>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                      gap: '1px',
                      background: 'rgba(27, 45, 107, 0.10)',
                    }}
                    className="form-two-col"
                  >
                    {challengeOptions.map((challenge) => {
                      const selected = form.challenges.includes(challenge)
                      return (
                        <button
                          key={challenge}
                          type="button"
                          onClick={() => toggleChallenge(challenge)}
                          style={{
                            padding: '16px 20px',
                            background: selected ? '#0F1A40' : '#FDFCF9',
                            border: 'none',
                            cursor: 'pointer',
                            textAlign: 'left',
                            fontFamily: 'var(--font-barlow), sans-serif',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: selected ? '#F0EEE8' : '#8A94B0',
                            transition: 'all 0.15s',
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'start',
                            lineHeight: '1.4',
                          }}
                        >
                          <span
                            style={{
                              width: '16px',
                              height: '16px',
                              border: '1px solid ' + (selected ? '#6BB52E' : 'rgba(27, 45, 107, 0.20)'),
                              background: selected ? '#6BB52E' : 'transparent',
                              flexShrink: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '10px',
                              color: '#0F1A40',
                              marginTop: '2px',
                            }}
                          >
                            {selected ? '✓' : ''}
                          </span>
                          {challenge}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" style={labelStyle}>
                    Describe your situation
                    <span
                      style={{
                        fontFamily: 'var(--font-barlow), sans-serif',
                        fontSize: '12px',
                        color: 'rgba(138, 148, 176, 0.7)',
                        fontWeight: 300,
                        letterSpacing: 0,
                        textTransform: 'none',
                        marginLeft: '12px',
                      }}
                    >
                      Optional but helpful
                    </span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={form.description}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }}
                    placeholder="What is the specific problem you are trying to solve? The more specific you are, the more useful the audit call will be."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      padding: '24px 32px',
                    }}
                  >
                    BOOK YOUR OPERATIONAL AUDIT →
                  </button>
                  <p
                    style={{
                      fontFamily: 'var(--font-barlow), sans-serif',
                      fontSize: '13px',
                      color: 'rgba(138, 148, 176, 0.7)',
                      fontWeight: 500,
                      marginTop: '16px',
                      textAlign: 'center',
                      lineHeight: '1.5',
                    }}
                  >
                    Aamir reviews every submission personally. You will hear
                    back within one business day.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div
              style={{
                background: '#FDFCF9',
                border: '1px solid rgba(27, 45, 107, 0.10)',
                padding: '40px 32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: '#6BB52E',
                  marginBottom: '24px',
                }}
              >
                What to expect
              </p>
              {[
                { label: 'Duration', value: '30 minutes, video or phone' },
                { label: 'Format', value: 'Direct conversation, no presentation' },
                { label: 'Output', value: 'Honest assessment of your situation' },
                { label: 'Cost', value: 'No charge' },
                {
                  label: 'Next step',
                  value: 'A proposal only if you ask for one',
                },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '16px 0',
                    borderBottom: i === arr.length - 1 ? 'none' : '1px solid rgba(27, 45, 107, 0.10)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '14px', color: '#8A94B0', fontWeight: 300 }}>
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-barlow), sans-serif',
                      fontSize: '14px',
                      color: '#1B2D6B',
                      fontWeight: 500,
                      textAlign: 'right',
                      maxWidth: '180px',
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                background: '#FDFCF9',
                border: '1px solid rgba(27, 45, 107, 0.10)',
                padding: '40px 32px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: '#6BB52E',
                  marginBottom: '24px',
                }}
              >
                This audit is for you if
              </p>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                {qualifiers.map((q) => (
                  <div
                    key={q}
                    style={{ display: 'flex', gap: '16px', alignItems: 'start' }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '2px',
                        background: '#6BB52E',
                        marginTop: '9px',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-barlow), sans-serif',
                        fontSize: '15px',
                        color: '#1B2D6B',
                        fontWeight: 500,
                        lineHeight: '1.6',
                      }}
                    >
                      {q}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contact */}
            <div
              style={{
                background: '#0F1A40',
                padding: '32px',
                borderLeft: '4px solid #6BB52E',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: '#6BB52E',
                  marginBottom: '16px',
                }}
              >
                Prefer to reach Aamir directly
              </p>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <a
                  href="mailto:aamir.khan@logic-unit.com"
                  style={{
                    fontFamily: 'var(--font-barlow), sans-serif',
                    fontSize: '15px',
                    color: '#F0EEE8',
                    textDecoration: 'none',
                    fontWeight: 300,
                  }}
                >
                  aamir.khan@logic-unit.com
                </a>
                <a
                  href="https://wa.me/923462765118"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-barlow), sans-serif',
                    fontSize: '15px',
                    color: '#6BB52E',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  WhatsApp: +92 346 2765118 →
                </a>
              </div>
            </div>

            <blockquote
              style={{
                fontFamily: 'var(--font-barlow), sans-serif',
                fontSize: '18px',
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#1B2D6B',
                borderLeft: '3px solid #6BB52E',
                paddingLeft: '24px',
                lineHeight: '1.65',
              }}
            >
              "If what we hear in 30 minutes does not suggest a clear path
              forward, we will tell you that directly."
            </blockquote>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
        input:focus, textarea:focus, select:focus {
          border-color: #6BB52E !important;
          outline: none !important;
        }
      ` }} />
    </>
  )
}
