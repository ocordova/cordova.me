import Image from 'next/image'
import Link from 'next/link'
import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid'

import { Container, Prose } from '@/components/'
import { formatDate } from '@/lib/formatDate'

export function ArticleLayout({ children, meta, isRssFeed = false }) {
  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Container title={meta.title} description={meta.description}>
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <div className="flex">
              <Link
                href="/articles"
                className="flex text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                <ArrowSmallLeftIcon className="h-6 w-6 flex-none" />
                <span className="mr-2.5">Back to blog</span>
              </Link>
            </div>
            <article className="mt-8">
              <header className="flex flex-col">
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-sm text-gray-500 dark:text-gray-500"
                >
                  <span>{formatDate(meta.date)}</span>
                </time>
              </header>
              {meta.cover && (
                <div className="w-fullaspect-w-3 aspect-h-4 sm:aspect-none relative mt-4 h-[250px]">
                  <Image
                    className="rounded-lg object-cover"
                    src={meta.cover}
                    fill
                    alt={meta.coverAlt}
                  />
                </div>
              )}
              <Prose className="mt-4">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
