import React, { useState } from 'react';
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/outline';
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';
import AsyncImage from '../../utils/AsyncImage';
import ContainerWithBackground from '../Molecules/ContainerWithBackground';
import { CarouselButton } from '../Atoms/Buttons';
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
    <ContainerWithBackground id="projects" className="pb-12 pt-12" color>
      <header>
        <h1>Projects</h1>
      </header>
      <div className="flex justify-center">
        <div
          className="w-full lg:w-10/12 md:h-[570px]
          grid grid-cols-12 md:grid-rows-6 shadow-lg shadow-slate-900
          rounded-tr-xl rounded-br-3xl rounded-bl-lg"
        >
          <div
            className="col-span-12 h-[230px] xs:h-[300px] sm:h-[390px]
            md:h-full lg:col-span-11 md:row-span-5 bg-slate-600 rounded-tr-xl
            md:rounded-tr-none relative"
          >
            <AsyncImage
              src={ ProjectsData[curProject].image }
              alt={ ProjectsData[curProject].name }
              className="object-cover w-full h-full rounded-tr-xl lg:rounded-tr-none"
            />
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
            className="col-span-12 h-[70px] md:h-full lg:col-span-11 md:row-span-1
            bg-slate-900 rounded-bl-lg flex items-center px-9 rounded-br-3xl
            lg:rounded-br-none"
          >
            <div className="hidden md:flex">
              <CarouselButton
                type="button"
                className=""
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
                className="bg-red-600"
                // eslint-disable-next-line react/jsx-no-bind
                onClick={ nexButton }
              >
                <ChevronDoubleRightIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </CarouselButton>
            </div>
            <header className="ml-10">
              <h2 className="text-white">{ ProjectsData[curProject].name }</h2>
            </header>
          </div>

        </div>
      </div>
    </ContainerWithBackground>
  );
}

export default Projects;
