import clsx from 'clsx'
import Link from 'next/link'
import { Container, Wrapper } from 'src/components/'
import { randomBackgroundGradient } from 'src/lib/randomGradient'

export const Home = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <div className="mx-auto pt-20 pb-20 sm:pt-40 sm:pb-40">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 sm:text-3xl">
                Óscar Córdova
              </h2>
              <h1
                className={clsx(
                  'text-colorized text-5xl font-bold leading-tight tracking-tight sm:text-6xl sm:leading-snug',
                  randomBackgroundGradient()
                )}
              >
                Product Manager
              </h1>
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                Driving success through strategic product management
              </p>
              <div className="mt-8 flex justify-center gap-x-4">
                <Link
                  href="/about"
                  className="group relative h-full rounded-xl border border-transparent"
                >
                  <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 transition-opacity delay-75 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.white)),var(--quick-links-hover-bg,theme(colors.white)))_padding-box,linear-gradient(to_top,theme(colors.purple.500),theme(colors.pink.500),theme(colors.pink.600))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.900)]" />
                  <div className="relative rounded-xl px-4 py-1.5 text-base font-semibold text-gray-700 dark:text-gray-200">
                    Learn more
                    <span
                      className="ml-1.5 text-gray-500 dark:text-gray-100"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </div>
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
