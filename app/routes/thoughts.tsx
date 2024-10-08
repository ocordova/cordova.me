import { Outlet } from "@remix-run/react";
import { ArticleLayout } from "~/components/layouts/article-layout";

export default function Component() {
  return (
    <ArticleLayout>
      <Outlet />
    </ArticleLayout>
  );
}
