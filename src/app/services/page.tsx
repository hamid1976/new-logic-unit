import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Eyebrow, Heading, Deliverable } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Operational Transformation Program',
  description:
    'A structured engagement for distribution and trading businesses that have outgrown their current operating model. ERP implementation done in the right order.',
  keywords: [
    'operational transformation',
    'ERP implementation distribution',
    'inventory control',
    'operational restructuring',
    'distribution ERP consulting',
  ],
}

const stages = [
  {
    number: '01',
    name: 'Operational Mapping',
    timing: 'Weeks 1–3',
    body: 'We document how your business actually operates. Order flow, purchasing process, stock management, customer fulfilment, financial reporting — and how decisions get made at every level. We interview your team, not just your management. We follow transactions through the system from origin to close. We identify every point where information breaks, where decisions get made in the wrong place, and where your people have built workarounds that have become invisible infrastructure.',
    deliverable: 'Operational map with annotated breakdown points and root cause analysis',
  },
  {
    number: '02',
    name: 'Structural Redesign',
    timing: 'Weeks 4–6',
    body: 'We redesign the operating model — redefining process flows, clarifying decision rights, restructuring how information moves between functions, and establishing the data standards that will make the system trustworthy. We do this with your team, not for them. A structure your people didn\'t participate in designing will not survive first contact with operational reality.',
    deliverable: 'Redesigned operating model with process documentation, role clarity, and system requirements',
  },
  {
    number: '03',
    name: 'System Design and Build',
    timing: 'Weeks 7–14',
    body: 'We design and configure the technology layer — ERP setup, data architecture, reporting structure, integrations, and where appropriate, AI-assisted decision tools embedded into operational workflows. The system is built to the redesigned operating model, not the legacy one. Configuration decisions are made by us in collaboration with your team, not delegated to a vendor.',
    deliverable: 'Configured, tested operational system ready for phased go-live',
  },
  {
    number: '04',
    name: 'Go-Live and Stabilisation',
    timing: 'Weeks 15–20',
    body: 'We manage the transition from old operating model to new. Phased rollout, parallel running where necessary, staff training delivered in operational context rather than classroom settings, and daily availability during the critical first weeks. We do not declare success at go-live. We declare success when the business is running through the new system consistently and your team no longer needs us for routine questions.',
    deliverable: 'Fully operational system with stable adoption across functions',
  },
  {
    number: '05',
    name: 'Control Review',
    timing: 'Month 6',
    body: 'A structured review at six months post-implementation to assess system performance, identify any structural drift, and make adjustments. This is included in the program — not billed as a separate engagement.',
    deliverable: 'Performance assessment and adjustment plan',
  },
]

