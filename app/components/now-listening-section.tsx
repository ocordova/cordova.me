import { formatDistanceToNowStrict } from "date-fns";
import { useNowListening } from "~/lib/hooks";
import NowSection from "./now-section";
import SongPlaying from "./song-playing";
import { ListeningSectionSkeleton } from "./ui/content-skeletons";
import { Badge } from "./ui/badge";

export default function NowListeningSection() {
  const { data: song, loading, error, isInitialLoad } = useNowListening();

  const timeAgo = song?.date
    ? formatDistanceToNowStrict(song.date, { addSuffix: true })
    : "";

  const badge = song ? (
    <Badge variant="secondary" className="font-normal">
      {song.isPlaying ? (
        <>
          <div
            className="relative flex h-3 w-3 items-center justify-center mr-1"
            aria-hidden
          >
            <div className="flex h-full justify-center items-center space-x-0.5">
              <div
                className="animate-wave h-[9px] w-0.5 rounded-full bg-foreground"
                style={{ animationDelay: "-0.4s" }}
              />
              <div
                className="animate-wave h-[10px] w-0.5 rounded-full bg-foreground"
                style={{ animationDelay: "-0.3s" }}
              />
              <div className="animate-wave h-[11px] w-0.5 rounded-full bg-foreground" />
            </div>
          </div>
          now playing
        </>
      ) : (
        timeAgo
      )}
    </Badge>
  ) : undefined;

  return (
    <NowSection
      title="Listening"
      viewAllHref="https://www.last.fm/user/ocordova"
      badge={badge}
      skeleton={<ListeningSectionSkeleton />}
      loading={loading}
      isInitialLoad={isInitialLoad}
      error={error}
      hasData={!!song}
    >
      {song && <SongPlaying song={song} />}
    </NowSection>
  );
}
