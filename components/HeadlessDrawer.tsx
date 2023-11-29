"use client"
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { EyeOpenIcon } from '@radix-ui/react-icons';

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full"
        onClick={() => setOpen(true)}
      >
        <EyeOpenIcon className="h-6 w-6" />
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={() => setOpen(false)}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="fixed inset-0 transition-transform transform">
                <div className="flex items-center justify-end h-screen">
                  <button
                    className="mr-4 mb-4 p-2 bg-red-500 text-white rounded-full"
                    onClick={() => setOpen(false)}
                  >
                    <EyeOpenIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
