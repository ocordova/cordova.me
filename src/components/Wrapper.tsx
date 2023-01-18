import clsx from 'clsx'

export const Wrapper = ({ className, ...props }: any) => {
  return (
    <div
      className={clsx('mx-auto max-w-2xl px-4 sm:px-0', className)}
      {...props}
    />
  )
}
