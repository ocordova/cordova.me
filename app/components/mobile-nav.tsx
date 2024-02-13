"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-3 md:hidden"
        >
          <Menu size={22} />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Logo className="w-8 h-8" />
        </MobileLink>
        <ScrollArea className="pt-4 my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-4">
            <MobileLink href="/about" onOpenChange={setOpen}>
              About
            </MobileLink>
            <MobileLink href="/writing" onOpenChange={setOpen}>
              Writing
            </MobileLink>
            <MobileLink href="/toolbox" onOpenChange={setOpen}>
              Toolbox
            </MobileLink>
            <MobileLink href="/bookmarks" onOpenChange={setOpen}>
              Bookmarks
            </MobileLink>
            <MobileLink href="/bookshelf" onOpenChange={setOpen}>
              Bookshelf
            </MobileLink>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(
        "transition-colors hover:text-foreground/80",
        pathname === href ? "text-foreground" : "text-foreground/60",
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
