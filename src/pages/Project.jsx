import React from 'react';
import img1 from '../img/projects/01-big.jpg';
import BtnGitHub from '../components/buttonGithub/BtnGitHub';

export default function Project() {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>

          <img src={img1} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>

          <BtnGitHub link="http://github.com" />
        </div>
      </div>
    </main>
  );
}
