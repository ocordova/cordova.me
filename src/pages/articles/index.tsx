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
            <h2 className="mt-8 font-serif text-lg font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-xl">
              All articles
            </h2>
            <ul
              role="list"
              className="mt-4 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-1"
            >
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="md:grid md:grid-cols-4 md:items-baseline"
                >
                  <div className="group relative flex flex-col items-start md:col-span-3">
                    <Link href={`/articles/${article.slug}`}>
                      <time
                        dateTime={article.datetime}
                        className="relative z-10 order-first mb-3 mt-1 flex items-center text-sm text-gray-500 dark:text-gray-500 md:hidden"
                      >
                        {article.date}
                      </time>
                      <h3 className="text-base font-medium leading-6 text-gray-900 dark:text-gray-100">
                        <a href={article.href}>
                          <span className="absolute inset-0" />
                          {article.title}
                        </a>
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {article.description}
                      </p>
                    </Link>
                  </div>
                  <time
                    dateTime={article.datetime}
                    className="relative z-10 order-first mb-3 mt-1 flex hidden items-center text-sm text-gray-500 dark:text-gray-500 md:block"
                  >
                    {article.date}
                  </time>
                </article>
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
