import React from 'react';
import './style.css';

export default function SkillsList({ skills, level = 'intermediate' }) {
  return (
    <ul className="skills-list">
      {skills.map((skill) => (
        <li key={skill} className={`skills-list__tag skills-list__tag--${level}`}>
          {skill}
        </li>
      ))}
    </ul>
  );
}
