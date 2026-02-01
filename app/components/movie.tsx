import { formatDistanceToNowStrict } from "date-fns";
import { NowWatching } from "~/actions/now-watching.server";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useState } from "react";
import { Star } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const ratingLabels: Record<number, string> = {
  1: "Weak Sauce",
  2: "Terrible",
  3: "Bad",
  4: "Poor",
  5: "Meh",
  6: "Fair",
  7: "Good",
  8: "Great",
  9: "Superb",
  10: "Totally Ninja!",
};

function Movie({ movie }: { movie: NowWatching }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { title, year, date, poster, url, rating } = movie;
  const watchedAt = new Date(date);
  const isCurrentlyWatching = watchedAt > new Date();

  const timeAgo = formatDistanceToNowStrict(watchedAt, {
    addSuffix: true,
  });

  return (
    <>
      <div className="mt-12 flex items-center justify-between">
        <h2 className="flex gap-2 font-medium tracking-tight text-forground">
          Watching
          <Badge variant="secondary" className="font-normal">
            {isCurrentlyWatching ? (
              <>
                <div
                  className="relative flex h-2 w-2 items-center justify-center mr-1.5"
                  aria-hidden
                >
                  <div className="opacity-85 absolute inline-flex h-full w-full animate-ping rounded-full bg-primary dark:opacity-30"></div>
                  <div className="relative inline-flex h-1 w-1 rounded-full bg-primary"></div>
                </div>
                now playing
              </>
            ) : (
              timeAgo
            )}
          </Badge>
        </h2>
        <a
          href="https://trakt.tv/users/ocordova/history"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground -mr-3"
          >
            View all
          </Button>
        </a>
      </div>
      <div className="mt-2 list-content grid gap-4">
        <a
          href={url}
          target="_blank"
          title="View on Trakt"
          rel="noopener noreferrer"
          className="group relative flex items-center rounded-md transition-all duration-200 py-2 p-3 -mx-3 cursor-pointer hover:bg-accent/80"
        >
          <div className="group flex items-center gap-4">
            <div className="relative">
              <div className="relative origin-center w-[64px]">
                {!imageLoaded && (
                  <Skeleton className="absolute inset-0 h-[96px] w-[64px] rounded-sm" />
                )}
                <img
                  className={`rounded-sm transition-opacity duration-200 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  src={poster}
                  alt={title}
                  width={64}
                  height={96}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="line-clamp-1 text-sm">{title}</div>
              <div className="line-clamp-1 text-sm slashed-zero text-muted-foreground">
                {year}
              </div>
              {rating && (
                <div className="text-xs text-muted-foreground">
                  <Star className="inline size-3" /> {rating} {ratingLabels[rating]}
                </div>
              )}
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Movie;
