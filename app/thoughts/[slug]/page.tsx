import { notFound } from "next/navigation";
import { getThoughts } from "@/db/thoughts";
import { ArticleLayout } from "@/containers/article-layout";
import type { Metadata } from "next";
import { CONSTANTS } from "@/db/constants";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const article = getThoughts().find((post) => post.slug === params.slug);
  if (!article) {
    return;
  }

  const { title, date, description } = article.metadata;

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

export default function Article({ params }: { params: { slug: string } }) {
  const article = getThoughts().find((post) => post.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <ArticleLayout meta={article.metadata}>{article.content}</ArticleLayout>
    </div>
  );
}
