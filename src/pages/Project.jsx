import React from 'react';
// import img1 from '../img/projects/01-big.jpg';
import BtnGitHub from '../components/buttonGithub/BtnGitHub';
import { useParams } from 'react-router-dom';
import { projects } from '../helpers/projectsList';
import ButtonLink from '../components/buttonLink/ButtonLink';

export default function Project() {
  const { id } = useParams();
  const project = projects[id];
  console.log(project);

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img src={project.img[0]} alt="" className="project-details__cover" />
          {/* <div id="slider">
            <input type="radio" name="slider" id="slide1" checked />
            <input type="radio" name="slider" id="slide2" />
            <input type="radio" name="slider" id="slide3" />
            <input type="radio" name="slider" id="slide4" />
            <div id="slides">
              <div id="overflow">
                <div class="inner">
                  <div class="slide slide_1">
                    <div class="slide-content">
                      <h2>Slide 1</h2>
                    </div>
                  </div>
                  <div class="slide slide_2">
                    <div class="slide-content">
                      <h2>Slide 2</h2>
                    </div>
                  </div>
                  <div class="slide slide_3">
                    <div class="slide-content">
                      <h2>Slide 3</h2>
                    </div>
                  </div>
                  <div class="slide slide_4">
                    <div class="slide-content">
                      <h2>Slide 4</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="controls">
              <label htmlFor="slide1"></label>
              <label htmlFor="slide2"></label>
              <label htmlFor="slide3"></label>
              <label htmlFor="slide4"></label>
            </div>
            <div id="bullets">
              <label htmlFor="slide1"></label>
              <label htmlFor="slide2"></label>
              <label htmlFor="slide3"></label>
              <label htmlFor="slide4"></label>
            </div>
          </div> */}
          {/* TODO: gallery */}
          <div className="project-details__desc">
            <p>{project.description}</p>
          </div>

          <div className="project-details__stack">
            <p>{project.tools_and_technologies}</p>
          </div>

          <ol className="project-details__responsibilities">
            {project.responsibilities.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ol>

          <div className="link-container">
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}

            <ButtonLink link={project.deployLink} />
          </div>
        </div>
      </div>
    </main>
  );
}
