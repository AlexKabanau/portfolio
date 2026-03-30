import React from 'react';
import './style.css';

export default function SkillsList({ skills }) {
  return (
    <ul className="skills-list">
      {skills.map((skill) => (
        <li key={skill} className="skills-list__tag">
          {skill}
        </li>
      ))}
    </ul>
  );
}
