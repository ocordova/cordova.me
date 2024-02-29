import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getThoughts } from "@/db/thoughts";

const Thought = ({ title, href }: { title: string; href: string }) => {
  return (
    <li>
      <Link
        href={href}
        className="group relative flex rounded-md items-center transition-all duration-200 py-2 p-3 -mx-3 cursor-pointer hover:bg-accent/80"
      >
        <div className="min-w-0 flex-auto">
          <div className="flex items-center gap-x-3">
            <h2 className="min-w-0 text-sm leading-6">{title}</h2>
          </div>
        </div>
      </Link>
    </li>
  );
};

const LatestThoughts = () => {
  const thoughts = getThoughts().sort((a, b) => {
    return a.metadata.date > b.metadata.date ? -1 : 1;
  });

  return (
    <section className="mt-16">
      <div className="mt-16 flex items-center justify-between">
        <h2 className="font-medium tracking-tight text-forground">Thoughts</h2>
        <Link href="/thoughts">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground -mr-3"
          >
            View all
          </Button>
        </Link>
      </div>
      <ul className="mt-2">
        {thoughts.slice(0, 2).map((thought) => (
          <Thought
            key={thought.slug}
            title={thought.metadata.title}
            href={`/thoughts/${thought.slug}`}
          />
        ))}
      </ul>
    </section>
  );
};

export default LatestThoughts;