const capabilities = [
  {
    title: 'Inventory & stock management',
    items: ['Real-time stock visibility across locations', 'Accurate landed cost calculation', 'Dynamic reorder triggers', 'Batch and serial tracking'],
  },
  {
    title: 'Procurement & supplier management',
    items: ['Structured PO workflow with approvals', 'Supplier performance tracking', 'Three-way matching', 'Elimination of maverick purchasing'],
  },
  {
    title: 'Sales & customer fulfilment',
    items: ['Real-time stock confirmation at order entry', 'Automated credit limit enforcement', 'Delivery scheduling and dispatch', 'Customer-level profitability'],
  },
  {
    title: 'Financial operations',
    items: ['Distribution-structured chart of accounts', 'Automated COGS calculation', 'Product-line P&L reporting', 'Cash flow integrated with procurement'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        heading="The Operational Transformation Program"
        subheading="A structured engagement for distribution and trading businesses that have outgrown their current operating model — and need to rebuild it correctly, not quickly."
      />

      {/* -- WHO IT'S FOR ---------------------------------- */}
      <section style={{ background: '#F4F2EC' }} className="section-pad">
        <div
          className="content-container two-col"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          <div>
            <Eyebrow>Who this is for</Eyebrow>
            <Heading as="h2" maxWidth="480px">
              NOT A GENERAL RETAINER. A SPECIFIC PROGRAM FOR A SPECIFIC SITUATION.
            </Heading>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '16px', fontWeight: 300, color: '#8A94B0', lineHeight: '1.8', marginBottom: '32px' }}>
              You are running a distribution or trading business with between 15 and 60 people.
              The business is generating revenue — possibly significant revenue — but operational
              control has not kept pace with operational complexity.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Your growth has created complexity you cannot manage',
                'A previous system or consultant didn\'t solve it',
                'You are the bottleneck in your own business',
              ].map((signal) => (
                <div key={signal} style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                  <div style={{ width: '24px', height: '2px', background: '#6BB52E', marginTop: '10px', flexShrink: 0 }} />
                  <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '15px', fontWeight: 500, color: '#1B2D6B', lineHeight: '1.6' }}>{signal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM STAGES ──────────────────────────────── */}
      <section style={{ background: '#FDFCF9', borderTop: '1px solid rgba(27, 45, 107, 0.10)' }} className="section-pad">
        <div className="content-container">
          <Eyebrow>Program structure</Eyebrow>
          <Heading as="h2" maxWidth="600px">
            WHAT THE ENGAGEMENT COVERS — AND IN WHAT ORDER.
          </Heading>
          <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(27, 45, 107, 0.10)' }}>
            {stages.map((stage) => (
              <div key={stage.number} style={{ background: '#FDFCF9', padding: '48px 40px', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '40px' }} className="stage-row">
                <div>
                  <p style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '42px', fontWeight: 800, color: 'rgba(27, 45, 107, 0.15)', lineHeight: 1 }}>{stage.number}</p>
                  <span style={{ display: 'inline-block', marginTop: '12px', fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#6BB52E', border: '1px solid #6BB52E', padding: '4px 10px' }}>
                    {stage.timing}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '28px', fontWeight: 800, textTransform: 'uppercase', color: '#1B2D6B', marginBottom: '16px' }}>{stage.name}</h3>
                  <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '16px', fontWeight: 300, color: '#8A94B0', lineHeight: '1.8', marginBottom: '32px', maxWidth: '700px' }}>{stage.body}</p>
                  <Deliverable text={stage.deliverable} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ───────────────────────────── */}
      <section style={{ background: '#F4F2EC', borderTop: '1px solid rgba(27, 45, 107, 0.10)' }} className="section-pad">
        <div className="content-container">
          <Eyebrow>Systems & capabilities</Eyebrow>
          <Heading as="h2" maxWidth="500px">WHAT WE IMPLEMENT INSIDE THE PROGRAM.</Heading>
          <div style={{ marginTop: '64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(27, 45, 107, 0.10)' }} className="two-col-grid">
            {capabilities.map((cap) => (
              <div key={cap.title} style={{ background: '#FDFCF9', padding: '40px 32px' }}>
                <h3 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '20px', fontWeight: 800, textTransform: 'uppercase', color: '#1B2D6B', marginBottom: '24px', letterSpacing: '0.05em' }}>
                  {cap.title}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cap.items.map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                      <div style={{ width: '20px', height: '2px', background: '#6BB52E', marginTop: '10px', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '15px', color: '#8A94B0', fontWeight: 500, lineHeight: '1.6' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section style={{ background: '#0F1A40' }} className="section-pad">
        <div className="content-container flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '36px', fontWeight: 800, textTransform: 'uppercase', color: '#F0EEE8', lineHeight: '1.1', marginBottom: '16px' }}>
              ENGAGEMENTS ARE SCOPED INDIVIDUALLY.
            </h2>
            <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '16px', fontWeight: 300, color: '#8A94B0', maxWidth: '600px', lineHeight: '1.7' }}>
              The cost of the program is consistently lower than one more year of operational inefficiency, stock errors, and margin leakage in a business of this size.
            </p>
          </div>
          <Link href="/contact" className="btn-primary whitespace-nowrap">DISCUSS YOUR SITUATION →</Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .two-col-grid { grid-template-columns: 1fr !important; }
          .stage-row { grid-template-columns: 1fr !important; gap: 24px !important; padding: 32px 24px !important; }
        }
      ` }} />
    </>
  )
}
