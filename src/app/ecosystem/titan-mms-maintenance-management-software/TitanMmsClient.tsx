'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

// FAQs Data
const faqs = [
  {
    question: 'What is Titan CMMS and who developed it?',
    answer:
      'Titan CMMS is a cloud-based Maintenance Management Software (CMMS) and Asset Management platform developed and engineered by Logic Unit. It is designed to help organizations across multiple industries streamline maintenance operations, manage asset lifecycles, reduce downtime, and improve regulatory compliance.',
  },
  {
    question: 'What industries does Titan CMMS serve?',
    answer:
      'Titan CMMS is built for organizations across manufacturing, healthcare, hospitality, construction, education, warehousing, commercial facilities, utilities, retail, and logistics. The platform\'s flexible architecture allows it to be configured for the specific operational requirements of each sector.',
  },
  {
    question: 'What is the difference between CMMS software and EAM software?',
    answer:
      'CMMS (Computerized Maintenance Management System) software focuses on managing maintenance work orders, scheduling, and technician coordination. EAM (Enterprise Asset Management) software extends this to include the full asset lifecycle, including procurement, depreciation, and retirement. Titan CMMS combines both capabilities in a single platform.',
  },
  {
    question: 'Is Titan CMMS available as a cloud-based solution?',
    answer:
      'Yes. Titan CMMS is delivered as a true SaaS platform hosted on cloud infrastructure. Organizations access the platform through a web browser or mobile application, with no local server installation required. Updates and new features are deployed continuously without operational disruption.',
  },
  {
    question: 'Can Titan CMMS support multiple sites or locations?',
    answer:
      'Yes. Titan CMMS is specifically designed for multi-site operations. Organizations can manage assets, maintenance schedules, work orders, and reporting across multiple facilities, warehouses, or geographic locations from a single platform with consolidated and site-level reporting views.',
  },
  {
    question: 'How does Titan CMMS help with preventive maintenance compliance?',
    answer:
      'Titan CMMS automates PM scheduling based on calendar intervals, meter readings, or operational triggers. When maintenance is performed, technicians complete digital checklists and submit photographic evidence through the mobile app — creating a complete, auditable compliance record that is always accessible for regulatory inspections.',
  },
  {
    question: 'What are the integration capabilities of Titan CMMS?',
    answer:
      'Titan CMMS is built with an open API architecture that enables integration with ERP platforms, financial systems, procurement tools, IoT sensor networks, and building management systems. The Logic Unit engineering team works directly with enterprise customers to design and implement integration solutions.',
  },
  {
    question: 'What future capabilities are planned for Titan CMMS?',
    answer:
      'Logic Unit\'s product roadmap for Titan CMMS includes AI-powered predictive maintenance, IoT asset health monitoring, advanced analytics and benchmarking, expanded enterprise workflow automation, and deeper ERP ecosystem integrations. These capabilities are being developed in direct response to feedback from Titan CMMS customers.',
  },
]

// Modules Data
const modules = [
  { name: 'Asset Management', desc: 'A complete digital asset register with full lifecycle tracking — from procurement and commissioning to retirement. Access history, warranty, and logs in one place.' },
  { name: 'Preventive Maintenance', desc: 'Replace missed schedules with automated calendar-based and meter-based triggers. Setup plans at asset level and let the system handle scheduling.' },
  { name: 'Work Order Management', desc: 'Create, assign, prioritize, and track work orders in real time. Technicians update status from the field and attach photos without paperwork.' },
  { name: 'Downtime Monitoring', desc: 'Real-time equipment status tracking and downtime logging. Understand where breakdowns happen, how long assets are offline, and the OEE impact.' },
  { name: 'Inventory & Spare Parts', desc: 'Connect maintenance to spare parts stock. Technicians check parts availability before going to the job. Avoid stockouts with auto-alerts.' },
  { name: 'Facility Management', desc: 'Dedicated workflows for physical infrastructure — buildings, HVAC, electrical, and safety equipment, including space and compliance tracking.' },
  { name: 'Mobile Maintenance', desc: 'Access work orders, update asset records, log time, and capture inspection findings from smartphones or tablets — even without internet connectivity.' },
  { name: 'Reporting & Analytics', desc: 'Management dashboards, KPI tracking, and reports. Evaluate cost per asset, track mean time between failures (MTBF), and improve budget visibility.' },
]

