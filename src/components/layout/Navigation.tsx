'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogicUnitLogo } from '@/components/brand/LogicUnitLogo'

const navLinks = [
  { href: '/about', label: 'Company' },
  { href: '/#ecosystem', label: 'Ecosystem' },
  { href: '/#technology', label: 'Technology' },
  { href: '/#industries', label: 'Industries' },
  { href: '/partnerships', label: 'Partnerships' },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(16,39,122,0.12)] bg-[#fbfaf6]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link href="/" className="flex items-center text-slate-950 no-underline">
            <LogicUnitLogo className="h-11 w-[226px]" />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-500 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#10277a]">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="hidden bg-[#10277a] px-5 py-3 text-sm font-semibold text-white hover:bg-[#071330] md:block">
            Partner With Us
          </Link>

          <button
            aria-label="Toggle menu"
            className="md:hidden"
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
            <Link href="/contact" className="mt-6 bg-slate-950 px-5 py-3 text-center text-base text-white no-underline">
              Partner With Us
            </Link>
          </div>
        </div>
      )}

      <div className="h-20" />
    </>
  )
}
