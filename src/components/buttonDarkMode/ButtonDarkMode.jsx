import React, { useEffect, useRef } from 'react';
import sunIcon from './sun.svg';
import moonIcon from './moon.svg';
import './style.css';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

export default function ButtonDarkMode() {
  const buttonRef = useRef(null);

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
      buttonRef.current.classList.add('dark-mode-btn--active');
    } else {
      body.classList.remove('dark');
      buttonRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode]);
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const newColorScheme = event.matches ? true : false;
      setDarkMode(newColorScheme);
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // const buttonClassNormal = 'dark-mode-btn';
  // const buttonClassActive = 'dark-mode-btn--active';

  return (
    <button className="dark-mode-btn" onClick={toggleDarkMode} ref={buttonRef}>
      <img src={sunIcon} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moonIcon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
