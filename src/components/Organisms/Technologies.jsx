import React from 'react';
import { Tab } from '@headlessui/react';
import techsList from '../../data/technologiesData';

function Technologies() {
  return (
    <div className="bg-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Tab.Group>
          <Tab.List className="grid grid-cols-12 bg-slate-700 rounded-3xl p-2">
            {techsList.map((tech) => (
              <Tab
                className={
                  ({ selected }) => `col-span-1 flex justify-center items-center p-1
                  ${selected ? 'bg-slate-100 rounded-2xl'
                : ''}
                  `
                }
                key={ tech.name }
              >
                <img
                  className="tech-icons w-3/4 m-0 h-fit"
                  src={ tech.img }
                  alt={ tech.name }
                />
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {/* <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel> */}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>);
}

export default Technologies;
