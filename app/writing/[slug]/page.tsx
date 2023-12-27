import { notFound } from "next/navigation";
import { getWritingArticles } from "@/db/writing";
import { ArticleLayout } from "@/components";
import type { Metadata } from "next";
import { CONSTANTS } from "@/db/constants";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let article = getWritingArticles().find((post) => post.slug === params.slug);
  if (!article) {
    return;
  }

  let { title, date, description } = article.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `${CONSTANTS.baseUrl}/writing/${params.slug}`,
      images: [
        {
          url: `${CONSTANTS.baseUrl}${CONSTANTS.ogImage}`,
        },
      ],
    },
  };
}

export default function Article({ params }) {
  let article = getWritingArticles().find((post) => post.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <ArticleLayout meta={article.metadata}>{article.content}</ArticleLayout>
    </div>
  );
}
