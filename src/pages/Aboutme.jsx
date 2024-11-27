import React from 'react';
// import Header from '../components/header/Header';

export default function Aboutme() {
  return (
    <>
      <div className="container container_aboutme">
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">SUMMARY</h2>
            <p className="summary">
              I'm an enthusiastic and detail-oriented Engineer seeking an entry-level
              JavaScript/Frontend Developer position with Company to use my skills in coding,
              troubleshooting complex problems, and assisting in the timely completion of projects.
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">SKILLS</h2>
            <p className="skills">
              JavaScript, TypeScript, React, Responsive Web, HTML, CSS (SASS/SCSS), Redux, Axios,
              RTK, Three.js, Webpack, Jest
            </p>
          </li>
          <li className="content-list__item work_exp">
            <h2 className="title-2">WORK EXPERIENCE</h2>
            <p>
              <b>2011 – Present</b> - Head of design bureau of excavators and backhoe loaders
            </p>
            <p className="customer">
              <b>Customer</b> : JSC "AMKODOR" - holding managing company
            </p>
            <p className="description">
              <b>Description</b> : Developing complex 3-D structures in heavy engineering.
              Experience in creating hydraulic excavators including general layout, metal
              construction, and working equipment. Performed kinematic and force analysis of
              stress-strain states. Supervised work on the creation of related systems (hydraulic
              system, electrical system, cabin and cladding, engine system), and selected
              components. Participated in the manufacture, testing, and development of machines, and
              conducted failure analysis. Worked in the modern CAD/CAM/CAE system NX (UGS). Gained
              experience in creating and analyzing complex articulated lever systems.
            </p>
            <p className="responsibilities">
              <b>Responsibilities</b> :
              <ol className="responsibilities_list">
                <li>Planning work processes – defining and setting product goals</li>
                <li>Evaluating progress</li>
                <li>Organizing work execution (design, manufacturing)</li>
                <li>Inspecting and participating in product testing/verification</li>
                <li>Organizing work to eliminate nonconformities/defects</li>
                <li>Taking corrective action</li>
              </ol>
            </p>
            <p className="tools">
              <b>Tools and Technologies</b> : Unigraphics NX, ACAD, Kompas, ANSYS Workbench
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">QUALIFICATION</h2>
            <p>
              BELARUSIAN NATIONAL TECHNICAL UNIVERSITY Faculty of Transport Communications,
              Department of Construction and Road Machinery, Postgraduate, 2017
            </p>
            <br />
            <p>
              BELARUSIAN NATIONAL TECHNICAL UNIVERSITY Faculty of Transport Communications,
              Department of Construction and Road Machinery, Master’s degree, 2013
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">SELF-STUDY</h2>
            <ol>
              <li>
                <a href="https://app.rs.school/certificate/zb4cwqd5" download>
                  RollingScopesSchool Graduate, 2023
                </a>
              </li>
              <li>https://learn.javascript.ru/</li>
              <li>https://htmlacademy.ru/ (basic course, advanced course, preprocessors)</li>
              <li>YouTube courses (Archakov Blog, IT-Kamasutra)</li>
            </ol>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">LANGUAGES</h2>
            <ol>
              <li>Belarus (native)</li>
              <li>Russian (native)</li>
              <li>English (Upper-Intermediate B2) Streamline</li>
              <li>Deutsch (Mittelstufe B1.1) Streamline </li>
            </ol>
          </li>
        </ul>
      </div>
    </>
  );
}
