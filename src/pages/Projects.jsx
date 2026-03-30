import React from 'react';
import Project from '../components/project/Project';
import { projects } from '../helpers/projectsList';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <ScrollReveal variant="fadeIn">
          <h2 className="title-1">Projects</h2>
        </ScrollReveal>
        <ul className="projects">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <Project
                imageUrl={project.img[0]}
                linkUrl={project.gitHubLink}
                projectName={project.title}
                description={project.description}
                id={index}
              />
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </main>
  );
}
