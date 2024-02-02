"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

export function MainNav() {
  const pathname = usePathname()
  return (
    <div className="mr-4 hidden md:flex">
  <Link href="/" className="mr-8 flex items-center space-x-2">
        <Logo className="h-8 w-8" />
        <span className="sr-only font-bold sm:inline-block">
          Ó
        </span>
      </Link>
    <nav className="flex items-center gap-6 text-sm">
      {[
        ["About", "/about"],
        ["Writing", "/writing"],
        ["Toolbox", "/toolbox"],
        ["Bookmarks", "/bookmarks"],
        ["Bookshelf", "/bookshelf"],
      ].map(([title, href], index) => (
        <Link href={href} key={index}
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === href ? "text-foreground" : "text-foreground/60"
        )}>   
              {title}
          </Link>
      ))}
   </nav>
    </div>
  );
}
