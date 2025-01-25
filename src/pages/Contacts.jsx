import React from 'react';

export default function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Minsk, Belarus</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">
              <a href="https://t.me/alexandrkabanau" target="_blank" rel="noreferrer">
                Telegram
              </a>{' '}
              /{' '}
              <a href="https://wa.me/375295728470" target="_blank" rel="noreferrer">
                WhatsApp
              </a>{' '}
              /{' '}
              <a href="https://join.skype.com/invite/puSD1P4ynuct" target="_blank" rel="noreferrer">
                Skype
              </a>
            </h2>
            <p>
              <a href="tel:+37529572870">+375 (29) 572-84-70</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:Alexandr.kabanau@gmail.com">Alexandr.kabanau@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
