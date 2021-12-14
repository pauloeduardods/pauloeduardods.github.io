import React from 'react';
import { AboutTitle } from '../Atoms/Title';
import { AboutDescription } from '../Atoms/Texts';
import { MoreButton } from '../Atoms/Buttons';
import { About1stP, About2ndP, profilePhoto } from '../../data/aboutData';
import '../../css/about.css';

function About() {
  return (
    <section id="about" className="bg-yellow-black-img py-14 h-fit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-12 lg:gap-8">
          <div className="col-span-12 lg:col-span-6 text-gray-50">
            <h1 className="mb-3">
              <AboutTitle>
                Olá! eu sou o
                {' '}
              </AboutTitle>
              <AboutTitle
                className="font-semibold"
              >
                Paulo!
              </AboutTitle>
            </h1>
            <AboutDescription>
              {About1stP}
            </AboutDescription>
            <AboutDescription>
              {About2ndP}
            </AboutDescription>
            <h3 className="text-center py-2">
              Quer saber mais?
            </h3>
            <div className="flex justify-center">
              <MoreButton className="mb-6 lg:mb-0">
                Clique aqui!
              </MoreButton>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center">
            <img
              src={ profilePhoto }
              alt="Profile"
              className="w-full h-fit sm:w-2/3 lg:w-full border-2 border-yellow-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
