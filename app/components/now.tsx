import { formatDistanceToNowStrict } from "date-fns";
import { useNowListening, useNowReading, useNowWatching } from "~/lib/hooks";
import { Skeleton } from "./ui/skeleton";

const ratingLabels: Record<number, string> = {
  1: "Weak Sauce",
  2: "Terrible",
  3: "Bad",
  4: "Poor",
  5: "Meh",
  6: "Fair",
  7: "Good",
  8: "Great",
  9: "Superb",
  10: "Totally Ninja!",
};

function shortTimeAgo(date: Date): string {
  const diff = Date.now() - date.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

function NowMediaRow({
  label,
  children,
  loading,
}: {
  label: string;
  children: React.ReactNode;
  loading?: boolean;
}) {
  if (loading) {
    return (
      <div className="flex items-center gap-2 text-[0.8125rem]">
        <span className="text-muted-foreground w-[4.5rem] flex-shrink-0">
          {label}
        </span>
        <Skeleton variant="text" className="h-[18px] w-[120px]" />
        <Skeleton variant="text" className="h-[18px] w-[100px]" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-[0.8125rem] overflow-hidden">
      <span className="text-muted-foreground w-[4.5rem] flex-shrink-0">
        {label}
      </span>
      <div className="flex items-center gap-2 min-w-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

const Now = () => {
  const {
    data: song,
    loading: songLoading,
    isInitialLoad: songInitial,
  } = useNowListening();
  const {
    data: book,
    loading: bookLoading,
    isInitialLoad: bookInitial,
  } = useNowReading();
  const {
    data: movie,
    loading: movieLoading,
    isInitialLoad: movieInitial,
  } = useNowWatching();

  return (
    <>
      <section className="mt-12">
        <h2 className="my-4 font-serif text-lg font-medium tracking-tight text-foreground">
          Now
        </h2>
        <p className="text-sm leading-7">
          By day, I work as a Lead Engineer at{" "}
          <a
            className="link-underline"
            href="https://www.summit-mgmt.mx"
            target="_blank"
            rel="noreferrer"
          >
            Summit Management
          </a>
          , and by night, as a Product Manager at{" "}
          <a
            className="link-underline"
            href="https://artiflora.mx"
            target="_blank"
            rel="noreferrer"
          >
            Artiflora
          </a>
          .
        </p>
        <div className="flex flex-col gap-2 mt-5">
          {/* Listening */}
          <NowMediaRow label="Listening" loading={songLoading && songInitial}>
            {song && (
              <>
                <a
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[0.8125rem] truncate flex-shrink-0 max-w-[45%]"
                >
                  {song.title}
                </a>
                <span className="text-muted-foreground flex-shrink-0">&middot;</span>
                <span className="text-muted-foreground truncate">{song.artist}</span>
                {song.isPlaying ? (
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground opacity-70 flex-shrink-0">
                    <span
                      className="inline-flex items-center gap-px h-[10px]"
                      aria-hidden
                    >
                      <span
                        className="animate-wave w-0.5 h-[6px] rounded-full bg-foreground opacity-50"
                        style={{ animationDelay: "-0.4s" }}
                      />
                      <span
                        className="animate-wave w-0.5 h-[8px] rounded-full bg-foreground opacity-50"
                        style={{ animationDelay: "-0.3s" }}
                      />
                      <span className="animate-wave w-0.5 h-[10px] rounded-full bg-foreground opacity-50" />
                    </span>
                  </span>
                ) : song.date ? (
                  <>
                    <span className="text-muted-foreground flex-shrink-0">&middot;</span>
                    <span className="text-muted-foreground opacity-70 flex-shrink-0">
                      {shortTimeAgo(new Date(song.date))}
                    </span>
                  </>
                ) : null}
              </>
            )}
          </NowMediaRow>

          {/* Reading */}
          <NowMediaRow label="Reading" loading={bookLoading && bookInitial}>
            {book && (
              <>
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[0.8125rem] truncate flex-shrink-0 max-w-[55%]"
                >
                  {book.title}
                </a>
                <span className="text-muted-foreground flex-shrink-0">&middot;</span>
                <span className="text-muted-foreground truncate">{book.author}</span>
              </>
            )}
          </NowMediaRow>

          {/* Watching */}
          <NowMediaRow label="Watching" loading={movieLoading && movieInitial}>
            {movie && (
              <>
                <a
                  href={movie.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[0.8125rem] truncate flex-shrink-0 max-w-[45%]"
                >
                  {movie.title}
                </a>
                {movie.rating && (
                  <>
                    <span className="text-muted-foreground flex-shrink-0">&middot;</span>
                    <span className="text-muted-foreground flex-shrink-0">
                      ★ {movie.rating} {ratingLabels[movie.rating]}
                    </span>
                  </>
                )}
                <span className="text-muted-foreground flex-shrink-0">&middot;</span>
                <span className="text-muted-foreground opacity-70 flex-shrink-0">
                  {shortTimeAgo(new Date(movie.date))}
                </span>
              </>
            )}
          </NowMediaRow>
        </div>
      </section>
    </>
  );
};

export default Now;
