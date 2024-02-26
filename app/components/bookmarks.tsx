"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const Bookmark = ({
  title,
  namespace,
  href,
}: {
  title: string;
  href: string;
  namespace: string;
}) => {
  return (
    <Link href={href}>
      <li className="group relative flex items-center transition-all duration-200 py-2 p-4 -mx-3 rounded-md cursor-pointer hover:bg-accent">
        <div className="min-w-0 flex-auto">
          <div className="flex items-center gap-x-4">
            <h2 className="min-w-0 text-sm leading-6">
              <span className="truncate">{title}</span>
            </h2>
            <span className="text-muted-foreground text-xs">{namespace}</span>
          </div>
        </div>
        <div className="invisible group-hover:visible">
          <ArrowUpRight size={18} className="text-muted-foreground" />
        </div>
      </li>
    </Link>
  );
};

const Bookmarks = () => {
  return (
    <section>
      <div className="mt-16 flex items-center justify-between">
        <h2 className="font-medium tracking-tight text-forground">Bookmarks</h2>
        <Link href="/bookmarks">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground -mr-3"
          >
            View all
          </Button>
        </Link>
      </div>
      <ul className="mt-2">
        <Bookmark
          title="Lorem ipusm dolor sit amter"
          href="/thoughts/1"
          namespace="Thought"
        />
        <Bookmark
          title="Lorem ipusm dolor sit amter"
          href="/thoughts/1"
          namespace="Thought"
        />
      </ul>
    </section>
  );
};

export default Bookmarks;
