import { bookmarks } from "@/db/bookmarks";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Bookmark = ({ title, url }: { title: string; url: string }) => {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center rounded-md transition-all duration-200 py-2 p-3 -mx-3 cursor-pointer hover:bg-accent/80"
      >
        <div className="min-w-0 flex-auto">
          <div className="flex items-center gap-x-4">
            <h3 className="min-w-0 text-sm leading-6">{title}</h3>
          </div>
        </div>
      </a>
    </li>
  );
};

const Bookmarks = () => {
  const latestTwoBookmarks = bookmarks.slice(0, 2);

  return (
    <section>
      <div className="mt-16 flex items-center justify-between">
        <h2 className="font-medium tracking-tight text-forground">Bookmarks</h2>
        <Link href="/bookmarks">
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
        {latestTwoBookmarks.map((bookmark) => (
          <Bookmark
            key={bookmark.title}
            title={bookmark.title}
            url={bookmark.url}
          />
        ))}
      </ul>
    </section>
  );
};

export default Bookmarks;
