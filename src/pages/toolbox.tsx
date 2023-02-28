import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Wrapper, SimpleLayout } from 'src/components/'
import { categories } from 'src/data/tools'

export const Toolbox = () => {
  const ToolsSection = ({ title, children }) => {
    return (
      <section>
        <h2 className="font-serif text-xl font-medium tracking-tight text-gray-900 dark:text-gray-50 sm:text-2xl">
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
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <div className="group relative h-full rounded-lg border border-transparent border-gray-200 transition-colors hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-500">
          <div className="relative overflow-hidden rounded-lg p-4">
            <div className="flex h-20 w-full items-center justify-center">
              {icon ? (
                <Image
                  src={icon}
                  alt={name}
                  quality="100"
                  height="88"
                  width="88"
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
      </Link>
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
