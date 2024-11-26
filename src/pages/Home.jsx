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
                Responsive Web, HTML, CSS (SASS/SCSS), JavaScript, TypeScript, React, NextJS, Redux,
                Axios, RTK, Three.js, Webpack, Jest
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, Prisma</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
