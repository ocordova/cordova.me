import { CodeBracketIcon } from '@heroicons/react/20/solid'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Wrapper } from 'src/components'

export const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <div className="mt-8 border-t border-gray-50 text-gray-500 dark:border-gray-800 dark:text-gray-400">
          <div className="flex flex-col items-center pt-8 pb-12 md:flex-row md:justify-between md:pt-6">
            <div className="mt-6 flex flex-row items-center justify-center text-sm sm:justify-start md:mt-0">
              Made with{' '}
              <span className="flex px-1">
                <HeartIcon className="absolute h-4 w-auto animate-ping text-gray-600 opacity-60 dark:text-gray-400" />
                <HeartIcon className="relative h-4 w-auto text-gray-700 dark:text-gray-500" />
              </span>{' '}
              in Mexico
            </div>
            <div className="mt-6 flex flex-row justify-center md:mt-0 md:justify-start">
              <div className="text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-100">
                <a
                  href="https://github.com/ocordova/ocordova.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-base"
                >
                  <CodeBracketIcon className="h-5 w-5" />{' '}
                  <span className="text-sm md:hidden">Source code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}
