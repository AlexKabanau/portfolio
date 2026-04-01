import type { Skills } from '../types';

export const SKILLS: Skills = {
  advanced: [
    'HTML / CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Contentstack CMS',
    'Vite',
    'SASS / CSS Modules',
  ],
  intermediate: [
    'Build Tools',
    'Web App Architecture',
    'REST API',
    'Cross-browser Development',
    'State Management',
    'Component-based Development',
    'Design Patterns',
    'Performance Optimization',
    'Prompt Engineering',
    'Code Quality',
  ],
  familiar: [
    'Browser APIs',
    'Accessibility (a11y)',
    'PWA Development',
    'Testing (Jest / RTL)',
    'CI/CD Basics',
  ],
};

export const ALL_SKILLS: string[] = [
  ...SKILLS.advanced,
  ...SKILLS.intermediate,
  ...SKILLS.familiar,
];
