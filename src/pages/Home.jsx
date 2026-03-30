import React from 'react';
import Header from '../components/header/Header';
import { NavLink } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import SkillsList from '../components/SkillsList/SkillsList';
import { SKILLS } from '../helpers/skills';

export default function Home() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <ScrollReveal delay={0}>
              <li className="content-list__item">
                <p>
                  Frontend Developer at EPAM Systems with 1.5 years of experience in IT.
                  Working on enterprise-grade applications using React, TypeScript, and Next.js.
                  Full-stack background with NestJS and Prisma. Former mechanical engineer —
                  I bring structured thinking and attention to detail to every line of code.
                </p>
              </li>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <li className="content-list__item">
                <h2 className="title-2">Frontend</h2>
                <SkillsList skills={SKILLS.frontend} />
              </li>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <li className="content-list__item">
                <h2 className="title-2">Backend</h2>
                <SkillsList skills={SKILLS.backend} />
              </li>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <li className="content-list__item">
                <h2 className="title-2">Tools</h2>
                <SkillsList skills={SKILLS.tools} />
              </li>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <li className="content-list__item">
                <div className="link-container">
                  <NavLink to="/projects" className="btn">View Projects</NavLink>
                  <NavLink to="/contacts" className="btn-outline">Get in Touch</NavLink>
                </div>
              </li>
            </ScrollReveal>
          </ul>
        </div>
      </main>
    </>
  );
}
