import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Wrapper, SimpleLayout } from 'src/components/'
import { categories } from 'src/data/tools'

export const Toolbox = () => {
  const ToolsSection = ({ title, children }) => {
    return (
      <section>
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
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
        <div className="group relative h-full rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.white)),var(--quick-links-hover-bg,theme(colors.white)))_padding-box,linear-gradient(to_top,theme(colors.purple.500),theme(colors.pink.500),theme(colors.pink.600))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.800)]" />
          <div className="relative overflow-hidden rounded-xl p-4">
            <div className="flex h-20 w-full items-center justify-center">
              {icon ? (
                <Image
                  src={icon}
                  alt={name}
                  quality="100"
                  height="80"
                  width="80"
                />
              ) : null}
            </div>
            <div className="text-center">
              <h2 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
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
