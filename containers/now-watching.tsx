import { formatDistanceToNowStrict } from "date-fns";
import { NowWatching, getNowWatching } from "@/app/actions/now-watching";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";

function Movie({ data }: { data: NowWatching }) {
  const { title, year, date, poster, slug } = data;

  const isCurrentlyWatching = date > new Date();

  const timeAgo = formatDistanceToNowStrict(date, {
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
          href={`https://trakt.tv/movies/${slug}`}
          target="_blank"
          title="View on Trakt"
          rel="noopener noreferrer"
          className="group relative flex items-center rounded-md transition-all duration-200 py-2 p-3 -mx-3 cursor-pointer hover:bg-accent/80"
        >
          <div className="group flex items-center gap-4">
            <div className="relative">
              <div className="relative origin-center w-12">
                <Image
                  className="rounded-sm"
                  src={poster}
                  alt={title}
                  width={64}
                  height={96}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="line-clamp-1 text-sm">{title}</div>
              <div className="line-clamp-1 text-sm slashed-zero text-muted-foreground">
                {year}
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

async function LatestMovie() {
  noStore();
  const data = await getNowWatching();
  return data ? (
    <Movie data={data} />
  ) : (
    <div className="text-sm text-muted-foreground">
      Not watching anything right now
    </div>
  );
}

async function NowWatching() {
  return (
    <section className="mt-16">
      <Suspense
        fallback={
          <div className="flex items-center space-x-4">
            <Skeleton className="h-16 w-16 rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[140px]" />
            </div>
          </div>
        }
      >
        <LatestMovie />
      </Suspense>
    </section>
  );
}

export default NowWatching;
