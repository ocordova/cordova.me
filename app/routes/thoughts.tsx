import { Outlet } from "react-router-dom";
import { ArticleLayout } from "~/components/layouts/article-layout";

export default function Component() {
  return (
    <ArticleLayout>
      <Outlet />
    </ArticleLayout>
  );
}
