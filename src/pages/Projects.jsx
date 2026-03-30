import React from 'react';
import Project from '../components/project/Project';
import { projects } from '../helpers/projectsList';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import useVanta from '../utils/useVanta';

export default function Projects() {
  const vantaRef = useVanta('fog', (isDark) => ({
    highlightColor: isDark ? 0x3d4199 : 0xd0d3ff,
    midtoneColor:   isDark ? 0x2d3280 : 0xebebff,
    lowlightColor:  isDark ? 0x1a1b3a : 0xffffff,
    baseColor:      isDark ? 0x252526 : 0xffffff,
    blurFactor: 0.6,
    speed: 1.5,
    zoom: 1.0,
  }));

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
