import React from 'react';
import Header from '../components/header/Header';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <p>
                I build fast, responsive web applications with clean code and great UX.
                Experienced in the full development cycle — from designing REST APIs to
                delivering polished React interfaces. Former mechanical engineer: I bring
                structured thinking and attention to detail to every project.
              </p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                React, Next.js, TypeScript, JavaScript, Redux / RTK, TanStack Query, Zustand,
                HTML, CSS (SASS/SCSS, Tailwind CSS), Axios, Three.js, Webpack, Jest
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>Node.js, NestJS, Prisma, REST API, JWT</p>
            </li>

            <li className="content-list__item">
              <div className="link-container">
                <NavLink to="/projects" className="btn">View Projects</NavLink>
                <NavLink to="/contacts" className="btn-outline">Get in Touch</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
