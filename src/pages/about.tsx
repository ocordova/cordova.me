import { parseISO, format, intervalToDuration } from 'date-fns'
import { Container, Wrapper, TextLink } from 'src/components/'
import { jobs, education } from 'src/data/about'
import clsx from 'clsx'
import { randomBackgroundGradient } from '../lib/randomGradient'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

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
                'text-colorized text-4xl font-bold tracking-tight sm:text-5xl',
                randomBackgroundGradient()
              )}
            >
              Hello I'm Óscar!
            </h1>
          </div>
          <div className="mt-6 space-y-4 text-justify text-base text-gray-600">
            <p>
              I am a Product Manager with over three years of freelance
              experience and over ten years of experience as a Full Stack
              Engineer and in Tech Management roles.
            </p>
            <p>
              I am a results-driven product manager with a strong product
              strategy, planning, and design background. I have a proven track
              record of leading cross-functional teams to deliver successful
              products that meet customer needs and achieve business results.
            </p>
            <p>
              My experience in design thinking and user research allows me to
              develop intuitive, user-centered products. In addition, I am
              skilled in product analytics and use data to inform decisions and
              measure success.
            </p>
          </div>
          <div>
            <h2 className="mt-8 text-xl font-bold tracking-tight sm:text-2xl">
              Career
            </h2>
            <div className="flow-root">
              <ul role="list" className="mt-8">
                {jobs.map((job, jobIdx) => (
                  <li key={jobIdx}>
                    <div className="relative pb-6">
                      {jobIdx !== jobs.length - 1 ? (
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="jobs-start relative flex space-x-3">
                        <div className="relative">
                          <img
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                            src={job.icon}
                            alt={job.company}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm">
                              <div className="font-bold text-gray-900">
                                {job.title}
                              </div>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-700">
                              {job.company} · {job.type}
                            </p>
                          </div>
                          <div className="-mt-0.5 text-sm text-gray-500">
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
            <h2 className="mt-8 text-xl font-bold tracking-tight sm:text-2xl">
              Education
            </h2>
            <div className="flow-root">
              <ul role="list" className="mt-6">
                {education.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <div className="relative pb-8">
                      {itemIdx !== education.length - 1 ? (
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex items-start space-x-3">
                        <div className="relative">
                          <img
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                            src={item.icon}
                            alt={item.company}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm">
                              <div className="font-bold text-gray-900">
                                {item.title}
                              </div>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-700">
                              {item.company}
                            </p>
                          </div>
                          <div className="-mt-0.5 text-sm text-gray-500">
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
            <h2 className="mt-8 text-xl font-bold tracking-tight sm:text-2xl">
              About this site
            </h2>
            <p className="mt-4 text-base text-gray-600">
              In case you were wondering, this site is:
            </p>
            <ul className="mt-4 list-inside list-disc pl-4 text-base text-gray-600">
              <li>
                Carefully hand-coded with{' '}
                <TextLink href="https://code.visualstudio.com/">
                  Visual Studio Code
                </TextLink>
              </li>
              <li>
                Styled with{' '}
                <TextLink href="https://tailwindcss.com/">
                  Tailwind CSS
                </TextLink>
              </li>
              <li>
                Iconified with{' '}
                <TextLink href="https://heroicons.com/">Heroicons</TextLink>
              </li>
              <li>
                Hosted on <TextLink href="https://vercel.com/">Vercel</TextLink>
              </li>
            </ul>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default About
