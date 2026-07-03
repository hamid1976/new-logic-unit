import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Software Platforms | Logic Unit',
  description: 'Logic Unit builds and operates industry-specific SaaS platforms for healthcare providers, patient engagement, and pharmaceutical compliance.',
  alternates: {
    canonical: '/industries/healthcare',
  },
};

export default function HealthcarePage() {
  const sections = [
    {
      title: 'Healthcare Digital Transformation & Compliance',
      body: (
        <div className="space-y-4">
          <p>
            The healthcare and pharmaceutical sectors operate under rigorous regulatory frameworks, demanding security, data integrity, and strict traceability. Fragmented patient intake, paper-based workflows, and manual communication logbooks lead to administrative inefficiency, patient dissatisfaction, and potential compliance audits.
          </p>
          <p>
            Logic Unit builds secure, high-performance software infrastructure for clinical workflows, patient engagement, and pharmaceutical compliance tracking. Our platforms use encrypted channels, role-based access controls, and real-time audits to ensure hospital and distributor operations meet high clinical governance standards.
          </p>
        </div>
      ),
    },
    {
      title: 'Ecosystem Product: Hospitello Patient Portal',
      body: (
        <div className="space-y-4">
          <p>
            As part of our healthcare portfolio, Hospitello is a digital patient engagement platform engineered to bridge the gap between healthcare facilities and their patients. Hospitello moves hospital administration away from manual telephone queues, moving scheduling and doctor communications into an intuitive mobile interface.
          </p>
          <p>
            Key Hospitello capabilities include secure online appointment booking, specialist discovery filters, real-time consultation reminders, interactive patient education guides, and an administrative dashboard to analyze patient engagement trends and clinic bottlenecks.
          </p>
          <div className="pt-2">
            <Link
              href="/ecosystem/hospitello"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Explore Hospitello Details &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Case Study: Nova Nordisk Sample Ordering App',
      body: (
        <div className="space-y-4">
          <p>
            To modernize the distribution of medical product samples to doctors, global pharmaceutical giant Nova Nordisk collaborated with Logic Unit to design a secure mobile ordering solution. We developed a native iOS application in Swift that combines training, product information, and request tracking.
          </p>
          <p>
            By guiding healthcare professionals through interactive responsibilities modules before submitting requests, the app ensures strict adherence to corporate policy, standardizes sample distribution audits, and reduces administrative overhead.
          </p>
          <div className="pt-2">
            <Link
              href="/case-studies/nova-nordisk-sample-ordering-application"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Read Nova Nordisk Case Study &rarr;
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Case Study: AGP Counterfeit Drug Verifier',
      body: (
        <div className="space-y-4">
          <p>
            To address the global risk of counterfeit medicines and secure the pharmaceutical supply chain, AGP partnered with Logic Unit to implement a comprehensive drug verification ecosystem. The solution provides end-to-end verification, from serialization on the manufacturing line to scanning in the field.
          </p>
          <p>
            The system incorporates unique 2D barcode serialization, instant consumer verification scanning, real-time tracking of scan locations, and compliance reporting tools that protect brand integrity and support public health safety.
          </p>
          <div className="pt-2">
            <Link
              href="/case-studies/agp-drug-verifier-platform"
              className="text-sm font-bold text-[#10277a] hover:text-[#071330] no-underline"
            >
              Read AGP Case Study &rarr;
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SubPageTemplate
      eyebrow="Healthcare"
      h1="Healthcare software platforms for real operating environments."
      heroBody="Logic Unit builds SaaS platforms for industries where operational software can improve visibility, coordination, and long-term efficiency. Healthcare is one of the industry categories served through the current Logic Unit ecosystem."
      sections={sections}
      ctaTitle="Discuss healthcare platform collaboration."
      backText="Back to Industries"
      backHref="/industries"
    />
  );
}
