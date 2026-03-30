import React from 'react';
import Project from '../components/project/Project';
import { projects } from '../helpers/projectsList';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import useVanta from '../utils/useVanta';

export default function Projects() {
  const vantaRef = useVanta('dots', {
    color: 0x5c62ec,
    color2: 0xf0f0f0,
    backgroundColor: 0xffffff,
    size: 2.5,
    spacing: 38,
    showLines: false,
    mouseControls: true,
    touchControls: true,
  });

  return (
    <main className="section vanta-wrap" ref={vantaRef}>
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
