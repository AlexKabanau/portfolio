import React from 'react';
import './style.css';
import type { SkillLevel } from '../../types';

interface SkillsListProps {
  skills: string[];
  level?: SkillLevel;
}

export default function SkillsList({ skills, level = 'intermediate' }: SkillsListProps) {
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
