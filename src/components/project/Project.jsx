import React from 'react';
import './style.css';

export default function Project({ imageUrl, linkUrl, projectName }) {
  return (
    <li className="project">
      <a href={linkUrl}>
        <img src={imageUrl} alt="Project img" className="project__img" />
        <h3 className="project__title">{projectName}</h3>
      </a>
    </li>
  );
}
