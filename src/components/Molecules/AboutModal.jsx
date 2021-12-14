import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import AboutModalText from './AboutModalText';

function AboutModal({ open, setOpen }) {
  return (
    <Transition.Root show={ open } as={ Fragment }>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={ setOpen }>
        <div
          className="flex items-end justify-center min-h-screen pt-4 px-4
          pb-20 text-center sm:block sm:p-0"
        >
          <Transition.Child
            as={ Fragment }
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={ Fragment }
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block bg-slate-700 rounded-lg text-left overflow-hidden
              shadow-xl transform transition-all my-auto align-middle max-w-7xl mx-0
              sm:mx-6"
            >
              <div className="relative w-full">
                <div className="absolute top-0 right-0 p-2">
                  <button
                    type="button"
                    onClick={ () => setOpen(!open) }
                  >
                    <XIcon className="h-10 w-10 text-gray-50" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="bg-slate-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 my-6">
                <div className="sm:flex sm:items-start">
                  <AboutModalText />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

AboutModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default AboutModal;
