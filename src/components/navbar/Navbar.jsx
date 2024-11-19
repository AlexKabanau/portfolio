import React from 'react';
import './style.css';
import sunIcon from '../../img/icons/sun.svg';
import moonIcon from '../../img/icons/moon.svg';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Portfolio</strong>
          </NavLink>

          <button className="dark-mode-btn">
            <img src={sunIcon} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moonIcon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
