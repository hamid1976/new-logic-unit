'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

// FAQs Data
const faqs = [
  {
    question: 'What types of businesses can use Hulm Solutions?',
    answer:
      'Hulm Solutions is designed for retail stores, restaurants, cafes, pharmacies, salons, bakeries, clothing stores, electric shops, and manufacturing units. It is industry-configurable, meaning the platform adapts its features and layout to match how each business type actually operates.',
  },
  {
    question: 'Is Hulm Solutions FBR compliant?',
    answer:
      'Yes. All invoicing and billing modules within Hulm Solutions are built to meet FBR (Federal Board of Revenue) requirements, including compliant receipt printing, sales tax tracking, and reporting formats suitable for tax filing in Pakistan.',
  },
  {
    question: 'Can I manage multiple branches with Hulm Solutions?',
    answer:
      'Absolutely. Hulm Solutions supports multi-location management. You can track inventory, sales, staff, and reporting separately per branch while viewing consolidated data across all locations from a single dashboard.',
  },
  {
    question: 'Does Hulm Solutions work on mobile devices?',
    answer:
      'Yes. Hulm Solutions includes a mobile POS interface. Sales staff can process transactions, check stock, and manage customer accounts directly from smartphones or tablets — ideal for businesses that need flexibility on the shop floor.',
  },
  {
    question: 'What is the difference between Hulm Solutions and a standard POS system?',
    answer:
      'A standard POS system only handles billing. Hulm Solutions is a full business operating system. It integrates POS with inventory, purchasing, vendor management, customer management, logistics, ecommerce, and analytics — all in one cloud platform. No third-party integrations needed.',
  },
  {
    question: 'Is Hulm Solutions available internationally?',
    answer:
      'Yes. While Hulm Solutions is built with Pakistani businesses as the primary focus — including local compliance and currency support — the underlying architecture is cloud-native and globally deployable. International businesses can use Hulm Solutions with region-specific configuration.',
  },
]

// Modules Data
const modules = [
  { name: 'Point of Sale (POS)', desc: 'Fast, accurate billing for any outlet — retail, restaurant, salon, bakery, pharmacy and more.' },
  { name: 'One-Click Retail Website', desc: 'Launch a fully functional ecommerce storefront integrated with live inventory — no developer needed.' },
  { name: 'Live Stock Management', desc: 'Real-time inventory tracking across multiple warehouses with barcode scanning and auto-reorder alerts.' },
  { name: 'Purchase Management', desc: 'Automate purchase orders, supplier payments, and vendor credit balances in one workflow.' },
  { name: 'Order Management', desc: 'Track every sales order from placement to delivery with status updates and customer notifications.' },
  { name: 'Customer Management', desc: 'Maintain customer profiles, purchase history, loyalty points, and receivable balances.' },
  { name: 'Vendor Management', desc: 'Manage supplier contracts, PO history, credit terms, and performance reports.' },
  { name: 'Logistics Management', desc: 'Control driver assignments, delivery routes, vehicle tracking, and dispatch records.' },
  { name: 'Reporting & Analytics', desc: 'Daily P&L, tax reports, sales margins, inventory valuation, and FBR-compliant invoicing.' },
]

// Industry Solutions Data
const industries = [
  { name: 'Retail Store', challenge: 'Manual billing errors, stockouts, no real-time visibility', solution: 'POS + live inventory sync + low-stock alerts' },
  { name: 'Restaurant / Cafe', challenge: 'Order mix-ups, slow checkout, table management chaos', solution: 'Table-linked POS, kitchen display, one-click billing' },
  { name: 'Pharmacy / Medical', challenge: 'Expiry tracking, FBR compliance, controlled-substance logs', solution: 'Batch/expiry tracking, FBR-ready invoicing, analytics' },
  { name: 'Salon & Beauty', challenge: 'Appointment gaps, service tracking, staff commission errors', solution: 'Service-based POS, stylist reporting, booking integration' },
  { name: 'Bakery', challenge: 'Daily production vs. sales mismatch, wastage, cash gaps', solution: 'Production-linked inventory, daily P&L, cash reconciliation' },
  { name: 'Clothing Store', challenge: 'Size/variant confusion, seasonal stock, return management', solution: 'SKU-level variant tracking, seasonal reports, easy returns' },
  { name: 'Electric Shop', challenge: 'High-value item security, warranty tracking, credit sales', solution: 'Serial number tracking, warranty logs, customer ledger' },
  { name: 'Manufacturing', challenge: 'Raw material wastage, production costing, vendor delays', solution: 'BOM-linked purchasing, vendor order tracking, cost reports' },
]

