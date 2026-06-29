'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogicUnitLogo } from '@/components/brand/LogicUnitLogo'
import { trackHubspotEvent } from '@/lib/hubspot'

const navLinks = [
  { href: '/about', label: 'Company' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/technology', label: 'Technology' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/partnerships', label: 'Partnerships' },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-[rgba(16,39,122,0.10)] bg-white/95 px-6 lg:px-12 transition-all duration-300 ${scrolled ? 'shadow-md bg-white/98' : ''}`}>
        <div className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 ${scrolled ? 'h-[64px]' : 'h-[86px]'}`}>
          <Link href="/" className="flex items-center text-slate-950 no-underline">
            <LogicUnitLogo className={`transition-all duration-300 ${scrolled ? 'w-[150px] sm:w-[160px]' : 'w-[198px] sm:w-[214px]'}`} />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-500 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#10277a]">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={() => trackHubspotEvent('partner_with_us_clicked')}
            className="hidden bg-[#10277a] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(16,39,122,0.22)] hover:bg-[#071330] md:block"
          >
            Partner With Us
          </Link>

          <button
            aria-label="Toggle menu"
            className="border border-[rgba(16,39,122,0.18)] px-4 py-2 text-sm font-semibold text-[#10277a] md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            type="button"
          >
            Menu
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white px-6 pt-24 md:hidden">
          <div className="flex flex-col gap-6 text-2xl font-semibold">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-950 no-underline">
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => trackHubspotEvent('partner_with_us_clicked')}
              className="mt-6 bg-[#10277a] px-5 py-3 text-center text-base text-white no-underline"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}

      <div className="h-[86px]" />
    </>
  )
}
