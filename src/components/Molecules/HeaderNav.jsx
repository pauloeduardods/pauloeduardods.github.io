import React, { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Popover, Transition } from '@headlessui/react';
import { TextWhite, TextDescription } from '../Atoms/Texts';
import { ContactIcons } from '../Atoms/Icons';
import { contacts } from '../../data/contactData';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function HeaderNav() {
  return (
    <>
      <a href="#about">
        <TextWhite>Sobre</TextWhite>
      </a>
      <a href="#tech">
        <TextWhite>Tecnologias</TextWhite>
      </a>
      <a href="#projects">
        <TextWhite>Projetos</TextWhite>
      </a>

      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={ classNames(
                open ? 'text-gray-500' : 'text-white',
                `group rounded-md inline-flex items-center text-base
                      font-medium hover:text-gray-900 focus:outline-none
                      focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400`,
              ) }
            >
              <TextWhite>Mais</TextWhite>
              <ChevronDownIcon
                className={ classNames(
                  open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-500',
                ) }
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={ Fragment }
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute z-10 left-1/2 transform -translate-x-1/2
                mt-3 px-2 w-screen max-w-md sm:px-0"
              >
                <div
                  className="rounded-lg shadow-md shadow-slate-700 ring-1 ring-white
                  ring-opacity-5 overflow-hidden"
                >
                  <div
                    className="relative grid gap-6 bg-slate-800
                    px-5 py-6 sm:gap-8 sm:p-8"
                  >
                    {contacts.map((item) => (
                      <a
                        key={ item.name }
                        href={ item.href }
                        className="-m-3 p-3 flex items-start rounded-lg
                        hover:bg-slate-600"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ContactIcons src={ item.icon } alt={ item.name } />
                        <div className="ml-4">
                          <TextWhite className="w-full"><p>{item.name}</p></TextWhite>
                          <TextDescription>{item.description}</TextDescription>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}

export default HeaderNav;
