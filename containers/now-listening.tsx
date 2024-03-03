import { getNowListening } from "@/app/actions/now-listening";
import { Skeleton } from "@/components/ui/skeleton";
import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";
import SongPlaying from "./song-playing";

async function LatestSong() {
  noStore();
  const data = await getNowListening();
  return data ? (
    <SongPlaying data={data} />
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
            <Skeleton className="h-16 w-16 rounded-md" />
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
