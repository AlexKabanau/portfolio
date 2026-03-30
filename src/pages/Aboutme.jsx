import React from 'react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import SkillsList from '../components/SkillsList/SkillsList';
import { ALL_SKILLS } from '../helpers/skills';

const sections = [
  { id: 'summary' },
  { id: 'skills' },
  { id: 'work' },
  { id: 'qualification' },
  { id: 'certificates' },
  { id: 'languages' },
];

export default function Aboutme() {
  return (
    <>
      <div className="container container_aboutme">
        <ul className="content-list">

          <ScrollReveal delay={0}>
            <li className="content-list__item">
              <h2 className="title-2">SUMMARY</h2>
              <p className="summary">
                Frontend Developer with 1.5 years of experience in IT, including 9 months of
                commercial production at EPAM Systems. Specializing in React, TypeScript, and Next.js,
                with hands-on delivery of enterprise-grade applications (Johnson &amp; Johnson Medtech
                MACH platform). Strong focus on code quality, accessibility, performance optimization,
                and test coverage. Full-stack background with NestJS and Prisma. Background in
                engineering brings structured analytical thinking to every project.
              </p>
            </li>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <li className="content-list__item">
              <h2 className="title-2">SKILLS</h2>
              <SkillsList skills={ALL_SKILLS} />
            </li>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <li className="content-list__item work_exp">
              <h2 className="title-2">WORK EXPERIENCE</h2>

              <p>
                <b>Jun 2025 – Present</b> - Frontend Developer
              </p>
              <p className="customer">
                <b>Company</b>:{' '}
                <a href="https://www.epam.com/" target="_blank" rel="noreferrer">
                  EPAM Systems
                </a>
              </p>
              <p className="description">
                <b>Project</b>: Johnson &amp; Johnson Medtech — consolidating jnjmedtech.com and
                jnjinstitute.com into a unified MACH ecosystem (Next.js + Contentstack CMS).
              </p>
              <p className="responsibilities">
                <b>Responsibilities</b>:
                <ol className="responsibilities_list">
                  <li>
                    Developed and enhanced UI components with accessibility support (aria-labels,
                    aria-live, focus management)
                  </li>
                  <li>
                    Created Storybook documentation and unit tests (Jest + React Testing Library)
                  </li>
                  <li>
                    Integrated Contentstack CMS — data mappers, content delivery for B2C and B2B
                    websites
                  </li>
                  <li>Optimized layout responsiveness and scroll / modal behaviour</li>
                  <li>
                    Collaborated with cross-functional teams (PIM, SFMC, CIAM/SAML integrations)
                  </li>
                </ol>
              </p>
              <p className="tools">
                <b>Tools and Technologies</b>: React, TypeScript, Next.js (App Router), CSS Modules,
                Storybook, Jest, React Testing Library, Radix UI, Contentstack CMS, SWR, TanStack
                Table, NX Monorepo, Jenkins CI/CD, Git
              </p>

              <br />

              <p>
                <b>2011 – 2025</b> - Head of design bureau of excavators and backhoe loaders
              </p>
              <p className="customer">
                <b>Customer</b>: JSC "AMKODOR" — holding managing company
              </p>
              <p className="description">
                <b>Description</b>: Developing complex 3-D structures in heavy engineering. Experience
                in creating hydraulic excavators including general layout, metal construction, and
                working equipment. Performed kinematic and force analysis of stress-strain states.
                Supervised related systems (hydraulic, electrical, cabin, engine) and selected
                components. Participated in manufacture, testing, and development; conducted failure
                analysis. Worked in NX (UGS) CAD/CAM/CAE system.
              </p>
              <p className="tools">
                <b>Tools and Technologies</b>: Unigraphics NX, ACAD, Kompas, ANSYS Workbench
              </p>
            </li>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <li className="content-list__item">
              <h2 className="title-2">QUALIFICATION</h2>
              <p>
                BELARUSIAN NATIONAL TECHNICAL UNIVERSITY — Faculty of Transport Communications,
                Department of Construction and Road Machinery, Postgraduate, 2017
              </p>
              <br />
              <p>
                BELARUSIAN NATIONAL TECHNICAL UNIVERSITY — Faculty of Transport Communications,
                Department of Construction and Road Machinery, Master's degree, 2013
              </p>
            </li>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <li className="content-list__item">
              <h2 className="title-2">CERTIFICATES</h2>
              <ol>
                <li>
                  <a href="https://app.rs.school/certificate/react-2025" target="_blank" rel="noreferrer">
                    Rolling Scopes School — React, 2025
                  </a>
                </li>
                <li>
                  <a href="https://app.rs.school/certificate/zb4cwqd5" target="_blank" rel="noreferrer">
                    Rolling Scopes School — JavaScript / Front-end, 2023
                  </a>
                </li>
                <li>Rolling Scopes School — JavaScript / Front-end Fundamentals, 2022</li>
                <li>
                  <a href="https://learn.javascript.ru/" target="_blank" rel="noreferrer">
                    learn.javascript.ru
                  </a>
                </li>
                <li>
                  <a href="https://htmlacademy.ru/" target="_blank" rel="noreferrer">
                    htmlacademy.ru
                  </a>{' '}
                  (basic course, advanced course, preprocessors)
                </li>
              </ol>
            </li>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <li className="content-list__item">
              <h2 className="title-2">LANGUAGES</h2>
              <ol>
                <li>Belarusian (native)</li>
                <li>Russian (native)</li>
                <li>English (B1+)</li>
                <li>German (B1.1)</li>
              </ol>
            </li>
          </ScrollReveal>

        </ul>
      </div>
    </>
  );
}
