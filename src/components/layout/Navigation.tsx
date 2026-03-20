'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LUlogo from "@/assets/logoLU.png";
import Image from 'next/image';

const navLinks = [
  { href: '/services', label: 'What We Do' },
  { href: '/#approach', label: 'Approach' },
  { href: '/industry', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/ifs-partner', label: 'IFS Partner' },
  { href: '/about', label: 'About' },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgba(15, 26, 64, 0.97)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          height: '66px',
        }}
      >
        <div className="content-container h-full px-[24px] md:px-[48px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 no-underline">
            {/* Logo SVG */}
            <div className="flex flex-col justify-center">
              <Image
                src={LUlogo}
                alt="Logic Unit Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-[32px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: pathname === link.href ? '#6BB52E' : 'rgba(255, 255, 255, 1)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#6BB52E')}
                onMouseLeave={(e) => (e.currentTarget.style.color = pathname === link.href ? '#6BB52E' : 'rgba(255, 255, 255, 1)')}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary" style={{ padding: '12px 24px', fontSize: '12px' }}>
              Book Audit
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-[32px] h-[32px] bg-transparent border-none cursor-pointer"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#F0EEE8',
                  transition: 'all 0.2s',
                  transform:
                    mobileOpen
                      ? i === 0
                        ? 'rotate(45deg) translateY(10px)'
                        : i === 2
                          ? 'rotate(-45deg) translateY(-10px)'
                          : 'opacity: 0'
                      : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            backgroundColor: '#0F1A40',
            paddingTop: '86px',
            paddingLeft: '24px',
            paddingRight: '24px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 700,
                fontSize: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: pathname === link.href ? '#6BB52E' : '#F0EEE8',
                textDecoration: 'none',
                padding: '24px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: '48px' }}>
            <Link href="/contact" className="btn-primary w-full text-center">
              Book Audit
            </Link>
          </div>
        </div>
      )}

      {/* Spacer for fixed nav */}
      <div style={{ height: '66px' }} />
    </>
  )
}
