import clsx from 'clsx'
import Link from 'next/link'
import { Container, Wrapper } from 'src/components/'

export const Home = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <div className="mx-auto pb-20 pt-20 sm:pb-40 sm:pt-40">
            <div className="text-center">
              <h2 className="text-xl font-normal text-gray-600 dark:text-gray-400 sm:text-2xl">
                Óscar Córdova
              </h2>
              <h1
                className={clsx(
                  'font-serif text-4xl font-normal leading-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-snug'
                )}
              >
                Product Manager
              </h1>
              <p className="text-base leading-8 text-gray-600 dark:text-gray-400">
                Problem solver. Not feature builder.
              </p>
              <div className="mt-8 flex justify-center gap-x-4">
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-lg border border-transparent px-4 py-1.5 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 dark:text-gray-100 "
                >
                  Learn more
                  <span
                    className="ml-1.5 text-gray-500 dark:text-gray-100"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Home
