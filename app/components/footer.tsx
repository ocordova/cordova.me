import { ModeToggle } from "~/components/mode-toggle";
import AppLayout from "./layouts/app-layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { quotes } from "~/db/quotes";

export default function Footer() {
  const [index, setIndex] = useState<number | null>(null); // Start with null

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
            {index !== null ? quotes[index] : "Loading..."}
          </blockquote>
        </button>
      </AppLayout>
    </footer>
  );
}
