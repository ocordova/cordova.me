import { ReactNode } from "react";
import { Prose } from "../prose";

interface ArticleLayoutProps {
  children: ReactNode;
}

export function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <>
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <article className="mt-8">
            <Prose className="mt-8">{children}</Prose>
          </article>
        </div>
      </div>
    </>
  );
}
