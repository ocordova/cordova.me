import { CustomMDX } from "@/components/custom-mdx";
import { Prose } from "@/components/prose";
import { formatDate } from "@/lib/formatDate";

interface ArticleLayoutProps {
  children: string;
  meta: {
    title: string;
    date: string;
  };
  isRssFeed?: boolean;
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
}: ArticleLayoutProps) {
  if (isRssFeed) {
    return children;
  }

  return (
    <>
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article className="mt-8">
            <header className="flex flex-col">
              <h1 className="font-medium">{meta.title}</h1>
              <time
                dateTime={meta.date}
                className="mt-1 text-sm text-muted-foreground "
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
