import React from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { MoonIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { mainNav } from '../config'
import { Link } from 'gatsby'

import Logo from '../assets/images/logo.svg'

const DesktopNavItem = ({ text, to }) => (
  <Link
    className="text-gray-900 hover:text-gray-600 inline-flex items-center px-1 pt-1 font-medium"
    to={to}
  >
    {text}
  </Link>
)

const MobileNavItem = ({ text, to }) => (
  <Disclosure.Button
    as="a"
    href="#"
    className="text-gray-900 hover:text-gray-600 block pl-3 pr-4 py-2 text-base font-medium"
  >
    <Link className="" to={to}>
      {text}
    </Link>
  </Disclosure.Button>
)

export const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-2xl mx-auto px-4 lg:px-0">
            <div className="relative flex justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img className="block h-10 w-auto" src={Logo} alt="Logo" />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {mainNav.map(({ text, to }) => (
                    <DesktopNavItem to={to} text={text} />
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <span className="sr-only">Change theme</span>
                  <MoonIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {mainNav.map(({ text, to }) => (
                <MobileNavItem to={to} text={text} />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
