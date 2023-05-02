import { parseISO, format, intervalToDuration } from 'date-fns'
import { Container, Wrapper, TextLink } from 'src/components/'
import clsx from 'clsx'

export const About = () => {
  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    })

    let durationStr = ''

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }

    durationStr += `${durationObj.months} mos`

    return durationStr
  }

  return (
    <>
      <Container title="About me">
        <Wrapper>
          <div>
            <h1
              className={clsx(
                'font-serif text-xl font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-2xl'
              )}
            >
              Hello I'm Ós!
            </h1>
          </div>
          <div className="mt-2 space-y-4 text-justify font-serif text-sm text-gray-600 dark:text-gray-400 sm:text-base">
            <p>
              I'm a software engineer with a passion for product development and
              user experience. I'm currently working as a Full Stack Engineer
              and Product Manager.
            </p>
            <p>
              My product development approach focuses on continuous discovery
              and delivery through user feedback and research. I believe that by
              constantly exploring new ideas, experimenting with new features,
              and testing hypotheses, we can create a successful product that
              meets the needs of our users.
            </p>
            <p>
              My future goal is to create an NGO where I can apply my product
              and technology knowledge and experience to solve real-world
              problems, such as those faced by artisan and indigenous
              communities in my country. I'm still researching and gaining
              insights into the problem space, but I'm confident that I'll find
              a way to help.
            </p>
            <p>Outside of work, my hobbies include:</p>
            <ul className="mt-4 list-inside list-disc pl-4 text-gray-600 dark:text-gray-400 md:columns-2">
              <li>Cooking</li>
              <li>Programming</li>
              <li>Trying new restaurants</li>
              <li>Tinkering with technology</li>
              <li>Watching movies and a lot of YouTube</li>
              <li>Reading about cognitive psychology</li>
            </ul>
            <p>
              I retired from traditional social media. However, if you wish to
              get in touch, you can do it via{' '}
              <TextLink
                href="https://t.me/ocordova"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </TextLink>{' '}
              or{' '}
              <TextLink
                href="mailto:hola@ocordova.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                email me
              </TextLink>
              , like in the old days.
            </p>
          </div>
          <div>
            <h2 className="mt-8 font-serif text-lg font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-xl">
              About this site
            </h2>
            <p className="mt-2 font-serif text-sm text-gray-600 dark:text-gray-400 sm:text-base">
              In case you were wondering, this site is:
            </p>
            <ul className="mt-4 list-inside list-disc pl-4 font-serif text-sm text-gray-600 dark:text-gray-400 sm:text-base">
              <li>
                Carefully hand-coded with{' '}
                <TextLink
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visual Studio Code
                </TextLink>
              </li>
              <li>
                Built with{' '}
                <TextLink
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </TextLink>
              </li>
              <li>
                Styled with{' '}
                <TextLink
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </TextLink>
              </li>
              <li>
                Iconified with{' '}
                <TextLink
                  href="https://heroicons.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Heroicons
                </TextLink>
              </li>
              <li>
                Hosted on{' '}
                <TextLink
                  href="https://vercel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </TextLink>
              </li>
              <li>
                Tracking data with{' '}
                <TextLink
                  href="https://plausible.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plausible
                </TextLink>
              </li>
            </ul>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default About
