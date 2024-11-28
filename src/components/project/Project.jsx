import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

export default function Project({ imageUrl, linkUrl, projectName, id, description }) {
  return (
    <>
      {/* <div class="view">
        <img src="image.gif" />
        <div class="mask">
          <h2>Title</h2>
          <p>Your Text</p>
          <a href="#" class="info">
            Read More
          </a>
        </div>
      </div> */}

      <div className="view">
        <img src={imageUrl} alt="Project img" />
        <div className="mask">
          <h2 className="project__title">{projectName}</h2>
          {/* <p>{description}</p> */}
          <NavLink to={`/project/${id}`} className="info">
            Read More
          </NavLink>
        </div>
      </div>

      {/* <NavLink to={`/project/${id}`}>
        <li className="project">
          <img src={imageUrl} alt="Project img" className="project__img" />
          <h3 className="project__title">{projectName}</h3>
        </li>
      </NavLink> */}
    </>
  );
}
