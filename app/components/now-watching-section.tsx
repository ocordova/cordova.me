import { formatDistanceToNowStrict } from "date-fns";
import { useNowWatching } from "~/lib/hooks";
import NowSection from "./now-section";
import Movie from "./movie";
import { WatchingSectionSkeleton } from "./ui/content-skeletons";
import { Badge } from "./ui/badge";

export default function NowWatchingSection() {
  const { data: movie, loading, error, isInitialLoad } = useNowWatching();

  const badge = movie ? (() => {
    const watchedAt = new Date(movie.date);
    const isCurrentlyWatching = watchedAt > new Date();

    return (
      <Badge variant="secondary" className="font-normal">
        {isCurrentlyWatching ? (
          <>
            <div
              className="relative flex h-2 w-2 items-center justify-center mr-1.5"
              aria-hidden
            >
              <div className="opacity-85 absolute inline-flex h-full w-full animate-ping rounded-full bg-primary dark:opacity-30" />
              <div className="relative inline-flex h-1 w-1 rounded-full bg-primary" />
            </div>
            now playing
          </>
        ) : (
          formatDistanceToNowStrict(watchedAt, { addSuffix: true })
        )}
      </Badge>
    );
  })() : undefined;

  return (
    <NowSection
      title="Watching"
      viewAllHref="https://trakt.tv/users/ocordova/history"
      badge={badge}
      skeleton={<WatchingSectionSkeleton />}
      loading={loading}
      isInitialLoad={isInitialLoad}
      error={error}
      hasData={!!movie}
    >
      {movie && <Movie movie={movie} />}
    </NowSection>
  );
}
