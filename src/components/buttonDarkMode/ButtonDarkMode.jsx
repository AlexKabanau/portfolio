import React, { useEffect } from 'react';
import sunIcon from './sun.svg';
import moonIcon from './moon.svg';
import './style.css';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

export default function ButtonDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const newColorScheme = event.matches ? true : false;
      setDarkMode(newColorScheme);
    });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const buttonClassNormal = 'dark-mode-btn';
  const buttonClassActive = 'dark-mode-btn--active';

  return (
    <button className={darkMode ? buttonClassActive : buttonClassNormal} onClick={toggleDarkMode}>
      <img src={sunIcon} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moonIcon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
