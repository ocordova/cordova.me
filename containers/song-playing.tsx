"use client";
import { NowListening } from "@/app/actions/now-listening";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDistanceToNowStrict } from "date-fns";
import Image from "next/image";
import { useEffect, useState } from "react";

function SongPlaying({ data }: { data: NowListening }) {
  const [song, setSong] = useState<NowListening>(data);
  const thirtySeconds = 30000;

  const { url, cover, title, artist, isPlaying, album, date } = song;

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch("/api/now-listening");
      const data = await res.json();
      setSong(data);
    }, thirtySeconds);

    return () => clearInterval(interval);
  }, []);

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
                  className="relative flex h-3 w-3 items-center justify-center mr-1.5"
                  aria-hidden
                >
                  <Image
                    src="/static/now-playing.gif"
                    alt="Now playing"
                    width={12}
                    height={12}
                  />
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
              <div className="relative origin-center w-12">
                <Image
                  className="rounded-sm"
                  src={cover}
                  alt={title}
                  width={72}
                  height={72}
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
