import Link from "next/link";

import { CustomMDX, Prose } from ".";
import { formatDate } from "@/lib/formatDate";
import { ArrowLeft } from "lucide-react";

interface ArticleLayoutProps {
  children: string;
  meta: {
    title: string;
    date: string;
  };
  isRssFeed?: boolean;
  back?: boolean;
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  back = true,
}: ArticleLayoutProps) {
  if (isRssFeed) {
    return children;
  }

  return (
    <>
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {back ? (
            <Link
              href="/writing"
              className="flex justify-start items-center text-sm text-muted-foreground hover:text-muted-foreground/70"
            >
              <ArrowLeft size={14} className="mr-1.5" /> Back
            </Link>
          ) : null}
          <article className="mt-8">
            <header className="flex flex-col">
              <h1 className="font-serif text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
                {meta.title}
              </h1>
              <time
                dateTime={meta.date}
                className="mt-3 flex items-center text-sm text-muted-foreground"
              >
                <span>{formatDate(meta.date)}</span>
              </time>
            </header>
            <Prose className="mt-8 text-justify">
              {<CustomMDX source={children} scope={{}} />}
            </Prose>
          </article>
        </div>
      </div>
    </>
  );
}
