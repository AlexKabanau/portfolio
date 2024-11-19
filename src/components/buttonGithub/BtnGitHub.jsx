import React from 'react';
import './style.css';
import gitHubBlack from './gitHub-black.svg';

export default function BtnGitHub(props) {
  return (
    <a href={props.link} className="btn-outline" target="_blank">
      <img src={gitHubBlack} alt="" />
      GitHub repo
    </a>
  );
}
