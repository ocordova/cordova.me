export function SimpleLayout({ title, intro, children }) {
  return (
    <>
      <header className="max-w-2xl">
        <h1 className="font-serif text-xl font-medium tracking-tight text-forground sm:text-2xl">
          {title}
        </h1>
        <p className="mt-2 font-serif text-base text-muted-foreground">
          {intro}
        </p>
      </header>
      <div className="mt-4 sm:mt-8">{children}</div>
    </>
  );
}