// Industry Solutions Data
const industries = [
  { name: 'Manufacturing', challenge: 'Unplanned production stoppages', solution: 'Automated PM scheduling and downtime monitoring', outcome: 'Higher OEE and reduced production losses' },
  { name: 'Healthcare', challenge: 'Medical equipment compliance gaps', solution: 'Inspection management and audit-ready records', outcome: 'Regulatory compliance and patient safety' },
  { name: 'Hospitality', challenge: 'Guest experience disruption from facility failures', solution: 'Preventive facility maintenance workflows', outcome: 'Fewer complaints, higher guest satisfaction scores' },
  { name: 'Construction', challenge: 'Equipment failure on project timelines', solution: 'Mobile work orders and equipment tracking', outcome: 'Reduced project delays and equipment hire costs' },
  { name: 'Education', challenge: 'Campus facility management complexity', solution: 'Multi-building asset register and scheduling', outcome: 'Lower facility operating costs' },
  { name: 'Warehousing', challenge: 'Material handling equipment breakdowns', solution: 'Equipment PM schedules and inventory integration', outcome: 'Higher throughput and reduced handling downtime' },
  { name: 'Commercial Facilities', challenge: 'Multi-system compliance and vendor coordination', solution: 'Vendor management and compliance tracking', outcome: 'Audit readiness and cost control' },
]

// Tech Features Data
const techFeatures = [
  { title: 'SaaS Architecture', desc: 'True multi-tenant SaaS platform. Access the full feature set via web browser or mobile app, with no local server installation or downtime for updates.' },
  { title: 'Cloud-Based Deployment', desc: 'Consistent performance for single-site or multi-country operations. Automatic backups and built-in disaster recovery.' },
  { title: 'Enterprise Scalability', desc: 'Scales seamlessly whether you manage 50 assets or 50,000, without requiring infrastructure reinvestment.' },
  { title: 'Security & Compliance', desc: 'Role-based access control, detailed audit logs, encrypted transmission, and data residency options for regulated industries.' },
  { title: 'Workflow Automation', desc: 'Automated work order generation, notification routing, escalation rules, and approval gates to eliminate administration overhead.' },
]

