import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { bookmarks } from '../../data/bookmarks'

const BookmarksPage = () => {
  return (
    <Layout>
      <Seo title="Bookmarks" />
      <div>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900">
          Bookmarks
        </h1>
        <div className="prose max-w-none mt-2">
          <p>
            Collection of tools and fun websites, I hope you found them useful.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <ul role="list" className="divide-y divide-gray-200">
          {bookmarks.map((bookmark, idx) => (
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:bg-gray-50"
            >
              <li
                key={idx}
                className="py-4 px-2 flex justify-between items-center"
              >
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {bookmark.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {bookmark.description}
                  </p>
                </div>
                <div>
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default BookmarksPage
