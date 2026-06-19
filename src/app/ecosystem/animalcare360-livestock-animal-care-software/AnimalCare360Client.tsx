'use client'

import { useState } from 'react'
import Link from 'next/link'

// FAQs Data
const faqs = [
  {
    question: 'What is AnimalCare360 and who developed it?',
    answer: 'AnimalCare360 is a cloud-based ERP platform developed by Logic Unit, a Pakistani software engineering company with over 15 years of experience. It is built specifically for livestock farms, dairy and poultry operations, wanda feed retailers, animal traders, maweshi mandis, pet hospitals, and veterinary clinics across Pakistan. The platform covers animal records, inventory, trading, sales, FBR invoicing, and clinical management in a single integrated system.',
  },
  {
    question: 'Is AnimalCare360 compliant with FBR invoicing requirements in Pakistan?',
    answer: 'Yes. AnimalCare360 is fully FBR-compliant. The platform automatically generates QR-coded sales invoices, maintains purchase tax records, and produces complete digital audit trails that meet Federal Board of Revenue requirements. This applies to all modules including wanda retail, animal trading, and pet hospital billing.',
  },
  {
    question: 'What types of businesses can use AnimalCare360?',
    answer: 'AnimalCare360 serves cattle farms, dairy farms, poultry operations, fattening lot managers, wanda feed shops, feed distributors, pet food retailers, veterinary pharmacies, animal traders, livestock markets (maweshi mandis), pet hospitals, and veterinary clinics. It is equally suited to small single-location businesses and large multi-branch enterprises.',
  },
  {
    question: 'Does AnimalCare360 have a mobile app for Android?',
    answer: 'Yes. AnimalCare360 provides an Android mobile application designed for field teams, farm managers, and traveling traders who need access to animal records, inventory, and sales data away from a desktop. The app is available for download at animalcare360.com/download-app.',
  },
  {
    question: 'What is the CattlePro module in AnimalCare360?',
    answer: 'CattlePro is the livestock and dairy farm management component of AnimalCare360, comprising 16 operating modules. It covers complete animal lifecycle tracking from purchase or birth to sale, including breed classification, daily milk yield recording, health and vaccination management, weight gain (ADG) monitoring, palai partnership ROI reporting, and FBR-compliant sales documentation.',
  },
  {
    question: 'Can AnimalCare360 be used by wanda shops and feed retailers?',
    answer: 'Yes. The Wanda & Feed Retail ERP module is purpose-built for wanda shops, feed distributors, pet food stores, and veterinary pharmacies. It includes a high-speed POS, multi-warehouse inventory with batch expiry tracking, customer credit (khata) management, supplier purchase order management, and automatic FBR QR invoice generation.',
  },
  {
    question: 'How does AnimalCare360 support pet hospitals and veterinary clinics?',
    answer: 'AnimalCare360\'s Pet Hospital ERP module provides complete digital EMR for patients, multi-doctor appointment scheduling with WhatsApp reminders, surgery and lab record management, pharmacy inventory with expiry alerts, and FBR-compliant billing. Early adopter clinics reported a 40% reduction in administrative overhead after implementation.',
  },
  {
    question: 'What makes AnimalCare360 different from generic ERP software?',
    answer: 'Unlike generic ERP platforms adapted from other industries, AnimalCare360 was researched and built specifically for Pakistan\'s animal care sector. It natively understands concepts like palai partnerships, maweshi mandi transactions, wanda khata credit, and veterinary patient continuity. It is also optimized for Pakistan\'s infrastructure — mobile-first on Android, WhatsApp-native support, and FBR compliance built in from day one.',
  },
]

// Modules Data
const modules = [
  { name: 'Cattle & Dairy Farm ERP (CattlePro)', desc: 'CattlePro covers 16 operating modules. Track complete lifecycle tags, milk yields, fattening weight gain (ADG/FCR), vaccines, palai profit-sharing, feed sync, and FBR audits.' },
  { name: 'Wanda & Feed Retail ERP', desc: 'POS billing, multi-warehouse inventory with expiry alerts, customer credit (khata) thresholds, supplier purchase orders, and automatic FBR QR invoice printing.' },
  { name: 'Animal Trading & Maweshi Mandi ERP', desc: 'Log individual animal deals, track lot commissions, transportation costs, ownership transfer documents, and view real-time profitability dashboards.' },
  { name: 'Pet Hospital & Vet Clinic ERP', desc: 'Electronic medical records (EMR), doctor scheduling with WhatsApp appointment reminders, lab reports, pharmacy billing, and FBR invoicing.' },
]

