// @ts-nocheck
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Logo, NavLinks } from '.'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block rounded-lg px-3 py-2.5 text-base leading-7 tracking-tight text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function SunIcon(props) {
    return (
      <svg
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
        <path
          d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
          fill="none"
        />
      </svg>
    )
  }

  function MoonIcon(props) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle('dark')

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full px-3 py-2 backdrop-blur transition"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-gray-100 stroke-gray-500 transition group-hover:fill-gray-200 group-hover:stroke-gray-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-gray-50 [@media(prefers-color-scheme:dark)]:stroke-gray-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-gray-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-gray-600" />
      <MoonIcon className="hidden h-6 w-6 fill-gray-700 stroke-gray-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-gray-400 [@media_not_(prefers-color-scheme:dark)]:fill-gray-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-gray-500" />
    </button>
  )
}

export function Header() {
  return (
    <header>
      <nav>
        <div className="relative z-50 mx-auto flex max-w-2xl justify-between px-6 py-8 sm:px-0">
          <div className="relative z-10 flex w-full items-center justify-between gap-8">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto text-gray-900 dark:text-white" />
            </Link>
            <div className="hidden lg:flex lg:gap-8">
              <NavLinks />
            </div>
            <div className="pointer-events-auto hidden lg:flex">
              <ModeToggle />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 dark:stroke-gray-200  dark:hover:bg-gray-900/50 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur dark:bg-gray-900/30"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top bg-white px-6 pb-6 pt-24 shadow-2xl shadow-gray-900/20 dark:bg-[#08070b]"
                        >
                          <div>
                            <MobileNavLink href="/about">About</MobileNavLink>
                            <MobileNavLink href="/writing">
                              Writing
                            </MobileNavLink>
                            <MobileNavLink href="/toolbox">
                              Toolbox
                            </MobileNavLink>
                            <MobileNavLink href="/bookmarks">
                              Bookmarks
                            </MobileNavLink>
                            <MobileNavLink href="/bookshelf">
                              Bookshelf
                            </MobileNavLink>
                          </div>
                          <div className="mt-8">
                            <ModeToggle />
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </div>
      </nav>
    </header>
  )
}
