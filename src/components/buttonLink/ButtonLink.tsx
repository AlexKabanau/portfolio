import React from 'react';
import deploy from './deploy-rules-svgrepo-com.svg';

interface ButtonLinkProps {
  link: string;
}

export default function ButtonLink({ link }: ButtonLinkProps) {
  return (
    <a href={link} className="btn-outline" target="_blank" rel="noreferrer">
      <img src={deploy} alt="" />
      Deploy link
    </a>
  );
}
