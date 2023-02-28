import Link from 'next/link'
import { Container, Wrapper, SimpleLayout } from 'src/components/'

import { getAllArticles } from 'src/lib/getAllArticles'
import { TextLink } from 'src/components'
import Image from 'next/image'

export const Articles = ({ articles }) => {
  return (
    <>
      <Container title="Articles">
        <Wrapper>
          <SimpleLayout
            title="Product development, management & design"
            intro="Well, I’m starting fresh. I am switching my blog posts from software development to product-related articles."
          >
            <h2 className="mt-8 font-serif text-xl font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-2xl">
              All articles
            </h2>
            <ul
              role="list"
              className="mt-4 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-1"
            >
              {articles.map((article) => (
                <Link href={`/articles/${article.slug}`}>
                  <article
                    key={article.id}
                    className="flex max-w-xl flex-col items-start justify-between"
                  >
                    <div className="flex items-center gap-x-4 text-xs">
                      <time
                        dateTime={article.datetime}
                        className="text-gray-500 dark:text-gray-500"
                      >
                        {article.date}
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-2 text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
                        <a href={article.href}>
                          <span className="absolute inset-0" />
                          {article.title}
                        </a>
                      </h3>
                      <p className="line-clamp-3 mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {article.description}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </ul>
          </SimpleLayout>
        </Wrapper>
      </Container>
    </>
  )
}

export default Articles

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
