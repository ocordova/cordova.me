import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export const TextLink = ({ href, newWindow, children, target, rel }: any) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      {...(newWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="text-gray-900 underline hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
    >
      <div className="inline-flex items-center">{children}</div>
    </Link>
  )
}
