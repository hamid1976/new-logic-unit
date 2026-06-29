import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ui/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'AnalyzeQuran | AI-Powered Quranic Research Platform',
  description: 'AnalyzeQuran is an AI-powered Quran study platform for root-word analysis, thematic research, translation comparison, and intelligent search.',
  alternates: {
    canonical: '/ecosystem/analyzequran',
  },
};

export default function Page() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'AnalyzeQuran',
    'applicationCategory': 'EducationalApplication',
    'operatingSystem': 'iOS, Android, Web',
  };

  const features = [
    {
      name: 'AI-Powered Search',
      description: 'Search by Arabic roots, keywords, topics, concepts, and themes.',
    },
    {
      name: 'Word-By-Word Analysis',
      description: 'Explore word meanings, root structures, usage patterns, and related verses.',
    },
    {
      name: 'Translation Comparison',
      description: 'Compare multiple translations side by side for deeper understanding.',
    },
    {
      name: 'Learning Tools',
      description: 'Use notes, bookmarks, study history, and personal references to continue research.',
    },
    {
      name: 'Cross-Referencing',
      description: 'Discover relationships between concepts throughout the Quran.',
    },
  ];

  return (
    <ProductPageTemplate
      title="AnalyzeQuran"
      h1="AnalyzeQuran: AI-Powered Quranic Research & Learning Platform"
      heroBody="AnalyzeQuran is a Quran study platform developed by Logic Unit to help users understand Quranic content through linguistic analysis, thematic exploration, and intelligent search."
      challengeTitle="The Learning Challenge"
      challengeText="Many Quran applications provide reading, listening, and translation. Fewer platforms support root-word analysis, thematic research, concept exploration, and cross-referencing. AnalyzeQuran was created to bridge that gap with AI-powered search and research workflows."
      featuresTitle="Core Features"
      features={features}
      audience={[
        'Students of Islamic Studies',
        'Academic Scholars & Researchers',
        'Teachers & Educators',
        'General Readers seeking depth',
      ]}
      techStack={[
        'AI Search Engine',
        'Natural Language Processing (NLP)',
        'Cloud-Native Translation Databases',
        'Mobile & Responsive Web Frontends',
      ]}
      schemaJson={schemaJson}
    />
  );
}
