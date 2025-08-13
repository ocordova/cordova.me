import { useNowListening } from "~/lib/hooks";
import SongPlaying from "./song-playing";
import { ListeningSectionSkeleton } from "./ui/content-skeletons";

export default function NowListeningSection() {
  const { data: song, loading, error, isInitialLoad } = useNowListening();

  if (loading && isInitialLoad) {
    return (
      <section className="mt-12">
        <ListeningSectionSkeleton />
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-12">
        <div className="mt-16 flex items-center justify-between">
          <h2 className="font-medium tracking-tight text-forground">Listening</h2>
        </div>
        <div className="mt-2 p-4 rounded-md bg-destructive/10 border border-destructive/20">
          <p className="text-sm text-destructive">
            Failed to load currently listening: {error}
          </p>
        </div>
      </section>
    );
  }

  if (!song) {
    return (
      <section className="mt-12">
        <div className="mt-16 flex items-center justify-between">
          <h2 className="font-medium tracking-tight text-forground">Listening</h2>
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          No music data available
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <SongPlaying song={song} />
    </section>
  );
}