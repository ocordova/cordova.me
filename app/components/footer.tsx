"use client";
import { Wrapper } from ".";

import { Separator } from "./ui/separator";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-8">
      <Wrapper>
        <Separator />
        <div className="text-muted-foreground text-sm">
          <div className="flex flex-col items-center pt-4 pb-12 md:flex-row md:justify-between md:pt-2">
            <div className="mt-6 flex flex-row items-center justify-center text-sm sm:justify-start md:mt-0"></div>
            <div className="mt-6 flex flex-row justify-center md:mt-0 md:justify-start">
              <Link href="/colophon">Colophon</Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};
