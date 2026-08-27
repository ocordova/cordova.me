import { ModeToggle } from "~/components/mode-toggle";
import AppLayout from "./layouts/app-layout";
import { Link, useRouteLoaderData } from "react-router";
import { useState } from "react";
import { quotes } from "~/db/quotes";
import type { LoaderData } from "~/root";

export default function Footer() {
  const root = useRouteLoaderData<{ quoteIndex: LoaderData["quoteIndex"] }>(
    "root"
  );
  const [index, setIndex] = useState(root?.quoteIndex ?? 0);

  const nextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  return (
    <footer className="px-6 py-12">
      <AppLayout>
        <div className="h-px bg-border/50 my-4" />
        <div className="flex justify-between items-start gap-2">
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-6 text-[0.8125rem]">
            {[
              { to: "/", label: "Home" },
              { to: "/thoughts", label: "Thoughts" },
              { to: "/bookmarks", label: "Bookmarks" },
              { to: "/uses", label: "Uses" },
              { to: "/colophon", label: "Colophon" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                className="inline-flex min-h-[44px] items-center text-muted-foreground transition-colors hover:text-foreground"
                to={to}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-end items-center">
            <ModeToggle />
          </div>
        </div>
        <button
          onClick={nextQuote}
          className="mt-4"
          type="button"
          aria-label="Show next quote"
        >
          <blockquote className="text-left text-sm leading-7 text-muted-foreground text-pretty font-serif italic">
            {quotes[index]}
          </blockquote>
        </button>
      </AppLayout>
    </footer>
  );
}
