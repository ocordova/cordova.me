export const classNames = (...classes: (string | Falsy)[]) => {
  return classes.filter(Boolean).join(' ')
}
