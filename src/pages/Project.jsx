import React from 'react';
// import img1 from '../img/projects/01-big.jpg';
import BtnGitHub from '../components/buttonGithub/BtnGitHub';
import { useParams } from 'react-router-dom';
import { projects } from '../helpers/projectsList';

export default function Project() {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img src={project.cover} alt="" className="project-details__cover" />
          {/* TODO: gallery */}

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
}
