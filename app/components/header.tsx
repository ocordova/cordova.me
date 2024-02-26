"use client";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header>
      <nav>
        <div className="flex w-full mx-auto max-w-xl px-2 py-4 sm:px-0 justify-end">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
