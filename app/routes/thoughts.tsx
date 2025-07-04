import { Outlet } from "react-router";
import { ArticleLayout } from "~/components/layouts/article-layout";

export default function Component() {
  return (
    <ArticleLayout>
      <Outlet />
    </ArticleLayout>
  );
}
