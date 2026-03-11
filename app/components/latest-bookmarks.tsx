import { bookmarks } from "~/db/bookmarks";
import { Link } from "react-router";

const Bookmarks = () => {
  const latestTwoBookmarks = bookmarks.slice(0, 2);

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-lg font-medium tracking-tight text-foreground">
          Bookmarks
        </h2>
        <Link
          to="/bookmarks"
          className="text-[0.8125rem] text-muted-foreground transition-colors hover:text-foreground"
        >
          View all
        </Link>
      </div>
      <div className="mt-2">
        {latestTwoBookmarks.map((bookmark) => (
          <a
            key={bookmark.title}
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2"
          >
            <span className="text-sm link-underline">{bookmark.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Bookmarks;
