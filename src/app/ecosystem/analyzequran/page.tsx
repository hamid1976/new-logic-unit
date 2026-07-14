import type { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/ui/ProductPageTemplate';

export const metadata: Metadata = {
  title: 'AnalyzeQuran | AI-Powered Quranic Research Platform',
  description: 'AnalyzeQuran is an AI-powered Quran study platform for root-word analysis, thematic research, translation comparison, and intelligent search.',
  alternates: {

      canonical: '/ecosystem/analyzequran',

  },

  openGraph: {

      url: '/ecosystem/analyzequran',

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
      name: 'AI-Powered Root & Morphological Search',
      description: 'Allows researchers to query the text using Arabic roots, prefixes, suffixes, exact keywords, thematic categories, and semantic concepts, bypassing traditional character-match limitations.',
    },
    {
      name: 'Word-By-Word Grammatical Analysis',
      description: 'Breaks down every word to its morphological roots, showing grammatical tags (nouns, verbs, particles), gender, number, verb forms, and usage patterns across the entire text.',
    },
    {
      name: 'Translation Comparison Matrix',
      description: 'Displays multiple classical and modern translations side by side, allowing comparative linguistic studies and highlighting variations in semantic interpretation.',
    },
    {
      name: 'Interactive Study Workspace',
      description: 'Equips researchers with personal study folders, annotation notes, custom tags, study history tracking, and bookmarks, allowing them to organize research papers and lectures.',
    },
    {
      name: 'Semantic Concept Mapping',
      description: 'Generates relationships and connections between topics (e.g., history, ethics, science) scattered across different chapters, showing thematic connections visually.',
    },
  ];

  const sidebar = {
    title: 'Linguistic Research Challenges',
    items: [
      'Bypassing simple keyword matches to search by Arabic root morphology',
      'Mapping complex semantic connections between disparate chapters',
      'Aggregating multiple classical dictionary sources and translations in one view',
      'Maintaining absolute textual accuracy and diacritical rendering in web fonts',
    ],
    type: 'cross' as const,
  };

  return (
    <ProductPageTemplate
      title="AnalyzeQuran"
      h1="AnalyzeQuran: AI-Powered Quranic Research & Learning Platform"
      heroBody="AnalyzeQuran is a specialized Quran study and linguistic research platform developed by Logic Unit to help users understand Quranic content through morphological analysis, thematic exploration, and intelligent search."
      challengeTitle="The Classical Arabic Search Challenge"
      challengeText="Most Quran applications focus on audio recitation, reading, and simple translation lookups. However, researchers, students, and scholars require tools for deep linguistic analysis. Searching classical Arabic is challenging due to its complex morphology, where a single root word can yield dozens of grammatical variations. Traditional search engines fail to locate these variations, and cross-referencing concepts across different chapters remains a manual, time-consuming task. AnalyzeQuran was built to bridge this gap by combining classical morphological databases with modern NLP engines."
      sidebar={sidebar}
      featuresTitle="Core Research Capabilities"
      features={features}
      audience={[
        'Students of Classical Arabic & Islamic Studies',
        'Academic Scholars, Historians, & Language Researchers',
        'Religious Educators & Seminar Instructors',
        'General Readers seeking grammatical and semantic depth',
      ]}
      techStack={[
        'Linguistic NLP Parser Engine',
        'Morphological Lexicon Databases',
        'Elasticsearch Cluster with Arabic Stemming',
        'Next.js Responsive Web Interface',
        'Secure Cloud Data Infrastructure',
      ]}
      schemaJson={schemaJson}
    />
  );
}
