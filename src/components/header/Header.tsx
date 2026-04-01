import React from 'react';
import './style.css';
import CV from '../../data/CV Alexandr Kabanau 2025.pdf';
import avatar from '../../img/avatar.jpeg';
import useTypingEffect from '../../utils/useTypingEffect';
import useVanta from '../../utils/useVanta';

const ROLES = [
  'a Frontend Developer',
  'a React Developer',
  'a Next.js Developer',
  'a Full-Stack Developer',
];

export default function Header() {
  const typed = useTypingEffect(ROLES);
  const vantaRef = useVanta('net', {
    color: 0x2d3280,
    backgroundColor: 0x0d0e1a,
    points: 7,
    maxDistance: 18,
    spacing: 22,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
  });

  return (
    <header className="header" ref={vantaRef as React.RefObject<HTMLElement>}>
      <div className="header__inner">
        <div className="header__content">
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

        <div className="header__photo-wrap">
          <img src={avatar} alt="Alexandr Kabanau" className="header__photo" />
        </div>
      </div>
    </header>
  );
}
