import React from 'react';
import './style.css';
import CV from '../../data/CV Alexandr Kabanau 2025.pdf';
import useTypingEffect from '../../utils/useTypingEffect';

const ROLES = [
  'a Frontend Developer',
  'a React Developer',
  'a Next.js Developer',
  'a Full-Stack Developer',
];

export default function Header() {
  const typed = useTypingEffect(ROLES);

  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Alex</em>
          </strong>
          <br />
          <span className="header__typed">
            {typed}
            <span className="header__cursor" aria-hidden="true">|</span>
          </span>
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
