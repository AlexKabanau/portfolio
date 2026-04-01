import React from 'react';
import './style.css';
import gitHubBlack from './gitHub-black.svg';

interface BtnGitHubProps {
  link: string;
}

export default function BtnGitHub({ link }: BtnGitHubProps) {
  return (
    <a href={link} className="btn-outline" target="_blank" rel="noreferrer">
      <img src={gitHubBlack} alt="" />
      GitHub repo
    </a>
  );
}
