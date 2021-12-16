import React from 'react';
import { Tab } from '@headlessui/react';
import techsList from '../../data/technologiesData';
import { TechTitle } from '../Atoms/Title';
import { AboutDescription } from '../Atoms/Texts';

function Technologies() {
  return (
    <section className="bg-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Tab.Group>
          <Tab.List
            id="tech"
            className="flex justify-between flex-wrap bg-slate-700 rounded-3xl p-2 mb-3"
          >
            {techsList.map((tech) => (
              <Tab
                className={
                  ({ selected }) => `w-1/4 sm:w-1/6 md:w-1/12 flex justify-center
                  items-center p-1 ${selected ? 'bg-slate-100 rounded-2xl' : ''}`
                }
                key={ tech.name }
              >
                <img
                  className="tech-icons w-3/4 h-fit"
                  src={ tech.img }
                  alt={ tech.name }
                />
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels
            className="mt-4 bg-slate-200 bg-opacity-20 rounded-2xl h-64 overflow-y-scroll"
          >
            {techsList.map((tech) => (
              <Tab.Panel key={ tech.name }>
                <div className="grid grid-cols-12 gap-5 p-6">
                  <img
                    className="tech-icons hidden md:block md:col-span-2 lg:col-span-1
                    h-fit"
                    src={ tech.img }
                    alt={ tech.name }
                  />
                  <div className="col-span-12 md:col-span-10 lg:col-span-11">
                    <TechTitle className="mb-4 relative">
                      { tech.name }
                      <img
                        className="block md:hidden absolute top-0 right-0 h-14 w-fit"
                        src={ tech.img }
                        alt={ tech.name }
                      />
                    </TechTitle>
                    {tech.description.map((desc) => (
                      <AboutDescription
                        key={ desc }
                        className="text-gray-100 py-0 pb-1"
                      >
                        { desc }
                      </AboutDescription>
                    ))}
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>);
}

export default Technologies;
