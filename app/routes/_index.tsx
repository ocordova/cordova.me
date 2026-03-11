import { type MetaFunction } from "react-router";
import { Link } from "react-router";
import About from "~/components/about";
import Contact from "~/components/contact";
import Bookmarks from "~/components/latest-bookmarks";
import Now from "~/components/now";
import WorkPhilosophy from "~/components/work-philosophy";
import { getThoughts } from "~/db/thoughts.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Óscar Córdova" },
    {
      name: "description",
      content: "Software Engineer by day, Product Manager by night",
    },
  ];
};

export const loader = async () => {
  const thoughts = getThoughts().slice(0, 2);
  return Response.json({ thoughts });
};

import { useLoaderData } from "react-router";

export default function Index() {
  const { thoughts } = useLoaderData<typeof loader>();

  return (
    <>
      <About />
      <WorkPhilosophy />
      <Now />
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-lg font-medium tracking-tight text-foreground">
            Thoughts
          </h2>
          <Link
            to="/thoughts"
            className="text-[0.8125rem] text-muted-foreground transition-colors hover:text-foreground"
          >
            View all
          </Link>
        </div>
        <div className="mt-2">
          {thoughts.map((thought) => (
            <Link
              key={thought.slug}
              to={`/thoughts/${thought.slug}`}
              className="block py-2"
            >
              <span className="text-sm link-underline">{thought.frontmatter.title}</span>
            </Link>
          ))}
        </div>
      </section>
      <Bookmarks />
      <Contact />
    </>
  );
}