// Industries served data
const industries = [
  { name: 'Cattle & Dairy Farms', challenge: 'No digital tag records; missed vaccinations; opaque palai partnerships', solution: 'Herd tag tracking, automated health alerts, palai ROI cost-sharing logs', outcome: 'Zero record loss, reduced mortality, dispute-free palai shares' },
  { name: 'Dairy & Poultry Ops', challenge: 'Manual daily milk yields; untracked animal-wise feed consumption', solution: 'CattlePro daily yield trends, direct feed sync to animal profiles', outcome: 'Informed culling, clear cost-per-animal visibility' },
  { name: 'Feed & Wanda Shops', challenge: 'Ghost stock; write-offs from expired bags; manual khata credit tracking', solution: 'Multi-warehouse sync, batch tracking with expiry alerts, digital khata limits', outcome: '99.9% inventory accuracy, reduced waste, improved credit collection' },
  { name: 'Trading & Mandis', challenge: 'No deal margin tracking; lost ownership transfer documents', solution: 'Deal-level cost logs (commissions, transport), digital transfer sheets', outcome: 'Clear transaction profits, faster dispute-free mandi sales' },
  { name: 'Pet Hospitals & Vets', challenge: 'Paper EMR loss; scheduling no-shows; pharmacy billing leakage', solution: 'Digital EMR, automated WhatsApp reminders, integrated dispensary billing', outcome: '40% admin overhead reduction, higher patient throughput' },
]

// Tech Features Data
const techFeatures = [
  { title: 'SaaS Architecture', desc: 'Subscription-based delivery with no local server setups or database installations required. System stays updated continuously.' },
  { title: 'Cloud Infrastructure', desc: 'Secure, always-on access from anywhere via web browser and native Android mobile application.' },
  { title: 'Multi-Branch & Location', desc: 'Centralized stock control, inventories, and unified financial reporting across multiple farms, shops, or clinics.' },
  { title: 'Pakistan compliance', desc: 'FBR compliant QR invoice printing, tax reconciliation, PKR formatting, and low-bandwidth/offline support.' },
  { title: 'WhatsApp Reminders', desc: 'Customer reminders, notifications, and onboarding touchpoints delivered natively via Pakistan\'s dominant messaging channel.' },
]