// Local compliance Data
const complianceItems = [
  { title: 'FBR Compliance', desc: 'FBR-compliant invoicing built directly into the POS and billing modules.' },
  { title: 'PKR Currency Formatting', desc: 'PKR formatting with support for multi-currency for export businesses.' },
  { title: 'Low-Bandwidth Capability', desc: 'Works across Pakistans varied connectivity environments, including low-bandwidth and offline modes.' },
  { title: 'Globally Ready Architecture', desc: 'Cloud architecture that allows deployment for international clients with region-specific compliance adjustments.' },
  { title: 'Multilingual Support', desc: 'Arabic and Urdu label support for businesses serving multilingual customers.' },
]

export function HulmSolutionsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Construct FAQPage Schema Markup
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="lu-shell relative overflow-hidden px-6 py-28 text-white lg:px-12 lg:py-36">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <Breadcrumbs />
          <div className="mb-8 flex justify-start">
            <img
              src="https://hulmsolutions.com/wp-content/uploads/2024/10/logo-hulm.svg"
              alt="Hulm Solutions Logo"
              className="h-12 w-auto brightness-0 invert"
            />
          </div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">
            Ecosystem Product
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            Hulm Solutions: Cloud POS & Business Management Software
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Hulm Solutions is the operating system for your business — connecting your sales floor, stockroom, purchasing team, vendors, and analytics into one unified, cloud-based platform.
          </p>
        </div>
      </section>

      {/* Origin Story & Problems Section */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">The Realisation</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              Software built for the way businesses actually operate.
            </h2>
            <div className="text-lg leading-8 text-slate-600 space-y-4">
              <p>
                When we started Logic Unit over 15 years ago, we saw the same problem repeating itself across every industry we worked with. A shop owner in Karachi was writing sales receipts by hand. A cafe manager in Lahore had no idea how much stock was left in the kitchen. A clothing retailer in Islamabad was running three separate Excel sheets to track customers, purchases, and sales.
              </p>
              <p>
                That realisation drove us to build Hulm Solutions — a suite of cloud-based SaaS products designed from the ground up for Pakistani and global businesses.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-6 bg-white border border-[rgba(16,39,122,0.1)] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#071330] mb-6">Core Operational Leaks We Solve:</h3>
            <ul className="space-y-4 text-slate-600">
              {[
                'Billing errors and manual sales disputes',
                'Delayed inventory logs causing stockouts',
                'Complex FBR compliance and sales tax tracking',
                'Scattered purchase spreadsheets and vendor issues',
                'Invisible customer credit and receivable balances',
                'Handwritten delivery dispatcher sheets',
                'Belated reports received at month-end instead of daily',
              ].map((leak, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-lg leading-none select-none mt-1">✕</span>
                  <span>{leak}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="lu-section bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Modules Suite</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              One Unified Operating System
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Every module communicates with the others in real time. When a sale is processed in POS, inventory levels update instantly. When a purchase order is received, vendor balances adjust automatically.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <article key={m.name} className="lu-card p-6 bg-[#fbfaf6]">
                <h3 className="text-lg font-bold text-[#10277a] mb-2">{m.name}</h3>
                <p className="text-sm leading-6 text-slate-600">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Configuration Grid */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Industry Configurations</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Tailored Workflows for 10+ Categories
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We did not build one generic software and force every industry into it. A pharmacy never sees restaurant table management features cluttering their interface.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((ind) => (
              <article key={ind.name} className="bg-white border border-[rgba(16,39,122,0.08)] p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#071330] border-b border-slate-100 pb-3 mb-4">{ind.name}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-slate-400 block uppercase tracking-wider text-[10px]">Key Challenge</span>
                    <p className="text-slate-700">{ind.challenge}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#7bd72f] block uppercase tracking-wider text-[10px]">Hulm Solution</span>
                    <p className="text-slate-800 font-medium">{ind.solution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="lu-section bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Localization</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Built for Pakistan. Ready for the World.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-8">
              Most international SaaS products treat Pakistan as an afterthought. Hulm Solutions was engineered differently — Pakistan-first in its compliance design, globally ready in its architecture.
            </p>
          </div>
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {complianceItems.map((item) => (
              <div key={item.title} className="border-l-4 border-[#7bd72f] pl-4">
                <h3 className="text-lg font-bold text-[#071330] mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Background Section */}
      <section className="lu-shell px-6 py-24 text-white lg:px-12">
        <div className="mx-auto max-w-5xl text-center space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Logic Unit R&D</span>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            15+ Years of Product Engineering Behind Every Line of Code
          </h2>
          <p className="text-lg leading-8 text-slate-200 max-w-4xl mx-auto">
            Logic Unit is not a startup that built a POS app over a weekend. We are a product engineering and operating company. Our engineering team has spent years in the trenches with business owners — watching how a sale is actually made, how stock is actually counted, and how a vendor dispute unfolds. As a product operating company, we continue to run, maintain, update, and scale Hulm Solutions in the cloud, delivering continuous improvement to your business.
          </p>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="lu-section bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Key Capabilities</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              What Sets Hulm Solutions Apart
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Enterprise-grade performance engineered for real-world reliability, giving business owners complete control and visibility.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border border-[rgba(16,39,122,0.08)] bg-[#fbfaf6] p-8 relative flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <span className="text-xs font-bold text-[#7bd72f] uppercase tracking-wider block mb-4">01 / E-Commerce</span>
                <h3 className="text-2xl font-bold text-[#071330] mb-4">One-Click Retail Website Builder</h3>
                <p className="text-slate-600 text-sm leading-6">
                  No developer, no agency, no delay. With Hulm Solutions, any retail business can launch a fully functional online store in one click. The website pulls live inventory data directly from the POS system — so the same stock you manage in-store is the stock that appears online. No double entry. No sync errors.
                </p>
              </div>
            </div>
            <div className="border border-[rgba(16,39,122,0.08)] bg-[#fbfaf6] p-8 relative flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <span className="text-xs font-bold text-[#7bd72f] uppercase tracking-wider block mb-4">02 / Inventory Control</span>
                <h3 className="text-2xl font-bold text-[#071330] mb-4">Live Stack Management</h3>
                <p className="text-slate-600 text-sm leading-6">
                  Hulm's live stack management goes beyond basic inventory counting. It tracks stock movement in real time across multiple locations, triggers purchase requests when thresholds are hit, logs every transfer between warehouses, and gives managers a live view of their entire physical stock at any moment.
                </p>
              </div>
            </div>
            <div className="border border-[rgba(16,39,122,0.08)] bg-[#fbfaf6] p-8 relative flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <span className="text-xs font-bold text-[#7bd72f] uppercase tracking-wider block mb-4">03 / Analytics</span>
                <h3 className="text-2xl font-bold text-[#071330] mb-4">Reporting & Analytics Dashboard</h3>
                <p className="text-slate-600 text-sm leading-6">
                  Business owners who used to wait until month-end for a picture of their performance now see it in real time. Daily sales margins, product-level profit analysis, vendor payment summaries, customer acquisition trends, and FBR-ready tax reports are all available on demand — from any device, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Support</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-[rgba(16,39,122,0.08)] shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 font-bold text-left text-[#071330] hover:text-[#10277a] focus:outline-none"
                  type="button"
                >
                  <span>{faq.question}</span>
                  <span className="text-[#7bd72f] text-xl ml-4 select-none">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 border-t border-slate-50 leading-7">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              Ready to Give Your Business the Operating System It Deserves?
            </h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Explore Hulm Solutions, visit the product website, or contact the Logic Unit team to discuss how this platform can be configured for your specific industry and scale.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row flex-shrink-0">
            <Link
              href="/ecosystem"
              className="border border-[#10277a] px-6 py-3 text-center text-sm font-semibold text-[#10277a] hover:bg-[#f4f7fb] whitespace-nowrap no-underline"
            >
              Explore Ecosystem
            </Link>
            <a
              href="https://hulmsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7bd72f] px-6 py-3 text-center text-sm font-bold text-[#071330] hover:bg-[#93e74e] whitespace-nowrap no-underline"
            >
              Visit Hulm Solutions
            </a>
            <Link
              href="/contact"
              className="bg-[#10277a] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#071330] whitespace-nowrap"
            >
              Contact Logic Unit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
