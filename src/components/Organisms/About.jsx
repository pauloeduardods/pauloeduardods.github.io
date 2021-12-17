import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import AsyncImage from '../../utils/AsyncImage';
import { AboutTitle } from '../Atoms/Title';
import { AboutDescription } from '../Atoms/Texts';
import { MoreButton } from '../Atoms/Buttons';
import {
  About1stP, About2ndP, profilePhoto } from '../../data/aboutData';
import '../../css/about.css';
import AboutModal from '../Molecules/AboutModal';

function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="about"
      className="bg-black bg-yellow-black-img py-8 h-fit"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-12 lg:gap-8">
          <div className="col-span-12 lg:col-span-6 text-gray-50">
            <header>
              <h1 className="hidden">Paulo Eduardo de Sordi Gomes</h1>
              <FadeIn transitionDuration="800">
                <h2 className="mb-3">
                  <AboutTitle>
                    Olá! eu sou o
                    {' '}
                  </AboutTitle>
                  <AboutTitle
                    className="font-semibold"
                  >
                    Paulo!
                  </AboutTitle>
                </h2>
              </FadeIn>
            </header>
            <FadeIn delay="300" transitionDuration="950">
              <AboutDescription>
                {About1stP}
              </AboutDescription>
              <AboutDescription>
                {About2ndP}
              </AboutDescription>
            </FadeIn>
            <FadeIn delay="2000" transitionDuration="800">
              <h3 className="text-center py-2">
                Quer saber mais?
              </h3>
            </FadeIn>
            <FadeIn delay="2900" transitionDuration="800">
              <div className="flex justify-center">
                <MoreButton
                  className="mb-6 lg:mb-0"
                  onClick={ () => setModalOpen(!modalOpen) }
                >
                  Clique aqui!
                </MoreButton>
              </div>
            </FadeIn>
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center">
            <AsyncImage
              src={ profilePhoto }
              alt="Paulo Eduardo de Sordi Gomes"
              className="w-full h-fit sm:w-2/3 lg:w-full border-2 border-yellow-400"
            />
          </div>
        </div>
      </div>
      <AboutModal open={ modalOpen } setOpen={ setModalOpen } />
    </section>
  );
}

export default About;
