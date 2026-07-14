import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';

export const metadata: Metadata = {
  title: 'Enterprise Collaboration | Logic Unit',
  description: 'Logic Unit works with enterprises on co-development, secure cloud deployments, and long-term operating partnerships for vertical SaaS.',
  alternates: {

      canonical: '/partnerships/enterprise-collaboration',

  },

  openGraph: {

      url: '/partnerships/enterprise-collaboration',

  },
};

export default function EnterpriseCollaborationPage() {
  const sections = [
    {
      title: 'Overcoming Enterprise Software Barriers',
      body: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            Large organizations face significant hurdles when modernizing their core operational systems. Building custom software internally often leads to ballooning budgets and delayed timelines, while off-the-shelf software rarely fits complex, industry-specific workflows.
          </p>
          <p>
            Logic Unit provides a balanced alternative. We collaborate with enterprise IT and operations teams to deploy mature SaaS platforms, configuring them to match the organization&apos;s specific processes without the risk of starting from scratch.
          </p>
        </div>
      ),
    },
    {
      title: 'Enterprise-Grade Security & Infrastructure',
      body: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            We ensure our platforms meet strict enterprise security standards. Our systems are built on high-availability cloud infrastructure and support key governance requirements:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Single Sign-On (SSO):</strong> Seamless integration with Active Directory and SAML providers.</li>
            <li><strong>Data Security:</strong> End-to-end encryption for both data in transit and at rest.</li>
            <li><strong>Compliance Auditing:</strong> Full audit logging to track user activity and data changes.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Collaborative Co-Development Models',
      body: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            Our enterprise collaboration model is based on shared expertise. Logic Unit provides the core technology, while our enterprise partners contribute their deep domain knowledge.
          </p>
          <p>
            Through joint steering committees and agile sprints, we co-develop features and integrations, ensuring the software adapts to the evolving operational needs of the enterprise.
          </p>
        </div>
      ),
    },
    {
      title: 'Long-Term Support & Service Level Agreements',
      body: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            We stand behind the platforms we operate. Every enterprise partnership is backed by clear Service Level Agreements (SLAs) covering:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>System Uptime:</strong> High-availability guarantees supported by redundant cloud nodes.</li>
            <li><strong>Issue Response:</strong> Tiered support channels with defined response timelines.</li>
            <li><strong>Continuous Updates:</strong> Seamless security patches and feature updates without downtime.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <SubPageTemplate
      eyebrow="Enterprise Collaboration"
      h1="Enterprise collaboration for industry-specific SaaS platforms."
      heroBody="Logic Unit works with enterprises seeking platform partnerships, infrastructure collaboration, and industry-specific digital transformation."
      sections={sections}
      ctaTitle="Start an enterprise collaboration inquiry."
      backText="Back to Partnerships"
      backHref="/partnerships"
    />
  );
}
