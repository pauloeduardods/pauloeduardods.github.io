import React from 'react';
import { Link } from 'react-router-dom';
import { Popover } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

import { TextWhite } from '../Atoms/Texts';
import { HeaderIcons, ContactIcons } from '../Atoms/Icons';

import {
  pLogo,
  contacts,
} from '../../data/contactData';

function HeaderNavPanel() {
  return (
    <div
      className="rounded-lg shadow-md shadow-slate-700 ring-1 ring-white ring-opacity-5
      bg-slate-800 divide-y-2 divide-slate-700 z-40"
    >
      <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex">
            <HeaderIcons
              src={ pLogo }
              alt="Paulo Eduardo Logo"
            />
            <span
              className="ml-1 mt-1 sm:mt-2 text-2xl font-bold max-w-xs overflow-hidden
              h-8 text-gray-400 font-sans"
            >
              aulo Eduardo
            </span>
          </Link>
          <div className="-mr-2">
            <Popover.Button
              className="bg-slate-800 rounded-md p-2 inline-flex items-center
              justify-center text-gray-200 hover:text-white hover:bg-gray-600
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Fechar Menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="mt-6">
          <nav className="grid gap-y-8">
            {contacts.map((item) => (
              <a
                key={ item.name }
                href={ item.href }
                className="-m-3 p-3 flex items-center rounded-md hover:bg-slate-600"
                target="_blank"
                rel="noreferrer"
              >
                <ContactIcons src={ item.icon } alt={ item.name } />
                <TextWhite className="w-full ml-3">{item.name}</TextWhite>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderNavPanel;
