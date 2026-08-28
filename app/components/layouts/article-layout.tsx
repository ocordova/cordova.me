import { ReactNode } from "react";
import { Prose } from "../prose";

interface ArticleLayoutProps {
  children: ReactNode;
}

export function ArticleLayout({ children }: ArticleLayoutProps) {
  // Width is governed by the shared AppLayout wrapper in root; this layout only
  // owns article spacing and prose styling.
  return (
    <article className="mt-8">
      <Prose className="mt-8">{children}</Prose>
    </article>
  );
}
