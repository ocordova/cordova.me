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
            <h2 className="mt-8 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl">
              All articles
            </h2>
            <ul
              role="list"
              className="mt-4 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-1"
            >
              {articles.map((article) => (
                <Link href={`/articles/${article.slug}`}>
                  <li
                    className="group relative h-full rounded-xl border border-gray-200 dark:border-gray-800"
                    key={article.slug}
                  >
                    <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.white)),var(--quick-links-hover-bg,theme(colors.white)))_padding-box,linear-gradient(to_top,theme(colors.purple.500),theme(colors.pink.500),theme(colors.pink.600))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.900)]" />
                    <div className="relative flex flex-col sm:flex-row">
                      <div className="p-4">
                        <div className="aspect-w-3 aspect-h-4 sm:aspect-none relative h-56 w-full sm:h-full sm:w-56">
                          <Image
                            className="h-full w-full rounded-xl object-cover object-center"
                            src={article.cover}
                            alt={article.title}
                            fill
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-6">
                        <h2 className="text-grey-800 text-xl font-bold dark:text-gray-50">
                          <span className="relative">{article.title}</span>
                        </h2>
                        <div className="relative mt-1 text-sm text-gray-600 dark:text-gray-400">
                          {article.description}
                        </div>
                        <div className="relative mt-3">
                          <TextLink href={`/articles/${article.slug}`}>
                            Read article
                          </TextLink>
                        </div>
                      </div>
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
