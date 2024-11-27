import React from 'react';
import deploy from './deploy-rules-svgrepo-com.svg';

export default function ButtonLink(props) {
  return (
    <a href={props.link} className="btn-outline" target="_blank" rel="noreferrer">
      <img src={deploy} alt="" />
      Deploy link
    </a>
  );
}
