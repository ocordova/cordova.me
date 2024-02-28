import { Metadata } from "next";
import { SimpleLayout } from "@/components";
import { getThoughts } from "@/db/thoughts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thoughts",
  description:
    "You can read about my thoughts on product development and web design.",
};

const Thought = ({ title, href }: { title: string; href: string }) => {
  return (
    <li className="group relative flex items-center rounded-md transition-all duration-200 -mx-3 cursor-pointer hover:bg-accent/80">
      <Link href={href} className="py-3 p-3">
        <div className="min-w-0 flex-auto">
          <h2 className="min-w-0 text-sm leading-6">{title}</h2>
        </div>
      </Link>
    </li>
  );
};

export default function WritingPage() {
  const thoughts = getThoughts().sort((a, b) => {
    return a.metadata.date > b.metadata.date ? -1 : 1;
  });

  return (
    <SimpleLayout title="Thoughts">
      <ul role="list" className="">
        {thoughts.map((thought) => (
          <Thought
            key={thought.slug}
            title={thought.metadata.title}
            href={`/thoughts/${thought.slug}`}
          />
        ))}
      </ul>
    </SimpleLayout>
  );
}
