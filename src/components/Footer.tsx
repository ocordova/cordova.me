import { HeartIcon } from '@heroicons/react/24/outline'
import { Wrapper } from 'src/components'

export const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <div className="mt-8 border-t border-gray-50 text-gray-500 ">
          <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
            <div className="mt-6 flex flex-row justify-center md:mt-0 md:justify-start">
              <a
                href="/feed.xml"
                className="text-gray-400 transition-colors hover:text-red-400"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <title>Logo RSS</title>
                  <path d="M108.56 342.78a60.34 60.34 0 1060.56 60.44 60.63 60.63 0 00-60.56-60.44z" />
                  <path d="M48 186.67v86.55c52 0 101.94 15.39 138.67 52.11s52 86.56 52 138.67h86.66c0-151.56-125.66-277.33-277.33-277.33z" />
                  <path d="M48 48v86.56c185.25 0 329.22 144.08 329.22 329.44H464C464 234.66 277.67 48 48 48z" />
                </svg>
              </a>
              <a
                href="https://github.com/ocordova"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 text-gray-400 transition-colors hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 512 512"
                >
                  <title>Logo Github</title>
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </a>
            </div>
            <div className="mt-6 flex flex-row items-center justify-center sm:justify-start md:mt-0">
              Made with{' '}
              <span className="flex px-1">
                <HeartIcon className="absolute h-5 w-auto animate-ping text-red-600 opacity-60" />
                <HeartIcon className="relative h-5 w-auto text-red-700" />
              </span>{' '}
              in Mexico
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}
