import { bookmarks } from "~/db/bookmarks";
import { Link } from "react-router";

const Bookmarks = () => {
  const latestTwoBookmarks = bookmarks.slice(0, 2);

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">
          Bookmarks
        </h2>
        <Link
          to="/bookmarks"
          className="inline-flex min-h-[44px] items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View all
        </Link>
      </div>
      <div className="mt-3">
        {latestTwoBookmarks.map((bookmark) => (
          <a
            key={bookmark.title}
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[44px] items-center py-1"
          >
            <span className="text-[15px] link-underline">
              {bookmark.title}
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Bookmarks;
