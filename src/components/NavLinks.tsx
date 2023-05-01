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
        ['Writing', '/writing'],
        ['Toolbox', '/toolbox'],
        ['Bookmarks', '/bookmarks'],
        ['Bookshelf', '/bookshelf'],
      ].map(([label, href], index) => (
        <Link
          key={label}
          href={href}
          className={clsx(
            'relative -mx-3 -my-2 rounded-lg border px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms] dark:text-gray-400 dark:hover:text-gray-100',
            useRouter().pathname === href
              ? 'border-gray-00 dark:border-gray-500'
              : 'border-transparent dark:border-transparent'
          )}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-gray-100 dark:bg-gray-800/50"
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
