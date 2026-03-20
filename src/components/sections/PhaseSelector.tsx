'use client'

import { useState } from 'react'
import { Deliverable } from '@/components/ui'

const phases = [
  {
    number: '01',
    name: 'Operational Diagnosis',
    timing: 'Weeks 1–3',
    title: 'We map how your business actually runs',
    body: 'Not how the org chart says it runs. Not how it performs at its best. How it runs on a normal Tuesday — where decisions get made, where information breaks down, where your team works around the system instead of through it. Most clients tell us this phase alone surfaces problems they had stopped being able to see.',
    deliverable: 'Operational map with annotated breakdown points and root cause analysis',
  },
  {
    number: '02',
    name: 'Structural Redesign',
    timing: 'Weeks 4–6',
    title: 'We redesign the operating model',
    body: 'Process flows, decision rights, information architecture, roles and handoffs. This is the work that makes everything else hold. A system built on a redesigned structure gets used. A system built on the old structure becomes another workaround. We do this with your team — not for them.',
    deliverable: 'Redesigned operating model with process documentation and system requirements',
  },
  {
    number: '03',
    name: 'System Implementation',
    timing: 'Weeks 7–14',
    title: 'We build the system that fits the redesign',
    body: 'ERP configuration, data architecture, reporting structure, integrations — and where appropriate, AI-assisted decision tools embedded into operational workflows. Every configuration decision is made against the redesigned operating model. Not the legacy one.',
    deliverable: 'Configured, tested operational system ready for phased go-live',
  },
  {
    number: '04',
    name: 'Adoption & Stabilisation',
    timing: 'Weeks 15–20',
    title: 'We stay until adoption is real',
    body: 'Go-live is not the finish line. It is the beginning of the hardest phase — changing operational behavior at team level. We remain involved through stabilisation, available daily during critical periods. We do not declare success when the system is technically live. We declare success when it is running the business.',
    deliverable: 'Stable adoption across functions + 6-month control review included',
  },
  {
    number: '05',
    name: 'Ongoing Partnership',
    timing: 'Post Go-Live',
    title: 'We stay to govern the operation',
    body: 'System drift happens when control is handed back without governance. The business evolves, new edge cases appear, and workarounds creep back in. We remain as active operational partners, ensuring the system and structure adapt to changing business demands.',
    deliverable: 'Quarterly operational reviews, continuous system alignment, and process governance',
  },
]

export function PhaseSelector() {
  const [active, setActive] = useState(0)
  const phase = phases[active]

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: '0',
        background: '#FDFCF9',
        border: '1px solid rgba(27, 45, 107, 0.10)',
      }}
      className="phase-layout"
    >
      {/* Tab nav */}
      <div style={{ borderRight: '1px solid rgba(27, 45, 107, 0.10)', background: '#F4F2EC' }}>
        {phases.map((p, i) => (
          <button
            key={p.number}
            onClick={() => setActive(i)}
            style={{
              width: '100%',
              padding: '24px',
              background: active === i ? '#EDEAE2' : 'transparent',
              border: 'none',
              borderBottom: i < phases.length - 1 ? '1px solid rgba(27, 45, 107, 0.10)' : 'none',
              borderLeft: active === i ? '4px solid #6BB52E' : '4px solid transparent',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'background 0.2s',
            }}
            aria-selected={active === i}
          >
            <p
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#6BB52E',
                marginBottom: '4px',
              }}
            >
              PHASE {p.number}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-barlow), sans-serif',
                fontSize: '13px',
                fontWeight: active === i ? 500 : 300,
                color: active === i ? '#1B2D6B' : '#8A94B0',
              }}
            >
              {p.name}
            </p>
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div style={{ padding: '48px 56px', background: '#FDFCF9' }} key={active}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#6BB52E',
            border: '1px solid #6BB52E',
            padding: '6px 14px',
            marginBottom: '32px',
          }}
        >
          {phase.timing}
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '30px',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#1B2D6B',
            marginBottom: '24px',
            lineHeight: '1.2',
          }}
        >
          {phase.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-barlow), sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            color: '#8A94B0',
            lineHeight: '1.9',
            marginBottom: '40px',
            maxWidth: '600px',
          }}
        >
          {phase.body}
        </p>
        
        <div style={{ background: '#E8E5DD', borderLeft: '3px solid #6BB52E', padding: '24px' }}>
          <p style={{
            fontFamily: 'var(--font-barlow-condensed), sans-serif',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#6BB52E',
            marginBottom: '8px'
          }}>
            Deliverable
          </p>
          <p style={{
            fontFamily: 'var(--font-barlow), sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: '#1B2D6B',
            lineHeight: '1.6'
          }}>
            {phase.deliverable}
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .phase-layout { grid-template-columns: 1fr !important; }
          .phase-layout > div:first-child { 
            border-right: none !important; 
            border-bottom: 1px solid rgba(27, 45, 107, 0.10); 
            display: flex; 
            overflow-x: auto; 
            -webkit-overflow-scrolling: touch;
          }
          .phase-layout > div:first-child button { 
            min-width: 200px; 
            border-left: none !important; 
            border-bottom: 4px solid transparent; 
          }
          .phase-layout > div:first-child button[aria-selected="true"] { 
            border-bottom: 4px solid #6BB52E !important; 
          }
          .phase-layout > div:nth-child(2) {
            padding: 32px 24px !important;
          }
        }
      ` }} />
    </div>
  )
}