export function TitanMmsClient() {
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
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#7bd72f]">
            Ecosystem Product
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            Titan CMMS: Enterprise Maintenance Management Software
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-200">
            A cloud-based CMMS and Asset Management platform built for organizations that can no longer afford to run their operations on spreadsheets, paper-based work orders, and disconnected maintenance tools.
          </p>
        </div>
      </section>

      {/* Origin Story & Problems Section */}
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">The Operational Challenge</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              When equipment fails, the cost is never just the repair bill.
            </h2>
            <div className="text-lg leading-8 text-slate-600 space-y-4">
              <p>
                There is lost production, a scramble to reassign technicians, frustrated customers, and a compliance log that now has a gap nobody can explain. Multiply that by hundreds of assets across multiple facilities, and reactive maintenance becomes a serious drag on profitability.
              </p>
              <p>
                Drawing on software product engineering experience since 2013, Logic Unit built Titan CMMS to give maintenance teams the visibility, control, and automation they need to operate at peak efficiency.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-6 bg-white border border-[rgba(16,39,122,0.1)] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#071330] mb-6">Core Maintenance Challenges We Solve:</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              {[
                'Unplanned equipment downtime causing production losses',
                'Poor asset visibility and fragmented equipment history',
                'Manual, paper-based tracking creating compliance and audit gaps',
                'Missed preventive schedules leading to accelerated asset wear',
                'Inefficient work order dispatching and status tracking',
                'Spare parts inventory shortages discovered during breakdowns',
                'High costs driven by reactive "break-fix" operations',
                'Technician coordination issues in multi-site or multi-shift setups',
                'Data silos preventing managers from making data-driven choices',
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
            <h3 className="text-2xl font-bold text-[#071330] mb-4">The Market Gap We Identified</h3>
            <p className="text-slate-600 leading-7 max-w-5xl">
              Despite the clear operational cost of poor maintenance management, a large number of mid-market and enterprise organizations were still running their maintenance operations on tools that were never designed for the job — using Excel sheets, paper logs, and legacy systems that required expensive on-premises servers. Titan CMMS was engineered to fill this gap, combining enterprise-grade capabilities with modern cloud usability.
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
              Integrated CMMS & Asset Management
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tightly integrated functional modules designed to manage the full asset lifecycle and streamline daily maintenance workflows.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <article key={m.name} className="lu-card p-6 bg-[#fbfaf6] hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-[#10277a] mb-3">{m.name}</h3>
                <p className="text-xs leading-5 text-slate-600">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Features Section */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Engineering Excellence</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Technically Engineered to Scale
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-8">
              Titan CMMS is architected with modern software design principles, ensuring reliability under heavy enterprise transaction loads and native integration readiness.
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

      {/* Measurable Impact Section */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Business Value</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Measurable Business Impact
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Preventive PM Strategy', desc: 'Shift from reactive "break-fix" to planned scheduled tasks, extending physical asset lifespan.' },
              { title: 'Reduced Downtime', desc: 'Systematic PM execution and meter tracking decrease unplanned equipment failures.' },
              { title: 'Audit Readiness', desc: 'Maintain complete digital compliance and inspection histories always available for audits.' },
              { title: 'Resource Efficiency', desc: 'Coordinate multi-site technician teams instantly via real-time mobile work orders.' },
            ].map((impact, i) => (
              <div key={i} className="border border-[rgba(16,39,122,0.08)] bg-[#fbfaf6] p-6 hover:shadow-sm transition-all">
                <span className="text-3xl font-bold text-[#7bd72f] block mb-4">0{i+1}</span>
                <h3 className="text-lg font-bold text-[#071330] mb-2">{impact.title}</h3>
                <p className="text-sm text-slate-600 leading-6">{impact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Configuration Grid */}
      <section className="lu-section bg-[#f4f7fb] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Industry Applications</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Configured for Diverse Sectors
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Titan CMMS adapts its workflows to match the compliance, reporting, and operational requirements of each sector.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <article key={ind.name} className="bg-white border border-[rgba(16,39,122,0.08)] p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#071330] border-b border-slate-100 pb-3 mb-4">{ind.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-slate-400 block uppercase tracking-wider text-[10px]">Key Challenge</span>
                      <p className="text-slate-700">{ind.challenge}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#10277a] block uppercase tracking-wider text-[10px]">Titan CMMS Solution</span>
                      <p className="text-slate-800 font-medium">{ind.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-50">
                  <span className="font-semibold text-[#7bd72f] block uppercase tracking-wider text-[10px]">Business Outcome</span>
                  <p className="text-slate-800 font-bold text-xs">{ind.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Built It */}
      <section className="lu-shell px-6 py-24 text-white lg:px-12">
        <div className="mx-auto max-w-5xl text-center space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Product Philosophy</span>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Why Logic Unit Built Titan CMMS
          </h2>
          <p className="text-lg leading-8 text-slate-200 max-w-4xl mx-auto">
            The decision to develop Titan CMMS came from years of conversations with operations managers, maintenance supervisors, and facility directors. They had ERP systems for finance and HR, but maintenance management was left as an afterthought. We believed that maintenance operations deserved the same software craftsmanship and engineering quality as enterprise financial platforms.
          </p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#7bd72f]">Product Roadmap</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl mt-2">
              Future Roadmap
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              Maintenance management is undergoing a transformation. Titan CMMS keeps organizations at the forefront of what is operationally possible.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { phase: 'AI-Powered Insights', desc: 'Predictive failure analysis based on historical maintenance data and operational patterns.' },
              { phase: 'Predictive Maintenance Integration', desc: 'Connecting real-time machine sensor telemetry to scheduling algorithms to anticipate breakdowns.' },
              { phase: 'IoT Asset Monitoring', desc: 'Native integrations with smart sensors and building management systems (BMS) for continuous diagnostics.' },
              { phase: 'Extended API Ecosystem', desc: 'Deeper pre-built integrations with major ERP platforms and enterprise financial systems.' },
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
      <section className="lu-section bg-[#fbfaf6] px-6 py-24 lg:px-12">
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
      <section className="bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#071330] md:text-5xl">
              Ready to Optimize Your Maintenance Workflows?
            </h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Explore Titan CMMS, visit the product website, or contact the Logic Unit team to discuss how this platform can be configured for your specific industry assets and scale.
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
              href="https://titanmms.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7bd72f] px-6 py-3 text-center text-sm font-bold text-[#071330] hover:bg-[#93e74e] whitespace-nowrap no-underline"
            >
              Visit Titan CMMS
            </a>
            <Link
              href="/contact?cta=product-titan-cmms&page_type=product&inquiry_type=titan_cmms&interest=titan-cmms"
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
