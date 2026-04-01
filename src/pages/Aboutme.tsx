import React from 'react';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import SkillsList from '../components/SkillsList/SkillsList';
import Timeline from '../components/Timeline/Timeline';
import { SKILLS } from '../helpers/skills';
import { TIMELINE } from '../helpers/timelineData';
import useVanta from '../utils/useVanta';

export default function Aboutme() {
  const vantaRef = useVanta('birds', (isDark) => ({
    color1: 0x5c62ec,
    color2: 0x9b99f5,
    colorMode: 'lerp',
    backgroundColor: isDark ? 0x252526 : 0xffffff,
    quantity: 2,
    birdSize: 1.0,
    wingSpan: 22,
    speedLimit: 3,
    separation: 80,
    alignment: 40,
    cohesion: 40,
    mouseControls: false,
    touchControls: false,
  }));

  return (
    <section className="section vanta-wrap" ref={vantaRef as React.RefObject<HTMLElement>}>
      <div className="container container_aboutme">
        <ul className="content-list">

          <ScrollReveal delay={0}>
            <li className="content-list__item">
              <h2 className="title-2">SUMMARY</h2>
              <p className="summary">
                Frontend Developer with 1.5 years of experience in IT, including 9 months of
                commercial production at EPAM Systems. Specializing in React, TypeScript, and Next.js,
                with hands-on delivery of enterprise-grade applications. Strong focus on code quality,
                accessibility, performance optimization, and test coverage. Full-stack background with
                NestJS and Prisma. Engineering background brings structured analytical thinking to
                every project.
              </p>
            </li>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <li className="content-list__item">
              <h2 className="title-2">SKILLS</h2>
              <SkillsList skills={SKILLS.advanced} level="advanced" />
              <br />
              <SkillsList skills={SKILLS.intermediate} level="intermediate" />
              <br />
              <SkillsList skills={SKILLS.familiar} level="familiar" />
            </li>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <li className="content-list__item">
              <h2 className="title-2">EXPERIENCE & EDUCATION</h2>
              <Timeline events={TIMELINE} />
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
    </section>
  );
}
