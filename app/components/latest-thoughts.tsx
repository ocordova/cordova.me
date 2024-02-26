"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Thought = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link href={href}>
      <li className="group relative flex items-center transition-all duration-200 py-2 p-4 -mx-3 rounded-md cursor-pointer hover:bg-accent">
        <div className="min-w-0 flex-auto">
          <div className="flex items-center gap-x-3">
            <h2 className="min-w-0 text-sm leading-6">
              <span className="truncate">{title}</span>
            </h2>
          </div>
        </div>
        <div className="invisible group-hover:visible">
          <ArrowRight size={18} className="text-muted-foreground" />
        </div>
      </li>
    </Link>
  );
};

const LatestThoughts = () => {
  return (
    <section className="mt-16">
      <div className="mt-16 flex items-center justify-between">
        <h2 className="font-medium tracking-tight text-forground">Thoughts</h2>
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
      <ul className="mt-2">
        <Thought title="Lorem ipusm dolor sit amter" href="/thoughts/1" />
        <Thought title="Lorem ipusm dolor sit amter" href="/thoughts/1" />
      </ul>
    </section>
  );
};

export default LatestThoughts;
