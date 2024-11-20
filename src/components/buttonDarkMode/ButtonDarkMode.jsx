import React, { useEffect, useState } from 'react';
import sunIcon from './sun.svg';
import moonIcon from './moon.svg';
import './style.css';

export default function ButtonDarkMode() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      console.log(darkMode);
      document.body.classList.add('.dark');
      // document.body.classList.add();
    }
    document.body.classList.remove('.dark');
    // console.log(darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sunIcon} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moonIcon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
