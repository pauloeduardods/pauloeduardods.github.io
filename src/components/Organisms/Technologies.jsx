import React from 'react';
import { Tab } from '@headlessui/react';
import FadeIn from 'react-fade-in';
import AsyncImage from '../../utils/AsyncImage';
import techsList from '../../data/technologiesData';
import ContainerWithBackground from '../Molecules/ContainerWithBackground';
import { SectionTitle, TechTitle } from '../Atoms/Title';
import { AboutDescription } from '../Atoms/Texts';
import { TagName, ArrowTag } from '../Atoms/HtmlTags';

function Technologies() {
  return (
    <ContainerWithBackground className="py-6" id="tech" color={ false }>
      <FadeIn transitionDuration="800">
        <header>
          <SectionTitle className="text-left pb-3">
            <ArrowTag>{'<'}</ArrowTag>
            <TagName>Tecnologias</TagName>
            <ArrowTag>{'>'}</ArrowTag>
          </SectionTitle>
        </header>
      </FadeIn>
      <FadeIn delay="250" transitionDuration="1000">
        <Tab.Group>
          <Tab.List
            className="flex justify-between flex-wrap bg-slate-700 rounded-3xl p-2 mb-3"
          >
            {techsList.map((tech) => (
              <Tab
                className={
                  ({ selected }) => `w-1/4 xs:w-1/5 sm:w-1/7 md:w-1/12 flex 
                justify-center items-center p-1 
                ${selected ? 'bg-slate-100 rounded-2xl' : ''}`
                }
                key={ tech.name }
              >
                <AsyncImage
                  className="w-3/4"
                  src={ tech.img }
                  alt={ tech.name }
                />
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels
            className="mt-4 bg-slate-200 bg-opacity-20 rounded-2xl
          h-[305px] xs:h-[235px] sm:h-48 md:h-52 lg:h-48 overflow-y-auto"
          >
            {techsList.map((tech) => (
              <Tab.Panel key={ tech.name }>
                <div className="grid grid-cols-12 gap-5 p-6">
                  <div className="hidden md:block md:col-span-2 lg:col-span-1">
                    <AsyncImage
                      src={ tech.img }
                      alt={ tech.name }
                    />
                  </div>
                  <div className="col-span-12 md:col-span-10 lg:col-span-11">
                    <TechTitle className="mb-4 relative">
                      {tech.name}
                      <AsyncImage
                        className="block md:hidden absolute top-0 right-0 h-14"
                        src={ tech.img }
                        alt={ tech.name }
                      />
                    </TechTitle>
                    {tech.description.map((desc) => (
                      <AboutDescription
                        key={ desc }
                        className="text-gray-100 py-0 pb-1 indent-0 pl-3"
                      >
                        {desc}
                      </AboutDescription>
                    ))}
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </FadeIn>
      <FadeIn delay="200" transitionDuration="800">
        <SectionTitle className="text-left pt-6">
          <ArrowTag>{'</'}</ArrowTag>
          <TagName>Tecnologias</TagName>
          <ArrowTag>{'>'}</ArrowTag>
        </SectionTitle>
      </FadeIn>
    </ContainerWithBackground>);
}

export default Technologies;
