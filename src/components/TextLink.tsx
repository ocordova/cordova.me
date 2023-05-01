import Link from 'next/link'

export const TextLink = ({ href, newWindow, children, target, rel }: any) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      {...(newWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="text-gray-600 underline decoration-gray-400 underline-offset-[3px] hover:decoration-gray-900 dark:text-gray-400"
    >
      {children}
    </Link>
  )
}
