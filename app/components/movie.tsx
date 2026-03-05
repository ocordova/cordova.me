import { NowWatching } from "~/actions/now-watching.server";
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
  const { title, year, poster, url, rating } = movie;

  return (
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
          <div className="line-clamp-1 text-sm">
            {title} <span className="text-muted-foreground slashed-zero">({year})</span>
          </div>
          {rating && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="size-3.5 fill-current" /> {rating} {ratingLabels[rating]}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

export default Movie;
