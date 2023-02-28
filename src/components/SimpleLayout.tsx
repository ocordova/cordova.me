import clsx from 'clsx'
import { randomBackgroundGradient } from 'src/lib/randomGradient'

export function SimpleLayout({ title, intro, children }) {
  return (
    <>
      <header className="max-w-2xl">
        <h1
          className={clsx(
            'font-serif text-3xl font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl'
          )}
        >
          {title}
        </h1>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
          {intro}
        </p>
      </header>
      <div className="mt-4 sm:mt-8">{children}</div>
    </>
  )
}
