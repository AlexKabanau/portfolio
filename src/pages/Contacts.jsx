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
            <h2 className="title-2">Telegram / WhatsApp</h2>
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
