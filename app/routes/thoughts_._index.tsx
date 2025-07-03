import { SimpleLayout } from "~/components/layouts/simple-layout";
import { getThoughts } from "~/db/thoughts.server";
import { MetaFunction } from "react-router";
import { json } from "react-router";
import { Link, useLoaderData } from "react-router-dom";

export const meta: MetaFunction = () => {
  return [
    { title: "Thoughts" },
    {
      name: "description",
      content:
        "You can read about my thoughts on product development and web design.",
    },
  ];
};

type LoaderData = {
  thoughts: Awaited<ReturnType<typeof getThoughts>>;
};

export const loader = async () => {
  return json<LoaderData>({
    thoughts: await getThoughts(),
  });
};

export default function ThoughtsPage() {
  const { thoughts } = useLoaderData<LoaderData>();

  return (
    <SimpleLayout title="Thoughts">
      <ul className="">
        {thoughts.map((thought) => (
          <Thought
            key={thought.slug}
            title={thought.frontmatter.title}
            href={`/thoughts/${thought.slug}`}
          />
        ))}
      </ul>
    </SimpleLayout>
  );
}

const Thought = ({ title, href }: { title: string; href: string }) => {
  return (
    <li className="group relative flex items-center rounded-md transition-all duration-200 -mx-3 cursor-pointer hover:bg-accent/80">
      <Link to={href} className="py-3 p-3">
        <div className="min-w-0 flex-auto">
          <h2 className="min-w-0 text-sm leading-6">{title}</h2>
        </div>
      </Link>
    </li>
  );
};
