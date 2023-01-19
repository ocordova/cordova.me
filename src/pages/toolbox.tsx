import clsx from 'clsx'
import Link from 'next/link'
import { Container, Wrapper, SimpleLayout } from 'src/components/'
import { categories } from 'src/data/tools'

export const Toolbox = () => {
  const ToolsSection = ({ title, children }) => {
    return (
      <section>
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-4 md:grid-cols-4">
          <h2 className="sticky top-0 z-20 bg-white py-2 text-lg font-bold text-gray-800 dark:text-gray-100">
            {title}
          </h2>
          <div className="md:col-span-3">
            <ul role="list" className="">
              {children}
            </ul>
          </div>
        </div>
      </section>
    )
  }

  const Tool = ({ name, url, children }) => {
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <li className="group relative flex cursor-pointer flex-col items-start rounded-xl p-4 hover:bg-gray-50">
          <div className="text-base font-medium tracking-tight text-gray-700 dark:text-gray-100">
            {name}
          </div>
          <p className="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
            {children}
          </p>
        </li>
      </Link>
    )
  }

  return (
    <>
      <Container title="Toolbox">
        <Wrapper>
          <SimpleLayout
            title="Toolbox"
            intro="Here’s an extensive list of hardware and software I use every day and other things I recommend"
          >
            <div>
              {categories.map((category, index) => {
                return (
                  <ToolsSection key={index} title={category.name}>
                    {category.tools.map((tool, index) => {
                      return (
                        <Tool key={index} name={tool.name} url={tool.url}>
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
