import React from 'react';
import Header from '../components/header/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
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
          </ul>
        </div>
      </main>
    </>
  );
}
