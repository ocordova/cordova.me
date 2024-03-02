import { formatDistanceToNowStrict } from "date-fns";
import { NowListening, getNowListening } from "@/app/actions/now-listening";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";

function Song({ data }: { data: NowListening }) {
  const { url, cover, title, artist, isPlaying, album, date } = data;

  const timeAgo = date
    ? formatDistanceToNowStrict(date, {
        addSuffix: true,
      })
    : "Scrobbling now";

  return (
    <>
      <div className="mt-16 flex items-center justify-between">
        <h2 className="flex gap-2 font-medium tracking-tight text-forground">
          Listening
          <Badge variant="secondary" className="font-normal">
            {isPlaying ? (
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
      <dd className="mt-2 list-content grid gap-4">
        <a
          href={url}
          target="_blank"
          title="View on Literal"
          rel="noopener noreferrer"
          className="group relative flex items-center rounded-md transition-all duration-200 py-2 p-3 -mx-3 cursor-pointer hover:bg-accent/80"
        >
          <div className="group flex items-center gap-4">
            <div className="relative">
              <div className="relative origin-center">
                <Image src={cover} alt={title} width={80} height={80} />
              </div>
            </div>
            <div className="w-full truncate">
              <div className="truncate text-sm font-medium">{title}</div>
              <div className="truncate text-sm slashed-zero text-muted-foreground">
                {artist}, {album}
              </div>
            </div>
          </div>
        </a>
      </dd>
    </>
  );
}

async function LatestSong() {
  noStore();
  const data = await getNowListening();
  return data ? (
    <Song data={data} />
  ) : (
    <div className="text-sm text-muted-foreground">
      No songs found. Check back later.
    </div>
  );
}

async function NowListening() {
  return (
    <section className="mt-16">
      <Suspense
        fallback={
          <div className="flex items-center space-x-4">
            <Skeleton className="h-16 w-12 rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[140px]" />
            </div>
          </div>
        }
      >
        <LatestSong />
      </Suspense>
    </section>
  );
}

export default NowListening;
