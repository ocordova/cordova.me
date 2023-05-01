import Image from 'next/image'
import Link from 'next/link'
import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid'

import { Container, Prose } from '@/components/'
import { formatDate } from '@/lib/formatDate'

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  back = true,
}) {
  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Container title={meta.title} description={meta.description}>
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {back ? (
              <div className="flex">
                <Link
                  href="/writing"
                  className="flex text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  <ArrowSmallLeftIcon className="h-6 w-6 flex-none" />
                  <span className="mr-2.5">Back to writing</span>
                </Link>
              </div>
            ) : null}
            <article className="mt-8">
              <header className="flex flex-col">
                <h1 className="font-serif text-2xl font-medium tracking-wide text-gray-800 dark:text-gray-100 sm:text-3xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-500"
                >
                  <span>{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8 text-justify">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
