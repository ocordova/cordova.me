import { ModeToggle } from "~/components/mode-toggle";
import AppLayout from "./layouts/app-layout";
import { Link } from "@remix-run/react";

export default function Footer() {
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
        <blockquote className="mt-2 text-xs leading-6 text-muted-foreground">
          “He who is not satisfied with a little, is satisfied with nothing.” -
          Epicurus
        </blockquote>
      </AppLayout>
    </footer>
  );
}
