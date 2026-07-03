import type { Metadata } from 'next';
import { SubPageTemplate } from '@/components/ui/SubPageTemplate';

export const metadata: Metadata = {
  title: 'System Integrator Partnerships | Logic Unit',
  description: 'Logic Unit works with system integrators for enterprise implementation, API deployment, and integration partnerships across industries.',
  alternates: {
    canonical: '/partnerships/system-integrators',
  },
};

export default function SystemIntegratorsPage() {
  const sections = [
    {
      title: 'Enterprise Integration Challenges',
      body: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            Deploying modern SaaS platforms in established enterprise environments requires connecting to legacy databases, custom ERP systems, active directories, and regional payment gateways. Without robust API middleware and data pipelines, integrations can become complex and difficult to maintain.
          </p>
          <p>
            Logic Unit partners with system integrators to bridge this gap. Our platforms feature documented RESTful APIs, webhooks, and secure data sync protocols that allow partners to connect our software to their clients&apos; existing IT ecosystems.
          </p>
        </div>
      ),
    },
    {
      title: 'Value Proposition for Integrators',
      body: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            By offering Logic Unit&apos;s tested industry platforms—such as Titan CMMS for asset maintenance or HULM POS for retail management—system integrators can deliver comprehensive solutions without building software from scratch.
          </p>
          <p>
            This partnership model reduces development risk, speeds up delivery timelines, and allows integrators to focus on configuration, consulting, and deployment services that add direct business value.
          </p>
        </div>
      ),
    },
    {
      title: 'Technical Enablement & Developer Sandboxes',
      body: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            We provide our system integrator partners with the resources needed for successful implementations:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Developer Sandboxes:</strong> Fully isolated testing environments to validate custom integrations safely.</li>
            <li><strong>API Documentation:</strong> Comprehensive Swagger/OpenAPI specifications.</li>
            <li><strong>Technical Support:</strong> Dedicated developer channels to resolve complex architectural queries quickly.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Partner Integration Workflows',
      body: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            To ensure smooth deployments, we follow a structured integration workflow:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Architectural Review:</strong> Defining data flows, authentication protocols, and integration points.</li>
            <li><strong>Sandbox Testing:</strong> Building and validating endpoints in our secure testing environment.</li>
            <li><strong>UAT & Launch:</strong> Conducting user acceptance testing and migrating to production under joint coordination.</li>
          </ol>
        </div>
      ),
    },
  ];

  return (
    <SubPageTemplate
      eyebrow="System Integrators"
      h1="System integrator partnerships for industry SaaS platforms."
      heroBody="Logic Unit works with system integrators connected to operational industries, implementation needs, deployment relationships, and integration conversations."
      sections={sections}
      ctaTitle="Start a system integrator conversation."
      backText="Back to Partnerships"
      backHref="/partnerships"
    />
  );
}
