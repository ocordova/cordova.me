import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export function NavLinks({}) {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  return (
    <>
      {[
        ['About', '/about'],
        ['Articles', '/articles'],
        ['Toolbox', '/toolbox'],
        ['Bookmarks', '/bookmarks'],
        ['Books', '/books'],
      ].map(([label, href], index) => (
        <Link
          key={label}
          href={href}
          className={clsx(
            'relative -my-2 -mx-3 rounded-lg border px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]',
            useRouter().pathname === href ? 'border-gray-200' : 'border-white'
          )}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-gray-100"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{label}</span>
        </Link>
      ))}
    </>
  )
}
