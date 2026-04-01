import type { TimelineEvent } from '../types';

export const TIMELINE: TimelineEvent[] = [
  {
    date: 'Jun 2025 – Present',
    title: 'Frontend Developer',
    company: 'EPAM Systems',
    link: 'https://www.epam.com/',
    type: 'work',
    description:
      'Working on an enterprise MACH platform — Next.js application with Contentstack CMS integration for B2C and B2B websites.',
    details: [
      'Developed and enhanced UI components with full accessibility support (aria-labels, aria-live, focus management)',
      'Created Storybook documentation and unit tests (Jest + React Testing Library)',
      'Built data mappers for Contentstack CMS content delivery',
      'Optimized layout responsiveness and scroll / modal behaviour',
      'Collaborated with cross-functional teams (PIM, SFMC, CIAM/SAML integrations)',
    ],
    tags: ['React', 'TypeScript', 'Next.js', 'CSS Modules', 'Storybook', 'Jest', 'Contentstack', 'Radix UI', 'NX Monorepo'],
  },
  {
    date: '2022 – 2025',
    title: 'Self-Study & RS School',
    type: 'education',
    description:
      'Completed RS School courses in JavaScript/Front-end (2023) and React (2025). Built 5+ personal and team projects. Transitioned into IT full-time.',
    tags: ['React', 'TypeScript', 'Redux', 'NestJS', 'Next.js', 'Three.js'],
  },
  {
    date: '2011 – 2025',
    title: 'Head of Design Bureau',
    company: 'JSC "AMKODOR"',
    type: 'work',
    description:
      'Led development of hydraulic excavators and backhoe loaders in heavy engineering. Managed design, manufacturing, and testing processes.',
    details: [
      'Developed complex 3-D structures: general layout, metal construction, working equipment',
      'Performed kinematic and force analysis of stress-strain states',
      'Supervised hydraulic, electrical, cabin and engine systems',
      'Participated in manufacture, testing and failure analysis',
    ],
    tags: ['Unigraphics NX', 'ACAD', 'Kompas', 'ANSYS Workbench'],
  },
  {
    date: '2017',
    title: 'Postgraduate',
    company: 'Belarusian National Technical University',
    type: 'education',
    description: 'Faculty of Transport Communications, Department of Construction and Road Machinery.',
  },
  {
    date: '2013',
    title: "Master's Degree",
    company: 'Belarusian National Technical University',
    type: 'education',
    description: 'Faculty of Transport Communications, Department of Construction and Road Machinery.',
  },
];
