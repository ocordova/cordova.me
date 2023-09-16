import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Wrapper, SimpleLayout } from 'src/components/'
import { categories } from 'src/data/tools'

export const Toolbox = () => {
  const ToolsSection = ({ title, children }) => {
    return (
      <section>
        <h2 className="sticky top-0 z-10 bg-white/80 py-2 font-sans text-base font-semibold tracking-wide text-gray-900 backdrop-blur-sm dark:bg-gray-900/80 dark:text-gray-50 sm:text-lg">
          {title}
        </h2>
        <ul role="list" className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {children}
        </ul>
      </section>
    )
  }

  const Tool = ({ name, url, icon, children }) => {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="group relative h-full rounded-lg border border-gray-200 border-transparent transition-colors hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-500">
          <div className="relative overflow-hidden rounded-lg p-4">
            <div className="flex h-20 w-full items-center justify-center">
              {icon ? (
                <Image
                  quality={100}
                  src={icon}
                  alt={name}
                  height="80"
                  width="80"
                />
              ) : null}
            </div>
            <div className="text-center">
              <h2 className="mt-4 font-serif text-base font-semibold text-gray-900 dark:text-gray-50">
                {name}
              </h2>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                {children}
              </p>
            </div>
          </div>
        </div>
      </a>
    )
  }

  return (
    <>
      <Container title="Toolbox">
        <Wrapper>
          <SimpleLayout
            title="Toolbox"
            intro="Here’s an extensive list of hardware and software I use every day and other things I recommend."
          >
            <div className="space-y-8">
              {categories.map((category, index) => {
                return (
                  <ToolsSection key={index} title={category.name}>
                    {category.tools.map((tool, index) => {
                      return (
                        <Tool key={index} {...tool}>
                          {tool.description}
                        </Tool>
                      )
                    })}
                  </ToolsSection>
                )
              })}
            </div>
          </SimpleLayout>
        </Wrapper>
      </Container>
    </>
  )
}

export default Toolbox
