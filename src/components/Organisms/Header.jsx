import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { BlackLinks, WhiteLinks } from '../Atoms/LinkTexts';
import { HeaderIcons } from '../Atoms/Icons';
import LinkedinIcon from '../../icons/linkedin.svg';
import GitHubIcon from '../../icons/github.svg';

const linkedinLink = 'https://www.linkedin.com/in/pauloeduardods/';
const ghLink = 'https://github.com/pauloeduardods';

const resources = [
  {
    name: 'Email',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Linkedin',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'WhatsApp',
    href: '#',
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Popover className="relative bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="flex justify-between items-center border-b-2
          border-gray-500 py-6 md:justify-start md:space-x-10"
        >
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Paulo Eduardo Logo</span>
              <HeaderIcons
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="paulo eduardo logo"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button
              className="bg-slate-800 rounded-md inline-flex items-center justify-center
              text-gray-200 hover:text-white hover:bg-gray-600 focus:outline-none p-2
              focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Abrir menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link to="#about">
              <WhiteLinks>Sobre</WhiteLinks>
            </Link>
            <Link to="#projects">
              <WhiteLinks>Projetos</WhiteLinks>
            </Link>
            <Link to="#tech">
              <WhiteLinks>Tecnologias</WhiteLinks>
            </Link>

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
                    <WhiteLinks>Mais</WhiteLinks>
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
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={ item.name }
                              href={ item.href }
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
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
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href={ linkedinLink } className="mr-4" target="_blank" rel="noreferrer">
              <HeaderIcons src={ LinkedinIcon } alt="linkedin" />
            </a>
            <a href={ ghLink } target="_blank" rel="noreferrer">
              <HeaderIcons src={ GitHubIcon } alt="github" />
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={ Fragment }
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
