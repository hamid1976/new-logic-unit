import Link from 'next/link'
import LUlogo from "@/assets/logoLU.png";
import Image from 'next/image';

const footerLinks = [
  { href: '/services', label: 'What We Do' },
  { href: '/#approach', label: 'Approach' },
  { href: '/industry', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/ifs-partner', label: 'IFS Partner' },
  { href: '/about', label: 'About' },
]

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#070E1F',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '44px 0',
      }}
    >
      <div
        className="content-container px-[24px] md:px-[48px] flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
      >
        {/* Left: Logo */}
        <div className="flex-1 w-full flex items-start md:items-center justify-start">
          <Link href="/" className="flex items-center gap-3 no-underline">
            {/* Logo SVG (Light version) */}
            <div className="flex flex-col justify-center">
              <Image
                src={LUlogo}
                alt="Logic Unit Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Centre: Nav links */}
        <div className="flex-1 w-full flex justify-start md:justify-center">
          <nav className="flex flex-wrap gap-x-6 gap-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-barlow-condensed), sans-serif',
                  fontWeight: 700,
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="text-[rgba(255,255,255,1)] hover:text-[#6BB52E]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Address + email + phone + copyright */}
        <div className="flex-1 w-full flex flex-col items-start md:items-end gap-1">
          <p style={{
            fontFamily: 'var(--font-barlow), sans-serif',
            fontWeight: 300,
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 1)',
            margin: 0
          }}>
            aamir.khan@logic-unit.com
          </p>
          <p style={{
            fontFamily: 'var(--font-barlow), sans-serif',
            fontWeight: 300,
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 1)',
            margin: 0
          }}>
            WhatsApp: +92 346 2765118
          </p>
          <p style={{
            fontFamily: 'var(--font-barlow), sans-serif',
            fontWeight: 300,
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 1)',
            margin: '8px 0 0 0'
          }}>
            © {new Date().getFullYear()} Logic Unit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
