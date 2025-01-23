import React from 'react';
// import facebookIcon from '../../img/icons/icons8-facebook (1).svg';
// import instagrammIcon from '../../img/icons/instagram.svg';
import gitHubIcon from '../../img/icons/gitHub.svg';
// import gitHubBlackIcon from './img/icons/gitHub-black.svg'
import linkedInIcon from '../../img/icons/linkedIn.svg';
// import xIcon from '../../img/icons/icons8-x (1).svg';

import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/AlexKabanau" target="_blank" rel="noreferrer">
                <img src={gitHubIcon} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/alexandr-kabanau/"
                target="_blank"
                rel="noreferrer">
                <img src={linkedInIcon} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
