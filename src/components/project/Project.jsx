import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

export default function Project({ imageUrl, linkUrl, projectName, id }) {
  return (
    <NavLink to={`/project/${id}`}>
      <li className="project">
        <img src={imageUrl} alt="Project img" className="project__img" />
        <h3 className="project__title">{projectName}</h3>
      </li>
    </NavLink>
  );
}
