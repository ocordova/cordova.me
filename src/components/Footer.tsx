import { CodeBracketIcon } from '@heroicons/react/20/solid'
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
                href="https://github.com/ocordova/ocordova.me"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 text-gray-400 transition-colors hover:text-gray-900"
              >
                <CodeBracketIcon className="h-5 w-5" />
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
