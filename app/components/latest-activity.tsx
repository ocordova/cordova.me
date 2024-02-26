"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const Book = ({ title, author }: { title: string; author: string }) => {
  return (
    <Link href="/thoughts/1">
      <li className="group relative flex items-center transition-all py-2 p-4 -mx-3 rounded-md cursor-pointer hover:bg-accent">
        <div className="min-w-0 flex-auto">
          <div className="flex items-center gap-x-3">
            <h2 className="min-w-0 text-sm leading-6">
              <span className="flex gap-x-2 truncate">
                <span>{title}</span>
              </span>
            </h2>
          </div>
          <div className="mt-2flex items-center text-xs leading-5 text-muted-foreground">
            <p className="truncate">{author}</p>
          </div>
        </div>
        <div className="invisible group-hover:visible">
          <ArrowUpRight size={18} className="text-muted-foreground" />
        </div>
      </li>
    </Link>
  );
};

const LatestActivity = () => {
  return (
    <section className="mt-16">
      <div className="my-4 flex items-center justify-between">
        <h2 className="font-medium tracking-tight text-forground">
          Latest activity
        </h2>
        <Link href="/thoughts">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground -mr-3"
          >
            View all
          </Button>
        </Link>
      </div>
      <ul role="list" className="mt-2">
        <Book
          title="Product-Led Growth: How to Build a Product That Sells Itself"
          author="Wes Bush"
        />
        <Book
          title="Product-Led Growth: How to Build a Product That Sells Itself"
          author="Wes Bush"
        />
      </ul>
    </section>
  );
};

export default LatestActivity;
