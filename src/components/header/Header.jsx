import React from 'react';
import './style.css';
import CV from '../../data/CV Alexandr Kabanau 2025.pdf';

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Alex</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href={CV} download className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
}
