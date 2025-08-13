import { NowReading } from "~/actions/now-reading.server";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

function Book({ book }: { book: NowReading }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { url, cover, title, author } = book;
  return (
    <a
      href={url}
      target="_blank"
      title="View on Literal"
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
              src={cover}
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
            {author}
          </div>
        </div>
      </div>
    </a>
  );
}

export default Book;
