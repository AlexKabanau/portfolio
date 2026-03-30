import React from 'react';
import Header from '../components/header/Header';
import { NavLink } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';

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
                <p>
                  React, Next.js, TypeScript, JavaScript, Redux / RTK, TanStack Query, Zustand,
                  HTML, CSS (SASS/SCSS, Tailwind CSS), Axios, Three.js, Webpack, Jest
                </p>
              </li>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <li className="content-list__item">
                <h2 className="title-2">Backend</h2>
                <p>Node.js, NestJS, Prisma, REST API, JWT</p>
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
