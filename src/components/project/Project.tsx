import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

interface ProjectCardProps {
  imageUrl?: string;
  projectName: string;
  id: number;
  description: string;
}

export default function Project({ imageUrl, projectName, id, description }: ProjectCardProps) {
  return (
    <NavLink to={`/project/${id}`} className="project-card">
      <div className="project-card__img-wrap">
        {imageUrl
          ? <img src={imageUrl} alt={projectName} className="project-card__img" />
          : <div className="project-card__placeholder" aria-hidden="true" />
        }
        <div className="project-card__overlay">
          <span className="project-card__cta">View Details</span>
        </div>
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{projectName}</h3>
        <p className="project-card__desc">{description}</p>
      </div>
    </NavLink>
  );
}
