import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="Not Found" />
      <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-center">
              <h1 className="mt-2 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  className="whitespace-nowrap text-base text-colorized hover:text-gray-900"
                >
                  Go back home<span aria-hidden="true"> &rarr; </span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default NotFoundPage
