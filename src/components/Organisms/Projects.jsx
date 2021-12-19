import React, { useState } from 'react';
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/outline';
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
              className="md:hidden absolute left-0 top-0 flex items-center h-full"
              onClick={ prevButton }
            >
              <ChevronDoubleLeftIcon className="h-8 w-8 ml-2 mr-12" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="md:hidden absolute right-0 top-0 flex items-center h-full"
              onClick={ nexButton }
            >
              <ChevronDoubleRightIcon className="h-8 w-8 mr-2 ml-12" aria-hidden="true" />
            </button>
          </div>
          <div
            className="hidden lg:block lg:col-span-1 lg:row-span-6 bg-slate-800
            rounded-tr-xl rounded-br-3xl"
          >
            sla
          </div>
          <div
            className="col-span-12 h-[70px] md:h-full lg:col-span-11 md:row-span-1
            bg-slate-900 rounded-bl-lg flex items-center px-9 rounded-br-3xl
            lg:rounded-br-none"
          >
            <div className="hidden md:block">
              <CarouselButton
                type="button"
                className="bg-red-600"
                onClick={ prevButton }
              >
                Prev
              </CarouselButton>
              <CarouselButton
                type="button"
                className="bg-red-600"
                onClick={ nexButton }
              >
                Next
              </CarouselButton>
            </div>
          </div>

        </div>
      </div>
    </ContainerWithBackground>
  );
}

export default Projects;
