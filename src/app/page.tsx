import type { Metadata } from 'next'
import Link from 'next/link'
import { Eyebrow, Heading, PainCard, OutcomeCard, StatCard } from '@/components/ui'
import { PhaseSelector } from '@/components/sections/PhaseSelector'

export const metadata: Metadata = {
  title: 'Logic Unit — From Owner-Dependent to System-Driven',
  description:
    'Logic Unit helps distribution and trading businesses move from owner-dependent to system-driven. ERP implementation, operational redesign, and AI-enabled control for SMEs in Pakistan and UAE.',
  keywords: [
    'ERP consultant Karachi',
    'operational transformation Pakistan',
    'distribution business ERP Pakistan',
    'inventory control system Pakistan',
    'IFS ERP partner Pakistan',
    'owner dependent business solution',
    'system driven business Pakistan',
    'trading company ERP UAE',
    'stock management software Pakistan',
  ],
}

const painPoints = [
  {
    number: '01',
    title: 'Your stock count and your sales team are working from different numbers',
    body: (
      <>
        Promises get made against{' '}
        <em style={{ color: 'rgba(155, 168, 200, 0.9)', fontStyle: 'normal' }}>
          inventory that is not there
        </em>
        . Disputes between warehouse and sales happen weekly. The reconciliation falls on you.
      </>
    ),
  },
  {
    number: '02',
    title: 'Purchase decisions are made by whoever shouts loudest',
    body: (
      <>
        There is no demand model. Buying happens reactively — someone runs out, someone panics,{' '}
        <em style={{ color: 'rgba(155, 168, 200, 0.9)', fontStyle: 'normal' }}>
          you approve on WhatsApp
        </em>{' '}
        before 8am.
      </>
    ),
  },
  {
    number: '03',
    title: 'Your ERP has become an expensive transaction log',
    body: (
      <>
        It was implemented. It was never adopted. The real work still happens in{' '}
        <em style={{ color: 'rgba(155, 168, 200, 0.9)', fontStyle: 'normal' }}>
          Excel and private message threads
        </em>
        . Nobody fully trusts the numbers it produces.
      </>
    ),
  },
  {
    number: '04',
    title: 'You are still the person who resolves everything',
    body: (
      <>
        Decisions stall without you. Information lives in your head.{' '}
        <em style={{ color: 'rgba(155, 168, 200, 0.9)', fontStyle: 'normal' }}>
          You cannot take a week off
        </em>{' '}
        without things slipping. You built this business — it should not depend on you this completely.
      </>
    ),
  },
]

