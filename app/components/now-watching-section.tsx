import { useNowWatching } from "~/lib/hooks";
import Movie from "./movie";
import { WatchingSectionSkeleton } from "./ui/content-skeletons";

export default function NowWatchingSection() {
  const { data: movie, loading, error, isInitialLoad } = useNowWatching();

  if (loading && isInitialLoad) {
    return (
      <section className="mt-16">
        <WatchingSectionSkeleton />
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-16">
        <div className="mt-12 flex items-center justify-between">
          <h2 className="font-medium tracking-tight text-forground">Watching</h2>
        </div>
        <div className="mt-2 p-4 rounded-md bg-destructive/10 border border-destructive/20">
          <p className="text-sm text-destructive">
            Failed to load currently watching: {error}
          </p>
        </div>
      </section>
    );
  }

  if (!movie) {
    return (
      <section className="mt-16">
        <div className="mt-12 flex items-center justify-between">
          <h2 className="font-medium tracking-tight text-forground">Watching</h2>
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          No watching data available
        </div>
      </section>
    );
  }

  return (
    <section className="mt-16">
      <Movie movie={movie} />
    </section>
  );
}