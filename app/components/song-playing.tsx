import { NowListening } from "~/actions/now-listening.server";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

function SongPlaying({ song }: { song: NowListening }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");

  const { url, cover, title, artist, album } = song;

  const placeholderImage = "/static/listening/placeholder.webp";
  const actualImageSrc = imageSrc || cover || placeholderImage;

  return (
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
  );
}

export default SongPlaying;
