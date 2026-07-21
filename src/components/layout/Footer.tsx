import Link from 'next/link'
import { LogicUnitLogo } from '@/components/brand/LogicUnitLogo'

const groups = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/partnerships', label: 'Partnerships' },
      { href: '/insights', label: 'Insights' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { href: '/ecosystem/hulm-solutions', label: 'HULM POS' },
      { href: '/ecosystem/titan-mms-maintenance-management-software', label: 'Titan CMMS' },
      { href: '/ecosystem/animalcare360-livestock-animal-care-software', label: 'AnimalCare360' },
      { href: '/ecosystem', label: 'View All Products' },
    ],
  },
  {
    title: 'Capabilities',
    links: [
      { href: '/technology', label: 'SaaS Architecture' },
      { href: '/technology', label: 'Data Infrastructure' },
      { href: '/technology', label: 'AI & IoT Integration' },
    ],
  },
  {
    title: 'Partnerships',
    links: [
      { href: '/partnerships/strategic-partnerships', label: 'Strategic Partnerships' },
      { href: '/partnerships/system-integrators', label: 'System Integrators' },
      { href: '/partnerships/enterprise-collaboration', label: 'Enterprise Collaboration' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#071330] px-6 py-14 text-white lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_2fr]">
        <div>
          <Link href="/" className="inline-flex no-underline">
            <LogicUnitLogo className="w-[220px] brightness-0 invert" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
            A product engineering and operating company that builds and runs SaaS ecosystems for real industries.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-4 text-sm font-semibold text-white">{group.title}</h2>
              <div className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <Link key={`${group.title}-${link.label}`} href={link.href} className="text-sm text-slate-400 no-underline hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Logic Unit. All rights reserved.
      </div>
    </footer>
  )
}
