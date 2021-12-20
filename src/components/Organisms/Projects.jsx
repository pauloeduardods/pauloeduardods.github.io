import React, { useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/outline';
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';
import AsyncImage from '../../utils/AsyncImage';
import ContainerWithBackground from '../Molecules/ContainerWithBackground';
import { CarouselButton, SeeProjectButton } from '../Atoms/Buttons';
import { ProjectTitle, ProjectSubTitle, SectionTitle } from '../Atoms/Title';
import { ArrowTagWhite, TagNameWhite } from '../Atoms/HtmlTags';
import ProjectsData from '../../data/projectsData';

function Projects() {
  const [curProject, setCurProject] = useState(0);

  function nexButton() {
    if (curProject + 1 > ProjectsData.length - 1) setCurProject(0);
    else setCurProject(curProject + 1);
  }

  function prevButton() {
    if (curProject - 1 < 0) setCurProject(ProjectsData.length - 1);
    else setCurProject(curProject - 1);
  }

  return (
    <ContainerWithBackground id="projects" className="pb-6 pt-8" color>
      <FadeIn transitionDuration="800">
        <header>
          <SectionTitle className="text-left pb-3">
            <ArrowTagWhite>{'<'}</ArrowTagWhite>
            <TagNameWhite>Projetos</TagNameWhite>
            <ArrowTagWhite>{'>'}</ArrowTagWhite>
          </SectionTitle>
        </header>
      </FadeIn>
      <FadeIn delay="600" transitionDuration="1000">
        <div className="flex justify-center">
          <div
            className="w-full lg:w-11/12 xl:w-10/12 md:h-[670px] lg:h-[700px]
          grid grid-cols-12 md:grid-rows-6 shadow-lg shadow-slate-900
          rounded-tr-xl rounded-br-3xl rounded-bl-lg"
          >
            <div
              className="col-span-12 h-[235px] xs:h-[340px] sm:h-[390px]
            md:h-full lg:col-span-11 md:row-span-5 bg-slate-600 rounded-tr-xl
            md:rounded-tr-none relative"
            >
              <a
                href={ ProjectsData[curProject].link }
                target="_blank"
                rel="noopener noreferrer"
              >
                <AsyncImage
                  src={ ProjectsData[curProject].image }
                  alt={ ProjectsData[curProject].name }
                  className="object-cover w-full h-full rounded-tr-xl lg:rounded-tr-none"
                />
              </a>
              <button
                type="button"
                className="md:hidden absolute left-0 top-0 flex items-center h-full
              hover:bg-opacity-30 hover:bg-gray-100 text-gray-100"
                onClick={ prevButton }
              >
                <ArrowCircleLeftIcon className="h-10 w-10 mx-7" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="md:hidden absolute right-0 top-0 flex items-center h-full
              hover:bg-opacity-30 hover:bg-gray-100 text-gray-100"
                onClick={ nexButton }
              >
                <ArrowCircleRightIcon className="h-10 w-10 mx-7" aria-hidden="true" />
              </button>
            </div>
            <div
              className="hidden lg:flex lg:col-span-1 lg:row-span-6 bg-slate-800
            rounded-tr-xl rounded-br-3xl flex-col items-center justify-between
            overflow-y-auto py-2"
            >
              {ProjectsData[curProject].technologies.map((tech) => (
                <AsyncImage
                  src={ tech.img }
                  alt={ tech.name }
                  key={ tech.name }
                  className="w-2/3 my-2"
                />
              ))}
            </div>
            <div
              className="col-span-12 h-[140px] xs:h-[130px] md:h-full lg:col-span-11
            md:row-span-1 bg-slate-900 rounded-bl-lg flex flex-col sm:flex-row
            items-center justify-evenly sm:justify-between px-9 rounded-br-3xl
            lg:rounded-br-none"
            >
              <div className="hidden md:flex">
                <CarouselButton
                  type="button"
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={ prevButton }
                >
                  <ChevronDoubleLeftIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </CarouselButton>
                <CarouselButton
                  type="button"
                  // eslint-disable-next-line react/jsx-no-bind
                  onClick={ nexButton }
                >
                  <ChevronDoubleRightIcon
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </CarouselButton>
              </div>
              <header className="overflow-y-auto min-h-[45px]">
                <ProjectTitle>{ProjectsData[curProject].name}</ProjectTitle>
                <ProjectSubTitle>{ProjectsData[curProject].subTitle}</ProjectSubTitle>
              </header>
              <SeeProjectButton
                href={ ProjectsData[curProject].link }
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver projeto
              </SeeProjectButton>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay="200" transitionDuration="800">
        <SectionTitle className="text-left pt-6">
          <ArrowTagWhite>{'</'}</ArrowTagWhite>
          <TagNameWhite>Projetos</TagNameWhite>
          <ArrowTagWhite>{'>'}</ArrowTagWhite>
        </SectionTitle>
      </FadeIn>
    </ContainerWithBackground>
  );
}

export default Projects;
