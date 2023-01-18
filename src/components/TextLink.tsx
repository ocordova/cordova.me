import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export const TextLink = ({ href, newWindow, children }: any) => {
  return (
    <Link
      href={href}
      {...(newWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="bg-gradient-to-r from-purple-500 to-pink-500 bg-[length:0px_2px] bg-left-bottom bg-no-repeat pb-0.5 text-pink-500 transition-[background-size] duration-500 hover:bg-[length:100%_2px]"
    >
      <div className="inline-flex items-center">{children}</div>
    </Link>
  )
}
