import { type MetaFunction } from "react-router";
import { Link } from "react-router";
import About from "~/components/about";
import Contact from "~/components/contact";
import Bookmarks from "~/components/latest-bookmarks";
import Now from "~/components/now";
import Projects from "~/components/projects";
import WorkPhilosophy from "~/components/work-philosophy";
import { getThoughts } from "~/db/thoughts.server";
import { getNowListening } from "~/actions/now-listening.server";
import { getNowReading } from "~/actions/now-reading.server";
import { getNowWatching } from "~/actions/now-watching.server";
import { getNowPlaying } from "~/actions/now-playing.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Óscar Córdova" },
    {
      name: "description",
      content: "Software Engineer by day, Product Manager by night",
    },
  ];
};

// Resolve a cached "now" value, swallowing any upstream failure so the page
// still renders. The cache is stale-while-revalidate, so this stays fast.
async function safeNow<T>(fn: () => Promise<{ value: T }>): Promise<T | null> {
  try {
    return (await fn()).value;
  } catch {
    return null;
  }
}

export const loader = async () => {
  const thoughts = getThoughts().slice(0, 2);
  const [song, book, movie, game] = await Promise.all([
    safeNow(() => getNowListening()),
    safeNow(() => getNowReading()),
    safeNow(() => getNowWatching()),
    safeNow(() => getNowPlaying()),
  ]);
  return Response.json({ thoughts, now: { song, book, movie, game } });
};

import { useLoaderData } from "react-router";

export default function Index() {
  const { thoughts, now } = useLoaderData<typeof loader>();

  return (
    <>
      <About />
      <WorkPhilosophy />
      <Now initial={now} />
      <Projects />
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-lg font-medium tracking-tight text-foreground">
            Thoughts
          </h2>
          <Link
            to="/thoughts"
            className="inline-flex min-h-[44px] items-center text-[0.8125rem] text-muted-foreground transition-colors hover:text-foreground"
          >
            View all
          </Link>
        </div>
        <div className="mt-2">
          {thoughts.map((thought) => (
            <Link
              key={thought.slug}
              to={`/thoughts/${thought.slug}`}
              className="flex min-h-[44px] items-center py-1"
            >
              <span className="text-sm link-underline">
                {thought.frontmatter.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Bookmarks />
      <Contact />
    </>
  );
}
