import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero, Eyebrow, Heading } from '@/components/ui'

export const metadata: Metadata = {
  title: 'About Aamir Khan, Khurram Ali Shams & Logic Unit',
  description:
    'Two co-founders. Ten years. IFS Business Partner. Enterprise ERP at Pakistan\'s largest shipyard. Now focused exclusively on distribution and trading businesses.',
}

const principles = [
  { title: 'Structure before software', body: 'We do not begin with technology selection. We begin with the operation. How it actually runs, where it breaks, why it breaks. The system follows the redesign — never the other way around.' },
  { title: 'Adoption is the measure of success', body: 'A system that your team works around is not a system. Go-live is the start of the hardest phase, not the end of the engagement. We stay until the new way of working is the default.' },
  { title: 'AI is a method, not a product', body: 'We use AI where it changes a specific operational decision in a measurable way — demand forecasting, margin analysis, anomaly detection. Where those conditions don\'t exist, we don\'t deploy it.' },
  { title: 'Specificity over breadth', body: 'We work exclusively in distribution and trading. Not because we cannot work elsewhere — because genuine expertise in a specific operational model produces better outcomes than general consulting applied broadly.' },
  { title: 'Honesty over comfort', body: 'We will tell you things about your business that will be uncomfortable to hear. That is not a style choice. It is the job. Comfortable assessments that preserve the status quo are not worth paying for.' },
]

const founders = [
  {
    name: 'Aamir Khan',
    title: 'Co-founder & Director Operations',
    initials: 'AK',
    focus: 'Business activities, operational planning, client engagement, resource management',
    background: 'Ten years leading Logic Unit\'s operational and client-facing work. Responsible for developing and implementing operational plans across every engagement. The person who walks into your business, maps what is actually happening, and designs what should happen instead.',
    email: 'aamir.khan@logic-unit.com',
    whatsapp: '+92 346 2765118',
    color: '#6BB52E',
  },
  {
    name: 'Khurram Ali Shams',
    title: 'Co-founder & Director Technology',
    initials: 'KS',
    focus: 'Technical architecture, team management, system design, product strategy',
    background: 'Ten years leading Logic Unit\'s technical delivery. Responsible for the systems that actually get built — from IFS ERP at Karachi Shipyard to custom manufacturing systems at Candle Threads to UAE government applications. The person who makes sure what gets built works and keeps working.',
    email: 'khurram.ali@logic-unit.com',
    phone: '+1 (346) 318-0614',
    whatsapp: '+92 332 3132963',
    color: '#6BB52E',
  },
]

