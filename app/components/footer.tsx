import { ModeToggle } from "~/components/mode-toggle";
import AppLayout from "./layouts/app-layout";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { quotes } from "~/db/quotes";

export default function Footer() {
  const startIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(startIndex);

  const nextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };
  return (
    <footer className="px-6 py-12">
      <AppLayout>
        <div className="h-px bg-border/50 my-4" />
        <div className="flex justify-between items-center">
          <nav className="flex items-center gap-6 text-sm">
            <Link
              className="text-sm transition-colors hover:text-foreground/80 text-foreground/60"
              to="/colophon"
            >
              Colophon
            </Link>
          </nav>
          <div className="flex justify-end items-center">
            <ModeToggle />
          </div>
        </div>
        <button onClick={nextQuote} className="hover:cursor-default">
          <blockquote className="mt-2 text-left text-xs leading-6 text-muted-foreground text-pretty ">
            {quotes[index]}
          </blockquote>
        </button>
      </AppLayout>
    </footer>
  );
}
