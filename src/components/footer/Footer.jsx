import React from 'react';
import vkIcon from '../../img/icons/vk.svg';
import instagrammIcon from '../../img/icons/instagram.svg';
import gitHubIcon from '../../img/icons/gitHub.svg';
// import gitHubBlackIcon from './img/icons/gitHub-black.svg'
import linkedInIcon from '../../img/icons/linkedIn.svg';
import xIcon from '../../img/icons/twitter.svg';

import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vkIcon} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={instagrammIcon} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={xIcon} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={gitHubIcon} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={linkedInIcon} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