const proofCases = [
  {
    title: 'KARACHI SHIPYARD & ENGINEERING WORKS',
    tag: 'IFS IMPLEMENTATION',
    link: '/case-studies',
    body: (
      <div className="flex flex-col gap-3 w-full">
        <span>National-scale ERP deployment.</span>
        <span>Replaced fragmented legacy systems with a single unified ecosystem.</span>
        <span>Complete visibility across massive procurement and engineering cycles.</span>
      </div>
    )
  },
  {
    title: 'CANDLE THREADS',
    tag: 'OPERATIONAL RESTRUCTURING',
    link: '/case-studies',
    body: (
      <div className="flex flex-col gap-3 w-full">
        <span>Moved from owner-dependent dispatch to automated warehouse logic.</span>
        <span>Reduced order-to-delivery cycle time by 40%.</span>
        <span>Inventory variance dropped to sub-1% within three months.</span>
      </div>
    )
  }
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0F1A40', position: 'relative', overflow: 'hidden' }}>
        {/* Pattern Background (Left 55% of viewport) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: '45%',
          bottom: 0,
          backgroundImage: 'radial-gradient(circle, rgba(107, 181, 46, 0.05) 2px, transparent 2px)',
          backgroundSize: '28px 28px',
          zIndex: 0,
        }} />

        {/* Hero Image (Right 45% of viewport on Desktop) */}
        <div className="w-full h-[400px] lg:h-auto lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-[45%] z-0">
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '100%',
            background: 'linear-gradient(to right, #0F1A40 0%, transparent 20%)',
            zIndex: 2,
          }} />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
            opacity: 0.8,
            mixBlendMode: 'luminosity'
          }} />
        </div>

        {/* Content Container (Constrained width) */}
        <div className="content-container section-pad relative z-10 w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between">
          {/* Left Content (takes up roughly the left half of the container) */}
          <div className="w-full lg:w-[55%] lg:pr-12 pt-16 flex flex-col justify-center">
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <Eyebrow>PAKISTAN & UAE · DISTRIBUTION & TRADING</Eyebrow>
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h1 style={{ 
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontSize: 'clamp(40px, 6vw, 96px)',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#F0EEE8',
                lineHeight: '1.05',
                letterSpacing: '0.01em',
                marginBottom: '0'
              }}>
                YOU BUILT A BUSINESS.
              </h1>
              <h1 style={{ 
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontSize: 'clamp(40px, 6vw, 96px)',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#6BB52E',
                lineHeight: '1.05',
                letterSpacing: '0.01em',
                marginBottom: '24px'
              }}>
                NOW IT RUNS YOU.
              </h1>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <h2 style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontSize: 'clamp(28px, 4vw, 52px)',
                fontWeight: 300,
                textTransform: 'uppercase',
                color: 'rgba(240, 238, 232, 0.45)',
                lineHeight: '1.1',
                marginBottom: '40px',
                letterSpacing: '0.02em',
              }}>
                It does not have to stay this way.
              </h2>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.4s', borderLeft: '3px solid #6BB52E', paddingLeft: '18px', marginBottom: '48px' }}>
              <p style={{
                fontFamily: 'var(--font-barlow), sans-serif',
                fontSize: '17px',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'rgba(240, 238, 232, 0.80)',
                lineHeight: '1.6',
                maxWidth: '520px',
              }}>
                From owner-dependent to system-driven — you stay in control without being in everything.
              </p>
            </div>

            <div className="animate-fade-up flex flex-col sm:flex-row gap-4 mb-16" style={{ animationDelay: '0.5s' }}>
              <Link href="/contact" className="btn-primary flex-1 sm:flex-none">
                Book Your Audit
              </Link>
              <Link href="/#approach" className="btn-ghost flex-1 sm:flex-none">
                See Our Approach →
              </Link>
            </div>

            {/* Stat bar */}
            <div className="animate-fade-up grid grid-cols-2 md:grid-cols-4 border-t border-l border-b border-[rgba(255,255,255,0.08)] mt-auto" style={{ animationDelay: '0.6s' }}>
              <StatCard label="Who We Serve">SMEs in Trade</StatCard>
              <StatCard label="IFS Partner">A-Grade ERP</StatCard>
              <StatCard label="Markets">PAK & UAE</StatCard>
              <StatCard label="Experience" isLast>10+ Years</StatCard>
            </div>
          </div>
          {/* Spacer to push content correctly on mobile if needed, or just let it stack */}
          <div className="hidden lg:block lg:w-[45%]"></div>
        </div>
      </section>

      {/* ── CLIENT TICKER ───────────────────────────────────────── */}
      <section style={{ 
        backgroundColor: '#0A1230', 
        height: '54px', 
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}>
        <div style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          width: 'fit-content',
        }} className="animate-scroll-left hover:pause">
          {[...Array(2)].map((_, j) => (
            <div key={j} style={{ display: 'flex', alignItems: 'center' }}>
              {[
                'Karachi Shipyard & Engineering Works', 'Candle Threads', 'Seagold Logistics',
                'Qatar Airways', 'Leopard Couriers', 'UAE Government', 'RTA Dubai', 
                'AGP Pharma', 'Dunkin\' Donuts Pakistan', 'Novo Nordisk', 'IBL'
              ].map((client, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'var(--font-barlow-condensed), sans-serif',
                    fontWeight: 700,
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    padding: '0 32px',
                    cursor: 'default',
                    transition: 'color 0.2s ease',
                  }}
                  className="text-[rgba(240,238,232,0.30)] hover:text-[rgba(240,238,232,0.65)]"
                  >
                    {client}
                  </span>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#6BB52E',
                    opacity: 0.5,
                  }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM SECTION ──────────────────────────────── */}
      <section style={{ backgroundColor: '#0F1A40' }} className="section-pad">
        <div className="content-container">
          <Eyebrow>WHAT OWNER-DEPENDENT COSTS YOU</Eyebrow>
          <Heading as="h2" dark maxWidth="640px" style={{ marginBottom: '64px' }}>
            THIS IS WHAT IT LOOKS LIKE EVERY MONTH.
          </Heading>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}>
            {painPoints.map((p) => (
              <PainCard key={p.number} {...p} />
            ))}
          </div>

          {/* Founder Quote */}
          <div style={{ marginTop: '80px', display: 'flex', gap: '24px' }}>
            <div style={{ 
              fontFamily: 'var(--font-barlow-condensed), sans-serif',
              fontWeight: 800,
              fontSize: '80px',
              color: '#6BB52E',
              opacity: 0.6,
              lineHeight: 0.8
            }}>
              "
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(20px, 2.5vw, 30px)',
                lineHeight: '1.4',
                color: 'rgba(240, 238, 232, 0.8)',
                letterSpacing: '0.01em',
                maxWidth: '720px',
                marginBottom: '24px'
              }}>
                Most distribution businesses do not have a software problem. They
                have a control problem. Software is only useful once the control
                structure exists.
              </p>
              <p style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#6BB52E',
              }}>
                — Aamir Khan, Co-founder, Logic Unit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── METHOD / PHASE SELECTOR ───────────────────────── */}
      <section id="approach" style={{ backgroundColor: '#F4F2EC' }} className="section-pad">
        <div className="content-container">
          <Eyebrow>OUR METHODOLOGY</Eyebrow>
          <Heading as="h2" maxWidth="800px" style={{ marginBottom: '64px' }}>
            WE REDESIGN FIRST. THEN WE IMPLEMENT. THEN WE STAY.
          </Heading>
          <PhaseSelector />
        </div>
      </section>

      {/* ── CASE STUDIES ────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1B2D6B' }} className="section-pad">
        <div className="content-container">
          <Eyebrow>PROOF OF WORK</Eyebrow>
          <Heading as="h2" dark maxWidth="600px" style={{ marginBottom: '64px' }}>
            REAL ENGAGEMENTS. NAMED CLIENTS. REAL OUTCOMES.
          </Heading>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
          }}>
            {proofCases.map((c, i) => (
              <OutcomeCard 
                key={i} 
                title={c.title} 
                body={c.body} 
                tag={c.tag}
                link={c.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0F1A40', position: 'relative', overflow: 'hidden' }} className="section-pad">
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(107, 181, 46, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        
        <div className="content-container relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            {/* Left */}
            <div className="w-full lg:w-[50%]">
              <h2 style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(36px, 5vw, 52px)',
                lineHeight: '1.1',
                color: '#F0EEE8',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}>
                READY TO MOVE FROM <span style={{ color: '#6BB52E' }}>OWNER-DEPENDENT</span> TO SYSTEM-DRIVEN?
              </h2>
              <p style={{
                fontFamily: 'var(--font-barlow), sans-serif',
                fontWeight: 300,
                fontSize: '15px',
                color: '#8A94B0',
                lineHeight: '1.8',
                maxWidth: '480px',
              }}>
                We work with a limited number of distribution and trading
                businesses each quarter. If you are dealing with a pressing
                operational problem, earlier is better.
              </p>
            </div>
            
            {/* Right: Booking Card */}
            <div className="w-full lg:w-[50%] max-w-[500px]">
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(107, 181, 46, 0.25)',
                padding: '48px 40px',
              }}>
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontWeight: 700,
                  fontSize: '10px',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: '#6BB52E',
                  marginBottom: '16px',
                }}>
                  FREE OPERATIONAL AUDIT
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontWeight: 800,
                  fontSize: '32px',
                  color: '#F0EEE8',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}>
                  30 Minutes With Aamir.
                </h3>
                <p style={{
                  fontFamily: 'var(--font-barlow), sans-serif',
                  fontWeight: 300,
                  fontSize: '14px',
                  lineHeight: '1.8',
                  color: '#8A94B0',
                  marginBottom: '32px',
                }}>
                  No deck. No pitch. No proposal unless you ask for one. 
                  An honest assessment of where your operations are breaking down.
                </p>
                <Link href="/contact" className="btn-primary" style={{ width: '100%' }}>
                  BOOK YOUR AUDIT
                </Link>
                <div style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  margin: '32px 0 24px 0',
                }} />
                <div>
                  <span style={{
                    display: 'block',
                    fontFamily: 'var(--font-barlow-condensed), sans-serif',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: '#8A94B0',
                    marginBottom: '8px',
                  }}>
                    DIRECT CONTACT
                  </span>
                  <a href="mailto:aamir.khan@logic-unit.com" style={{
                    display: 'block',
                    fontFamily: 'var(--font-barlow), sans-serif',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#F0EEE8',
                    textDecoration: 'none',
                    marginBottom: '4px',
                  }}>
                    aamir.khan@logic-unit.com
                  </a>
                  <a href="https://wa.me/923462765118" target="_blank" rel="noopener noreferrer" style={{
                    display: 'block',
                    fontFamily: 'var(--font-barlow), sans-serif',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: '#F0EEE8',
                    textDecoration: 'none',
                  }}>
                    WhatsApp: +92 346 2765118
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
