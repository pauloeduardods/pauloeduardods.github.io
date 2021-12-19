import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import {
  MenuIcon,
} from '@heroicons/react/outline';
import ContainerWithBackground from '../Molecules/ContainerWithBackground';
import { HeaderIcons } from '../Atoms/Icons';
import HeaderNav from '../Molecules/HeaderNav';
import HeaderNavPanel from '../Molecules/HeaderNavPanel';

import {
  linkedinLink,
  ghLink,
  LinkedinIcon,
  GitHubIcon,
  pLogo,
} from '../../data/contactData';

function Header() {
  return (
    <header>
      <Popover className="relative border-b-2 border-gray-800">
        <ContainerWithBackground color={ false }>
          <div
            className="flex justify-between items-center
          py-6 md:justify-start md:space-x-10"
          >
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Paulo Eduardo Logo</span>
                <HeaderIcons
                  src={ pLogo }
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
              <HeaderNav />
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
        </ContainerWithBackground>

        <Transition
          as={ Fragment }
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform
          origin-top-right md:hidden"
          >
            <HeaderNavPanel />
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}

export default Header;
