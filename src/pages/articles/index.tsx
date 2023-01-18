import Link from 'next/link'
import { Container, Wrapper, SimpleLayout } from 'src/components/'

import { getAllArticles } from 'src/lib/getAllArticles'
import { TextLink } from 'src/components'

export const Articles = ({ articles }) => {
  return (
    <>
      <Container title="Articles">
        <Wrapper>
          <SimpleLayout
            title="Product development, management & design"
            intro="Well, I’m starting fresh. I am switching my blog posts from software development to product-related articles."
          >
            <h2 className="mt-8 text-xl font-bold tracking-tight sm:text-2xl">
              All articles
            </h2>
            <ul
              role="list"
              className="mt-4 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2"
            >
              {articles.map((article) => (
                <Link href={`/articles/${article.slug}`}>
                  <li
                    className="group relative  flex h-full flex-col overflow-hidden"
                    key={article.slug}
                  >
                    <div className="aspect-w-3 aspect-h-4 sm:aspect-none h-56 bg-gray-200">
                      <img
                        className="h-full w-full rounded-lg object-cover object-center"
                        src={article.cover}
                        alt=""
                      />
                    </div>
                    <h2 className="text-grey-800 dark:text-grey-100 mt-3 text-xl font-bold">
                      <span className="relative z-10">{article.title}</span>
                    </h2>
                    <div className="relative mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {article.description}
                    </div>
                    <div className="mt-3">
                      <TextLink href={`/articles/${article.slug}`}>
                        Read article
                      </TextLink>
                    </div>
                  </li>
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
