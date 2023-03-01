import clsx from 'clsx'

export const Prose = ({ children, className }) => {
  return (
    <div className={clsx(className, 'prose-gray prose dark:prose-invert')}>
      {children}
    </div>
  )
}
