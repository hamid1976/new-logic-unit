import type { Metadata } from 'next'
import { PageHero, Eyebrow, Heading } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Case Studies | Logic Unit',
  description:
    'Real outcomes for distribution and trading businesses. No fluff, just operational results.',
}

const cases = [
  {
    client: 'Candle Threads',
    industry: 'Manufacturing & Distribution',
    problem: 'Maintenance decisions were reactive, leading to unpredictable downtime.',
    outcome: '10–30% reduction in spare parts inventory and improved labor productivity through data-driven planning.',
  },
  {
    client: 'Major Shipyard',
    industry: 'Engineering & Logistics',
    problem: 'Complex ERP implementation required deep operational alignment across multiple departments.',
    outcome: 'Successful IFS deployment at Pakistan\'s largest shipyard, covering full lifecycle operations.',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof of concept"
        heading="Real operations. Real results."
        subheading="We don't talk about 'transformation' in the abstract. We talk about stock accuracy, downtime reduction, and margin visibility."
      />

      <section style={{ background: '#F4F2EC' }} className="section-pad">
        <div className="content-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }} className="case-grid">
            {cases.map((c) => (
              <div key={c.client} style={{ background: '#FDFCF9', padding: '48px', border: '1px solid rgba(27, 45, 107, 0.10)' }}>
                <div className="mb-6">
                  <span style={{
                    display: 'inline-block',
                    border: '1px solid #6BB52E',
                    color: '#6BB52E',
                    fontFamily: 'var(--font-barlow-condensed), sans-serif',
                    fontWeight: 700,
                    fontSize: '10px',
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                  }}>
                    {c.industry}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#1B2D6B',
                  textTransform: 'uppercase',
                  marginBottom: '24px'
                }}>{c.client}</h3>
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#6BB52E', marginBottom: '8px' }}>The Challenge</p>
                  <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '15px', color: '#8A94B0', lineHeight: '1.7', fontWeight: 300 }}>{c.problem}</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#6BB52E', marginBottom: '8px' }}>The Outcome</p>
                  <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '15px', color: '#0F1A40', fontWeight: 500, lineHeight: '1.7' }}>{c.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 600px) {
          .case-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </>
  )
}
