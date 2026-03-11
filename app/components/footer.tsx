import { ModeToggle } from "~/components/mode-toggle";
import AppLayout from "./layouts/app-layout";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { quotes } from "~/db/quotes";
import { QuoteSkeleton } from "./ui/content-skeletons";

export default function Footer() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const startIndex = Math.floor(Math.random() * quotes.length);
    setIndex(startIndex);
  }, []);

  const nextQuote = () => {
    setIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex + 1) % quotes.length : 0
    );
  };

  return (
    <footer className="px-6 py-12">
      <AppLayout>
        <div className="h-px bg-border/50 my-4" />
        <div className="flex justify-between items-center">
          <nav className="flex items-center gap-6 text-[0.8125rem]">
            <Link
              className="text-muted-foreground transition-colors hover:text-foreground"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-muted-foreground transition-colors hover:text-foreground"
              to="/thoughts"
            >
              Thoughts
            </Link>
            <Link
              className="text-muted-foreground transition-colors hover:text-foreground"
              to="/bookmarks"
            >
              Bookmarks
            </Link>
            <Link
              className="text-muted-foreground transition-colors hover:text-foreground"
              to="/uses"
            >
              Uses
            </Link>
            <Link
              className="text-muted-foreground transition-colors hover:text-foreground"
              to="/colophon"
            >
              Colophon
            </Link>
          </nav>
          <div className="flex justify-end items-center">
            <ModeToggle />
          </div>
        </div>
        <button
          onClick={nextQuote}
          className="hover:cursor-default"
          aria-label="Show next quote"
        >
          <blockquote className="mt-2 text-left text-sm leading-7 text-muted-foreground text-pretty font-serif italic">
            {index !== null ? quotes[index] : <QuoteSkeleton />}
          </blockquote>
        </button>
      </AppLayout>
    </footer>
  );
}
