import React from 'react';
import { modalTexts } from '../../data/aboutData';
import { AboutModalTitle } from '../Atoms/Title';
import { AboutModalDescription } from '../Atoms/Texts';

function AboutModalText() {
  return (
    <div className="text-gray-50">
      {modalTexts.map((curText) => (
        <div key={ curText.title } className="mb-6">
          <AboutModalTitle>{curText.title}</AboutModalTitle>
          {curText.texts.map((text) => (
            <AboutModalDescription key={ text }>{text}</AboutModalDescription>
          ))}
        </div>
      ))}
    </div>);
}

export default AboutModalText;