export function AnimalCare360Client() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero Section */}
      <section className="lu-shell relative overflow-hidden px-6 py-28 text-white lg:px-12 lg:py-36">
        <div className="lu-grid absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">
            Ecosystem Product
          </p>
          <h1 className="max-w-6xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            AnimalCare360: Pakistan's Most Complete Animal Care & Livestock ERP
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            Pakistan's #1 Cloud ERP for cattle farms, feed retailers, livestock trading, and pet clinics. Purpose-built, FBR-compliant, and WhatsApp-integrated.
          </p>
        </div>
      </section>

      {/* Origin Story & Problems Section */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">A Software Story Born in the Fields</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              Pakistan is home to one of the world's largest livestock economies.
            </h2>
            <div className="text-lg leading-8 text-slate-600 space-y-4">
              <p>
                With over 200 million animals, the industry generates billions of rupees. Yet, most farms, wanda shops, maweshi mandis, and clinics were running entirely on paper registers, notebooks, and disconnected spreadsheets.
              </p>
              <p>
                Logic Unit engineered AnimalCare360 from the ground up. Not as a generic software retrofit, but as a purpose-built digital ecosystem designed for Pakistan's operational realities.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-6 bg-white border border-[rgba(16,39,122,0.1)] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#071330] mb-6">Core Operational Gaps We Solve:</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              {[
                'Informal animal records and tag histories scribbled in notebooks',
                'Manual tracking of milk yields, fattening ADG, and animal weight',
                'Missed vaccination schedules leading to higher animal mortality risk',
                'Palai (profit-sharing) partnership disputes due to informal agreements',
                'Khata (customer credit) tracked on paper in wanda and feed shops',
                'FBR non-compliance and tax audit exposure for retailers',
                'Inefficient animal trading transactions with zero margin visibility',
                'Paper-based patient medical records lost in veterinary clinics',
                'Double-booked veterinary appointments and no-shows',
              ].map((leak, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-base leading-none select-none mt-1">✕</span>
                  <span>{leak}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Market Gap Panel */}
      <section className="bg-white px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="bg-[#f4f7fb] border border-[rgba(16,39,122,0.08)] p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#071330] mb-4">Identifying the Market Gap</h3>
            <p className="text-slate-600 leading-7 max-w-5xl">
              Most standard ERP software has no understanding of animal lifecycles, livestock trading mechanics, or veterinary workflows. Feed retailers were using grocery POS apps that couldn't handle batch expirations or wanda khata credits, and cattle farms used nothing. AnimalCare360 bridges this gap with software that natively knows what a palai partnership is, how a mandi operates, and how vetenaries track patients.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="lu-section bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Modules Suite</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Four Tightly Integrated Modules
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Each module serves the distinct workflows of different animal care businesses, sharing a unified data layer, cloud infrastructure, and reporting engine.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((m, idx) => (
              <article key={m.name} className="lu-card p-8 bg-[#fbfaf6] hover:shadow-md transition-shadow relative">
                <span className="text-xs font-bold text-[#7bd72f] block mb-2">MODULE 0{idx + 1}</span>
                <h3 className="text-xl font-bold text-[#10277a] mb-4">{m.name}</h3>
                <p className="text-sm leading-6 text-slate-600">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Features Section */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Product Architecture</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Built for Pakistan's Realities
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-8">
              AnimalCare360 is optimized for low-bandwidth environments, supports Android mobile devices natively, and uses WhatsApp as a primary notification channel.
            </p>
          </div>
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            {techFeatures.map((item) => (
              <div key={item.title} className="border-l-4 border-[#7bd72f] pl-4">
                <h3 className="text-lg font-bold text-[#071330] mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="bg-[#071330] text-white px-6 py-20 lg:px-12 text-center relative overflow-hidden">
        <div className="lu-grid absolute inset-0 opacity-10" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl space-y-6">
          <span className="text-xs font-bold text-[#7bd72f] uppercase tracking-wider block">Early Adopter Success</span>
          <p className="text-2xl md:text-3xl font-medium italic leading-relaxed text-slate-100">
            "AnimalCare360 has reduced our administrative overhead by 40%. We spend more time with patients and less time on paperwork."
          </p>
          <span className="block text-sm font-semibold text-slate-400">— Senior Vet, Lahore Pet Clinic</span>
        </div>
      </section>

      {/* Industry Configuration Grid */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Industry Solutions</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Solutions & Tangible Outcomes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              How AnimalCare360 creates value across farms, retail counters, mandis, and pet clinics.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <article key={ind.name} className="bg-white border border-[rgba(16,39,122,0.08)] p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#071330] border-b border-slate-100 pb-3 mb-4">{ind.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-red-400 block uppercase tracking-wider text-[10px]">Key Challenge</span>
                      <p className="text-slate-700">{ind.challenge}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#10277a] block uppercase tracking-wider text-[10px]">AnimalCare360 Solution</span>
                      <p className="text-slate-800 font-medium">{ind.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-50">
                  <span className="font-semibold text-[#7bd72f] block uppercase tracking-wider text-[10px]">Outcome</span>
                  <p className="text-slate-800 font-bold text-xs">{ind.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Built It */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-5xl text-center space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Logic Unit R&D</span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
            Why Logic Unit Built AnimalCare360
          </h2>
          <p className="text-lg leading-8 text-slate-600 max-w-4xl mx-auto">
            The decision was not purely commercial. Technology should serve the industries that need it most. Pakistan's livestock sector contributes significantly to national GDP, but tech investment was near zero. Our team did not sit in an office — we spent months on farms and wanda shops in Punjab. We listened to managers who explained they spent their day in the field, so we prioritized an Android app. We listened to clinics who wanted WhatsApp alerts, not emails, so we built integrated chat notifications.
          </p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Ecosystem Roadmap</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Future Capabilities
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              We continue to invest in the evolution of AnimalCare360, focusing on intelligence and deeper field automation.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { phase: 'AI-Powered Livestock Analytics', desc: 'Predictive models for weight gain plateaus, optimal sell timings, and disease forecasts based on historical herd trends.' },
              { phase: 'IoT Ear Tag Integration', desc: 'Direct RFID ear tag scanning and automated smart milk meter data capture.' },
              { phase: 'Smart Wanda Inventory Forecasting', desc: 'Demand forecasting algorithms to plan feed inventory, reducing write-off risks and emergency shortages.' },
              { phase: 'Mobile Livestock Logistics Tracking', desc: 'GPS-enabled Android tracking for transported animal lots from farm to mandi.' },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start border-b border-slate-100 pb-6">
                <span className="text-xl font-extrabold text-[#7bd72f] bg-[#071330] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="text-lg font-bold text-[#071330] mb-1">{step.phase}</h4>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="lu-section bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Support FAQs</span>
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
      <section className="bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              Ready to Digitise Your Livestock Operations?
            </h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Join farms, wanda feed retailers, Maweshi Mandi operators, and clinics across Pakistan running on FBR-compliant software.
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
              href="https://animalcare360.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7bd72f] px-6 py-3 text-center text-sm font-bold text-[#071330] hover:bg-[#93e74e] whitespace-nowrap no-underline"
            >
              Visit AnimalCare360
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
