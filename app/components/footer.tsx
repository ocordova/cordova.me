import Link from "next/link";
import { ModeToggle, Wrapper } from ".";

export const Footer = () => {
  return (
    <footer className="px-6 py-20">
      <Wrapper>
        <div className="flex justify-between items-center">
          <nav className="flex items-center gap-6 text-sm">
            <Link
              className="text-sm transition-colors hover:text-foreground/80 text-foreground/60"
              href="/colophon"
            >
              Colophon
            </Link>
          </nav>
          <div className="flex justify-end items-center">
            <ModeToggle />
          </div>
        </div>
        <blockquote className="mt-2 text-xs leading-6 text-muted-foreground">
          “He who is not satisfied with a little, is satisfied with nothing.“ –
          Epicurus
        </blockquote>
      </Wrapper>
    </footer>
  );
};
