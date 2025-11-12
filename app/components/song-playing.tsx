import { formatDistanceToNowStrict } from "date-fns";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { NowListening } from "~/actions/now-listening.server";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

function SongPlaying({ song }: { song: NowListening }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");

  if (!song) {
    return null;
  }
  const { url, cover, title, artist, isPlaying, album, date } = song;

  const placeholderImage = "/static/listening/placeholder.webp";
  const actualImageSrc = imageSrc || (cover || placeholderImage);

  const timeAgo = date
    ? formatDistanceToNowStrict(date, {
        addSuffix: true,
      })
    : "";

  return (
    <>
      <div className="mt-16 flex items-center justify-between">
        <h2 className="flex gap-2 font-medium tracking-tight text-forground">
          Listening
          <Badge variant="secondary" className="font-normal">
            {isPlaying ? (
              <>
                <div
                  className="relative flex h-3 w-3 items-center justify-center mr-1"
                  aria-hidden
                >
                  <div className="flex h-full justify-center items-center space-x-0.5">
                    <div
                      className="animate-wave h-[9px] w-0.5 rounded-full bg-foreground"
                      style={{ animationDelay: "-0.4s" }}
                    ></div>
                    <div
                      className="animate-wave h-[10px] w-0.5 rounded-full bg-foreground"
                      style={{
                        animationDelay: "-0.3s",
                      }}
                    ></div>
                    <div className="animate-wave h-[11px] w-0.5 rounded-full bg-foreground"></div>
                  </div>
                </div>
                now playing
              </>
            ) : (
              timeAgo
            )}
          </Badge>
        </h2>
        <a
          href="https://www.last.fm/user/ocordova"
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
          title="View on Last.fm"
          rel="noopener noreferrer"
          className="group relative flex items-center rounded-md transition-all duration-200 py-2 p-3 -mx-3 cursor-pointer hover:bg-accent/80"
        >
          <div className="group flex items-center gap-4">
            <div className="relative">
              <div className="relative origin-center w-[72px]">
                {!imageLoaded && (
                  <Skeleton className="absolute inset-0 h-[72px] w-[72px] rounded-sm" />
                )}
                <img
                  className={`rounded-sm transition-opacity duration-200 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  src={actualImageSrc}
                  alt={title}
                  width={72}
                  height={72}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageSrc(placeholderImage);
                    setImageLoaded(true);
                  }}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="line-clamp-1 text-sm">{title}</div>
              <div className="line-clamp-1 text-sm text-muted-foreground">
                {artist} &middot; {album}
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default SongPlaying;
