'use client'

import React from 'react'
import Link from 'next/link'

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-eyebrow-container">
      <div className="section-eyebrow-line" />
      <span className="text-eyebrow">{children}</span>
    </div>
  )
}

// Keeping AmberRule as empty or removing its usage where possible. Let's just make it null since we use Eyebrow with the line now.
export function AmberRule() {
  return null
}

export function Heading({ children, as: Tag = 'h2', size = 'section', dark = false, maxWidth, className, style: extraStyle }: {
  children: React.ReactNode; as?: 'h1' | 'h2' | 'h3'; size?: 'hero' | 'section' | 'sub'; dark?: boolean; maxWidth?: string; className?: string; style?: React.CSSProperties
}) {
  const isH1 = Tag === 'h1'
  const isH2 = Tag === 'h2'
  const isH3 = Tag === 'h3'
  
  let fontSize = ''
  if (isH1) {
    fontSize = 'clamp(40px, 6vw, 96px)'
  } else if (isH2) {
    fontSize = 'clamp(36px, 5vw, 52px)'
  } else {
    fontSize = '30px'
  }

  return (
    <Tag className={className} style={{
      fontFamily: 'var(--font-barlow-condensed), sans-serif',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: dark ? '#F0EEE8' : '#0F1A40',
      letterSpacing: '0.02em',
      maxWidth,
      marginBottom: '24px',
      fontSize,
      lineHeight: '1.1',
      ...extraStyle
    }}>
      {children}
    </Tag>
  )
}

export function PainCard({ number, title, body }: { number: string; title: string; body: React.ReactNode }) {
  return (
    <div 
      style={{
        background: '#0F1A40',
        padding: '40px 32px',
        borderLeft: '3px solid transparent',
        transition: 'all 0.2s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
      className="pain-card group"
      onMouseEnter={e => { 
        (e.currentTarget as HTMLElement).style.borderLeftColor = '#6BB52E'; 
        (e.currentTarget as HTMLElement).style.background = '#162040' 
      }}
      onMouseLeave={e => { 
        (e.currentTarget as HTMLElement).style.borderLeftColor = 'transparent'; 
        (e.currentTarget as HTMLElement).style.background = '#0F1A40' 
      }}
    >
      <div 
        style={{
          fontFamily: 'var(--font-barlow-condensed), sans-serif',
          fontWeight: 800,
          fontSize: '120px',
          color: 'rgba(255, 255, 255, 0.04)',
          position: 'absolute',
          top: '-20px',
          right: '10px',
          lineHeight: '1',
          pointerEvents: 'none',
        }}
      >
        {number}
      </div>
      
      <h3 style={{
        fontFamily: 'var(--font-barlow), sans-serif',
        fontSize: '16px',
        fontWeight: 500,
        color: '#D8D4CB',
        marginBottom: '16px',
        lineHeight: '1.4',
        position: 'relative',
        zIndex: 1,
      }}>
        {title}
      </h3>
      
      <p style={{
        fontFamily: 'var(--font-barlow), sans-serif',
        fontSize: '14px',
        fontWeight: 300,
        color: '#8A94B0',
        lineHeight: '1.8',
        position: 'relative',
        zIndex: 1,
      }}>
        {body}
      </p>
    </div>
  )
}

export function OutcomeCard({ title, body, tag, link }: { title: string; body: React.ReactNode; tag?: string; link?: string }) {
  return (
    <div 
      style={{ 
        background: '#1B2D6B', 
        padding: '40px 32px',
        position: 'relative',
        transition: 'background 0.2s ease',
        height: '100%',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#243580' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#1B2D6B' }}
    >
      {tag && (
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
          marginBottom: '24px',
        }}>
          {tag}
        </span>
      )}
      <h3 style={{ 
        fontFamily: 'var(--font-barlow-condensed), sans-serif', 
        fontSize: '26px', 
        fontWeight: 700, 
        textTransform: 'uppercase',
        color: '#E8E4DB', 
        marginBottom: '16px', 
        lineHeight: '1.2' 
      }}>
        {title}
      </h3>
      <div style={{
        display: 'flex',
        gap: '16px',
      }}>
        <div style={{ width: '16px', height: '2px', background: '#6BB52E', marginTop: '10px', flexShrink: 0 }} />
        <div style={{ 
          fontFamily: 'var(--font-barlow), sans-serif',
          fontSize: '13px', 
          fontWeight: 300,
          color: 'rgba(180, 186, 206, 0.85)', 
          lineHeight: '1.8' 
        }}>
          {body}
        </div>
      </div>
      {link && (
        <Link href={link} style={{
          display: 'inline-block',
          marginTop: '24px',
          fontFamily: 'var(--font-barlow-condensed), sans-serif',
          fontWeight: 600,
          fontSize: '12px',
          color: '#6BB52E',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textDecoration: 'none',
        }}>
          Read Case Study →
        </Link>
      )}
    </div>
  )
}

export function StatCard({ label, children, isLast }: { label: string; children: React.ReactNode; isLast?: boolean }) {
  return (
    <div style={{ 
      padding: '24px 32px',
      borderBottom: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
    }}>
      <p style={{ 
        fontFamily: 'var(--font-barlow-condensed), sans-serif', 
        fontSize: '11px', 
        fontWeight: 700, 
        letterSpacing: '0.24em', 
        textTransform: 'uppercase', 
        color: '#6BB52E', 
        marginBottom: '8px' 
      }}>
        {label}
      </p>
      <div style={{ 
        fontFamily: 'var(--font-barlow), sans-serif', 
        fontSize: '14px', 
        fontWeight: 300,
        color: '#F0EEE8', 
        lineHeight: '1.6' 
      }}>
        {children}
      </div>
    </div>
  )
}

export function Deliverable({ text }: { text: string }) {
  return (
    <div className="deliverable-indicator">
      <p style={{ 
        fontFamily: 'var(--font-barlow-condensed), sans-serif',
        fontSize: '10px', 
        fontWeight: 700, 
        letterSpacing: '0.24em', 
        textTransform: 'uppercase', 
        color: '#6BB52E', 
        marginBottom: '6px' 
      }}>
        Deliverable
      </p>
      <p style={{ 
        fontFamily: 'var(--font-barlow), sans-serif',
        fontSize: '13px', 
        fontWeight: 300,
        color: '#0F1A40', 
        lineHeight: '1.6' 
      }}>
        {text}
      </p>
    </div>
  )
}

export function PageHero({ eyebrow, heading, subheading }: { eyebrow: string; heading: React.ReactNode; subheading?: string }) {
  return (
    <section style={{ background: '#0F1A40', paddingTop: '80px', paddingBottom: '100px', display: 'flex', justifyContent: 'center' }}>
      <div className="content-container w-full px-[24px] md:px-[48px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={{ 
          fontFamily: 'var(--font-barlow-condensed), sans-serif', 
          fontSize: 'clamp(48px, 6vw, 72px)', 
          fontWeight: 800, 
          textTransform: 'uppercase',
          lineHeight: '1.1', 
          color: '#F0EEE8', 
          maxWidth: '640px', 
          marginBottom: '20px' 
        }}>
          {heading}
        </h1>
        {subheading && (
          <p style={{ 
            fontFamily: 'var(--font-barlow), sans-serif', 
            fontSize: '17px', 
            fontWeight: 300,
            color: '#8A94B0', 
            lineHeight: '1.75', 
            maxWidth: '520px', 
            marginTop: '16px' 
          }}>
            {subheading}
          </p>
        )}
      </div>
    </section>
  )
}
