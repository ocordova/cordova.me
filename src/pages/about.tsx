import { parseISO, format, intervalToDuration } from 'date-fns'
import { Container, Wrapper, TextLink } from 'src/components/'
import { jobs, education } from 'src/data/about'
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
                'font-serif text-3xl font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-3xl'
              )}
            >
              Hello I'm Ós!
            </h1>
          </div>
          <div className="mt-6 space-y-4 text-justify text-base text-gray-600 dark:text-gray-400">
            <p>
              I have over 3 years of experience as a freelance Product Manager
              and 11 years of experience in project management, tech leadership,
              and full-stack development.{' '}
            </p>
            <p>
              I'm passionate about product discovery and solving real-world
              problems. I firmly believe that successful products are built by
              deeply understanding user needs and problems. Therefore, modern
              product discovery is critical to achieving this.{' '}
            </p>
            <p>
              My product management approach focuses on continuous discovery and
              delivery through user feedback and research. I believe that by
              constantly exploring new ideas, experimenting with new features,
              and testing hypotheses, we can create a successful product that
              meets the needs of our users.
            </p>
            <p>
              Outside of work, my hobbies include:
              <ul className="mt-4 list-inside list-disc pl-4 text-base text-gray-600 dark:text-gray-400 md:columns-2">
                <li>Cooking</li>
                <li>Programming</li>
                <li>Trying new restaurants</li>
                <li>Tinkering with technology</li>
                <li>Watching movies and a lot of YouTube</li>
                <li>Reading about cognitive psychology</li>
              </ul>
            </p>
            <p>
              I deleted my Twitter and Instagram accounts. However, if you wish
              to get in touch, you can do it via{' '}
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
              Career
            </h2>
            <div className="flow-root">
              <ul role="list" className="mt-8">
                {jobs.map((job, jobIdx) => (
                  <li key={jobIdx}>
                    <div className="relative pb-6">
                      {jobIdx !== jobs.length - 1 ? (
                        <span
                          className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="jobs-start relative flex space-x-3">
                        <div className="relative">
                          <img
                            className="flex h-10 w-10 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900"
                            src={job.icon}
                            alt={job.company}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm">
                              <div className="font-semibold text-gray-900 dark:text-gray-50">
                                {job.title}
                              </div>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-400">
                              {job.company} · {job.type}
                            </p>
                          </div>
                          <div className="-mt-0.5 text-sm text-gray-500 dark:text-gray-600">
                            <p>
                              <span>
                                {format(parseISO(job.startDate), 'LLL yyyy')}
                              </span>{' '}
                              <span> – </span>{' '}
                              <span>
                                {' '}
                                {job.endDate
                                  ? format(parseISO(job.endDate), 'LLL yyyy')
                                  : 'Present'}{' '}
                              </span>
                              ({getDuration(job.startDate, job.endDate)})
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="mt-8 font-serif text-lg font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-xl">
              Education
            </h2>
            <div className="flow-root">
              <ul role="list" className="mt-6">
                {education.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <div className="relative pb-8">
                      {itemIdx !== education.length - 1 ? (
                        <span
                          className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex items-start space-x-3">
                        <div className="relative">
                          <img
                            className="flex h-10 w-10 items-center justify-center rounded-full ring-white dark:ring-gray-900"
                            src={item.icon}
                            alt={item.company}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm">
                              <div className="font-semibold text-gray-900 dark:text-gray-50">
                                {item.title}
                              </div>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-400">
                              {item.company}
                            </p>
                          </div>
                          <div className="-mt-0.5 text-sm text-gray-500 dark:text-gray-500">
                            <p>
                              <span>
                                {format(parseISO(item.startDate), 'LLL yyyy')}
                              </span>{' '}
                              <span> – </span>{' '}
                              <span>
                                {' '}
                                {item.endDate
                                  ? format(parseISO(item.endDate), 'LLL yyyy')
                                  : 'Present'}{' '}
                              </span>
                              ({getDuration(item.startDate, item.endDate)})
                            </p>
                          </div>
                          {item.certificateUrl ? (
                            <div className="text-sm text-gray-700">
                              <p>
                                <TextLink href={item.certificateUrl} newWindow>
                                  View certificate
                                </TextLink>
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="mt-8 font-serif text-lg font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-xl">
              About this site
            </h2>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              In case you were wondering, this site is:
            </p>
            <ul className="mt-4 list-inside list-disc pl-4 text-base text-gray-600 dark:text-gray-400">
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
