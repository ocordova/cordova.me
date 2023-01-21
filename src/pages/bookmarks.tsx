import Image from 'next/image'
import { Container, Wrapper, SimpleLayout } from 'src/components/'
import { LinkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

import { bookmarks, Category } from 'src/data/bookmarks'
import clsx from 'clsx'
import { useState } from 'react'

export const Card = ({ title, description, url, icon, category }) => {
  const { hostname } = new URL(url)

  const badgeColors = {
    [Category.article]:
      'bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-500 border-purple-300 dark:border-purple-800',
    [Category.video]:
      'bg-pink-100 dark:bg-pink-500/10 text-pink-800 dark:text-pink-500 border-pink-300 dark:border-pink-800',
    [Category.tool]:
      'bg-green-100 dark:bg-green-500/10 text-green-800 dark:text-green-500 border-green-300 dark:border-green-800',
    [Category.resource]:
      'bg-orange-100 dark:bg-orange-500/10 text-orange-800 dark:text-orange-500 border-orange-300 dark:border-orange-800',
  }

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="group relative h-full rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.white)),var(--quick-links-hover-bg,theme(colors.white)))_padding-box,linear-gradient(to_top,theme(colors.purple.500),theme(colors.pink.500),theme(colors.pink.600))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.900)]" />
        <div className="relative overflow-hidden rounded-xl p-6">
          <div className="flex w-full items-center justify-between">
            <div className="relative h-8 w-8 object-cover">
              <Image src={icon} alt={title} fill className="rounded-full" />
            </div>
            <span
              className={clsx(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize',
                badgeColors[category]
              )}
            >
              {category}
            </span>
          </div>
          <h2 className="mt-4 text-base font-semibold text-gray-900 dark:text-gray-50">
            {title}
          </h2>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="relative z-10 mt-6 flex text-sm font-medium text-gray-700 transition dark:text-gray-500">
            <LinkIcon className="h-5 w-5 flex-none" />
            <span className="ml-2">{hostname}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export const Bookmarks = () => {
  const [current, setCurrent] = useState(null)

  const tabs = [
    {
      name: 'All',
      category: null,
    },
    {
      name: 'Articles',
      category: Category.article,
    },
    {
      name: 'Resources',
      category: Category.resource,
    },
    {
      name: 'Tools',
      category: Category.tool,
    },
    {
      name: 'Videos',
      category: Category.video,
    },
  ]

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    if (current == null) {
      return true
    }

    return bookmark.category == current
  })

  return (
    <>
      <Container title="Bookmarks">
        <Wrapper>
          <SimpleLayout
            title="My Saved Links"
            intro="A collection of handpicked resources I find valuable."
          >
            <div className="flex w-full items-center justify-center">
              <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="tabs"
                  name="tabs"
                  className="block w-full rounded-md border-gray-300 focus:border-sky-500 focus:ring-sky-500"
                  defaultValue={null}
                  onChange={(e) => setCurrent(e.target.value)}
                >
                  {tabs.map((tab) => (
                    <option key={tab.name} value={tab.category}>
                      {tab.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="hidden sm:block">
                <nav className="flex space-x-4" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <div
                      key={tab.name}
                      onClick={() => setCurrent(tab.category)}
                      className={clsx(
                        current == tab.category
                          ? 'border border-sky-300 bg-sky-100 text-sky-800 dark:border-sky-800 dark:bg-sky-500/10 dark:text-sky-500'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
                        'cursor-pointer rounded-md px-4 py-1.5 text-sm font-medium'
                      )}
                    >
                      {tab.name}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {filteredBookmarks.map((bookmark) => {
                return <Card key={bookmark.title} {...bookmark} />
              })}
            </div>
          </SimpleLayout>
        </Wrapper>
      </Container>
    </>
  )
}

export default Bookmarks