const credentials = [
  { label: 'Established', value: '10+ years in operation' },
  { label: 'ERP Partnership', value: 'IFS Business Partner — top 5 ERP worldwide' },
  { label: 'Flagship engagement', value: 'Karachi Shipyard & Engineering Works — Pakistan\'s largest shipyard' },
  { label: 'Manufacturing ERP', value: 'Candle Threads — Pakistan\'s largest embroidery thread provider' },
  { label: 'Government work', value: 'UAE — RTA, Dept of Finance, Dept of Transport, Dubai, Abu Dhabi' },
  { label: 'Notable clients', value: 'Qatar Airways · Leopard Couriers · Dunkin\' Donuts · Novo Nordisk · AGP Pharma' },
  { label: 'Current focus', value: 'Distribution & trading businesses · Pakistan & UAE' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Logic Unit"
        heading="Ten years. Twenty clients. One decision."
        subheading="We stopped doing everything for everyone. Distribution and trading businesses have the most acute operational pain and the most to gain from a firm that goes deep."
      />

      {/* ── CREDENTIALS STRIP ───────────────────────────── */}
      <section style={{ background: '#FDFCF9', padding: '48px 24px', borderBottom: '1px solid rgba(27, 45, 107, 0.10)' }}>
        <div className="content-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', background: 'rgba(27, 45, 107, 0.10)' }}>
            {credentials.map((c, i) => (
              <div key={i} style={{ background: '#FDFCF9', padding: '24px', flex: '1', minWidth: '220px' }}>
                <p style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#6BB52E', marginBottom: '8px' }}>{c.label}</p>
                <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '14px', color: '#1B2D6B', lineHeight: '1.5', fontWeight: 500 }}>{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO FOUNDERS ────────────────────────────────── */}
      <section style={{ background: '#F4F2EC' }} className="section-pad">
        <div className="content-container">
          <Eyebrow>The co-founders</Eyebrow>
          <Heading as="h2" maxWidth="700px">
            TWO PEOPLE. TEN YEARS TOGETHER. OPERATIONS AND TECHNOLOGY — BOTH IN THE ROOM.
          </Heading>
          <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '16px', fontWeight: 300, color: '#8A94B0', lineHeight: '1.7', maxWidth: '600px', marginBottom: '64px' }}>
            Most implementation partners send a project manager. We send the people who built the firm — and who are accountable for the outcome.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(27, 45, 107, 0.10)' }} className="founders-grid">
            {founders.map((f, i) => (
              <div key={i} style={{ background: '#FDFCF9', padding: '48px 40px' }}>
                {/* Avatar */}
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#0F1A40', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                  <span style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '32px', fontWeight: 800, color: f.color }}>{f.initials}</span>
                </div>

                {/* Identity */}
                <p style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', textTransform: 'uppercase', fontSize: '28px', fontWeight: 800, color: '#0F1A40', marginBottom: '4px' }}>{f.name}</p>
                <p style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '12px', textTransform: 'uppercase', color: f.color, fontWeight: 700, marginBottom: '24px', letterSpacing: '0.1em' }}>{f.title}</p>

                {/* Bio */}
                <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '15px', fontWeight: 300, color: '#8A94B0', lineHeight: '1.8', marginBottom: '32px', borderLeft: '3px solid ' + f.color, paddingLeft: '20px' }}>
                  {f.background}
                </p>

                {/* Focus */}
                <div style={{ marginBottom: '32px' }}>
                  <p style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#6BB52E', marginBottom: '8px' }}>Responsible for</p>
                  <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '14px', fontWeight: 500, color: '#1B2D6B', lineHeight: '1.6' }}>{f.focus}</p>
                </div>

                {/* Contact */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '24px', borderTop: '1px solid rgba(27, 45, 107, 0.10)' }}>
                  <a href={'mailto:' + f.email} style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '14px', color: f.color, textDecoration: 'none', fontWeight: 500 }}>{f.email}</a>
                  {f.phone && <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '14px', color: '#8A94B0' }}>Tel: {f.phone}</p>}
                  <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '14px', color: '#8A94B0' }}>WhatsApp: {f.whatsapp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PIVOT STORY ─────────────────────────────── */}
      <section style={{ background: '#0F1A40' }} className="section-pad">
        <div className="content-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }} className="two-col">
            <div>
              <Eyebrow>Why the focus</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '42px', fontWeight: 800, textTransform: 'uppercase', color: '#F0EEE8', lineHeight: '1.1', marginBottom: '24px' }}>
                TEN YEARS OF BREADTH TAUGHT US WHERE TO GO DEEP.
              </h2>
              <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '16px', fontWeight: 300, color: '#8A94B0', lineHeight: '1.8' }}>
                We delivered across a decade — shipyards, government, logistics, manufacturing, pharma, aviation. We were good at it. But broad delivery builds general capability. It does not build the deep operational knowledge that makes a transformation partner genuinely useful.
              </p>
            </div>
            <div style={{ paddingTop: '12px' }}>
              <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '16px', fontWeight: 300, color: '#8A94B0', lineHeight: '1.8', marginBottom: '32px' }}>
                Distribution and trading kept surfacing as the segment with the most consistent, acute, and structurally fixable operational pain. The problems were predictable. The existing solutions were inadequate. The owners were capable people running businesses that had outgrown their systems.
              </p>
              <blockquote style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '20px', fontWeight: 300, fontStyle: 'italic', color: '#E8E4DB', borderLeft: '3px solid #6BB52E', paddingLeft: '24px', lineHeight: '1.6' }}>
                "We stopped doing everything for everyone. Not because we couldn't. Because doing one thing properly is worth more than doing ten things adequately."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── REAL TESTIMONIAL ────────────────────────────── */}
      <section style={{ background: '#FDFCF9', borderTop: '1px solid rgba(27, 45, 107, 0.10)' }} className="section-pad">
        <div className="content-container">
          <Eyebrow>In their words</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '80px', alignItems: 'start' }} className="test-grid mt-12">
            <div>
              <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '24px', fontWeight: 300, fontStyle: 'italic', color: '#1B2D6B', lineHeight: '1.65', marginBottom: '32px', borderLeft: '3px solid #6BB52E', paddingLeft: '32px' }}>
                "We are constantly pushing for innovation and development within the maintenance department and Logic Unit has provided full support in training of our staff and sharing of knowledge among our technicians. For continuous improvement, they provide us the breakdown maintenance data and we plan our development projects."
              </p>
              <div style={{ paddingLeft: '32px' }}>
                <p style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', color: '#0F1A40', marginBottom: '4px' }}>Muddassir Saleem</p>
                <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '14px', color: '#8A94B0' }}>Managing Director · Candle Threads</p>
                <p style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6BB52E', marginTop: '8px' }}>Pakistan's largest embroidery thread provider</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(27, 45, 107, 0.10)' }}>
              {[
                { metric: 'Spare parts inventory', value: '10–30%', label: 'reduction' },
                { metric: 'Labor productivity', value: '10–30%', label: 'improvement' },
                { metric: 'Equipment downtime', value: 'Reduced', label: 'via preventive maintenance' },
                { metric: 'Maintenance decisions', value: 'Data-driven', label: 'not reactive' },
              ].map((m, i) => (
                <div key={i} style={{ background: '#FDFCF9', padding: '24px' }}>
                  <p style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '10px', fontWeight: 700, color: '#8A94B0', textTransform: 'uppercase', letterSpacing: '0.24em', marginBottom: '8px' }}>{m.metric}</p>
                  <p style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '28px', fontWeight: 800, color: '#6BB52E' }}>{m.value}</p>
                  <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '13px', color: '#0F1A40', marginTop: '4px', fontWeight: 500 }}>{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ──────────────────────────────────── */}
      <section style={{ background: '#F4F2EC', borderTop: '1px solid rgba(27, 45, 107, 0.10)' }} className="section-pad">
        <div className="content-container">
          <Eyebrow>How we operate</Eyebrow>
          <Heading as="h2" maxWidth="600px">FIVE PRINCIPLES THAT GOVERN EVERY ENGAGEMENT.</Heading>
          <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(27, 45, 107, 0.10)' }}>
            {principles.map((p, i) => (
              <div key={i} style={{ background: '#FDFCF9', padding: '40px', display: 'grid', gridTemplateColumns: 'minmax(200px, 300px) 1fr', gap: '48px' }} className="principle-row">
                <h3 style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '24px', fontWeight: 800, textTransform: 'uppercase', color: '#1B2D6B', lineHeight: '1.2' }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '15px', fontWeight: 300, color: '#8A94B0', lineHeight: '1.8' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section style={{ background: '#0F1A40' }} className="section-pad">
        <div className="content-container flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <p style={{ fontFamily: 'var(--font-barlow-condensed), sans-serif', fontSize: '36px', fontWeight: 800, textTransform: 'uppercase', color: '#F0EEE8', marginBottom: '16px', lineHeight: '1.1' }}>
              TALK TO THE PEOPLE WHO WILL ACTUALLY DO THE WORK.
            </p>
            <p style={{ fontFamily: 'var(--font-barlow), sans-serif', fontSize: '16px', fontWeight: 300, color: '#8A94B0' }}>30-minute audit with Aamir. Direct conversation. No proposal unless you ask.</p>
          </div>
          <Link href="/contact" className="btn-primary whitespace-nowrap">BOOK AN AUDIT →</Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .founders-grid { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .test-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .principle-row { grid-template-columns: 1fr !important; gap: 20px !important; padding: 32px 24px !important; }
        }
      ` }} />
    </>
  )
}
