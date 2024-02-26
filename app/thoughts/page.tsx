import { Metadata } from "next";
import { SimpleLayout } from "@/components";
import { getWritingArticles } from "@/db/writing";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "You can read about my thoughts on product development and web design.",
};

export default function WritingPage() {
  const articles = getWritingArticles().sort((a, b) => {
    return a.metadata.date > b.metadata.date ? -1 : 1;
  });

  console.log(articles);

  return (
    <SimpleLayout
      title="Product & Software Development"
      intro="You can read about my thoughts on product development and web design."
    >
      <ul role="list" className="mt-8 space-y-4">
        {articles.map((article) => (
          <Link key={article.slug} href={`/writing/${article.slug}`}>
            <article>
              <h3 className="font-serif text-sm font-medium text-gray-900 dark:text-gray-100 sm:text-base">
                {article.metadata.title}
              </h3>
              <time
                dateTime={`${article.metadata.date}T00:00:00`}
                className="relative z-10 order-first mb-3 mt-1 flex items-center text-sm text-gray-500 dark:text-gray-500 md:block"
              >
                {article.metadata.date}
              </time>
            </article>
          </Link>
        ))}
      </ul>
    </SimpleLayout>
  );
}
