import React from 'react';
import BtnGitHub from '../components/buttonGithub/BtnGitHub';
import { useParams, NavLink } from 'react-router-dom';
import { projects } from '../helpers/projectsList';
import ButtonLink from '../components/buttonLink/ButtonLink';
import Slider from '../components/project/Slider';
import SkillsList from '../components/SkillsList/SkillsList';

export default function Project() {
  const { id } = useParams<{ id: string }>();
  const project = projects[Number(id)];

  if (!project) return null;

  return (
    <main className="section">
      <div className="container">
        <NavLink to="/projects" className="back-link">
          ← Back to Projects
        </NavLink>

        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <Slider project={project} />

          <div className="project-details__desc">
            <p>{project.description}</p>
          </div>

          <div className="project-details__stack">
            <SkillsList
              skills={project.tools_and_technologies.split(',').map((s) => s.trim())}
              level="intermediate"
            />
          </div>

          <ol className="project-details__responsibilities">
            {project.responsibilities.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ol>

          <div className="link-container">
            {project.gitHubLink &&
              project.gitHubLink.map((link, key) => <BtnGitHub link={link} key={key} />)}

            {project.deployLink && <ButtonLink link={project.deployLink} />}
          </div>
        </div>
      </div>
    </main>
  );
}
