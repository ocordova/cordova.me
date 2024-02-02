"use client";
import { MainNav, MobileNav } from ".";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header>
      <nav>
        <div className="relative z-50 mx-auto flex max-w-xl justify-between px-6 py-4 sm:px-0">
          <div className="relative z-10 flex w-full items-center justify-between gap-8">
            <MainNav />
            <MobileNav />
            <div className="pointer-events-auto">
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
