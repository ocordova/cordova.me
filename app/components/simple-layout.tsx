export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="max-w-2xl">
        <h1 className="font-semibold">{title}</h1>
        {intro && <p className="text-sm text-muted-foreground">{intro}</p>}
      </header>
      <div className="mt-4 sm:mt-8">{children}</div>
    </>
  );
}
