import {
  useNowListening,
  useNowPlaying,
  useNowReading,
  useNowWatching,
} from "~/lib/hooks";
import type { NowListening } from "~/actions/now-listening.server";
import type { NowReading } from "~/actions/now-reading.server";
import type { NowWatching } from "~/actions/now-watching.server";
import type { NowPlaying } from "~/actions/now-playing.server";
import { Skeleton } from "./ui/skeleton";

export interface NowInitial {
  song: NowListening | null;
  book: NowReading | null;
  movie: NowWatching | null;
  game: NowPlaying | null;
}

const NEW_TAB = <span className="sr-only"> (opens in a new tab)</span>;

// Letterboxd-style stars from a 0.5–5 rating, e.g. 3.5 -> "★★★½".
function starRating(rating: number): string {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return "★".repeat(full) + (half ? "½" : "");
}

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
  title,
  meta,
  loading,
}: {
  label: string;
  title: React.ReactNode;
  meta?: React.ReactNode;
  loading?: boolean;
}) {
  if (loading) {
    return (
      <div className="flex items-start gap-2 text-[0.8125rem]">
        <span className="text-muted-foreground w-[4.5rem] flex-shrink-0">
          {label}
        </span>
        <div className="flex flex-col gap-1">
          <Skeleton variant="text" className="h-[18px] w-[160px]" />
          <Skeleton variant="text" className="h-[18px] w-[120px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2 text-[0.8125rem]">
      <span className="text-muted-foreground w-[4.5rem] flex-shrink-0">
        {label}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <div className="min-w-0 truncate">{title}</div>
        {meta && (
          <div className="flex items-center gap-2 text-muted-foreground">
            {meta}
          </div>
        )}
      </div>
    </div>
  );
}

const Now = ({ initial }: { initial?: NowInitial }) => {
  const {
    data: song,
    loading: songLoading,
    isInitialLoad: songInitial,
  } = useNowListening(60_000, initial?.song);
  const {
    data: book,
    loading: bookLoading,
    isInitialLoad: bookInitial,
  } = useNowReading(initial?.book);
  const {
    data: movie,
    loading: movieLoading,
    isInitialLoad: movieInitial,
  } = useNowWatching(initial?.movie);
  const {
    data: game,
    loading: gameLoading,
    isInitialLoad: gameInitial,
  } = useNowPlaying(initial?.game);

  return (
    <section className="mt-12">
        <h2 className="mb-4 font-serif text-lg font-medium tracking-tight text-foreground">
          Now
        </h2>
        <p className="text-sm leading-7">
          By day, I work as CTO at{" "}
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
        <div className="flex flex-col gap-3 mt-5">
          {/* Building */}
          <NowMediaRow
            label="Building"
            title={
              <a
                href="https://berrytrail.io"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[0.8125rem]"
              >
                Berry Trail
                {NEW_TAB}
              </a>
            }
            meta={
              <span className="truncate">
                A reading room for 13F filings
              </span>
            }
          />

          {/* Listening */}
          <NowMediaRow
            label="Listening"
            loading={songLoading && songInitial}
            title={
              song ? (
                <a
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[0.8125rem]"
                >
                  {song.title}
                  {NEW_TAB}
                </a>
              ) : !songLoading ? (
                <span className="text-muted-foreground">—</span>
              ) : null
            }
            meta={
              song ? (
                <>
                  <span className="truncate">{song.artist}</span>
                  {song.isPlaying ? (
                    <span className="inline-flex items-center gap-1 text-xs opacity-80 flex-shrink-0">
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
                      <span className="flex-shrink-0">&middot;</span>
                      <span className="text-muted-foreground flex-shrink-0">
                        {shortTimeAgo(new Date(song.date))}
                      </span>
                    </>
                  ) : null}
                </>
              ) : undefined
            }
          />

          {/* Reading */}
          <NowMediaRow
            label="Reading"
            loading={bookLoading && bookInitial}
            title={
              book ? (
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[0.8125rem]"
                >
                  {book.title}
                  {NEW_TAB}
                </a>
              ) : !bookLoading ? (
                <span className="text-muted-foreground">—</span>
              ) : null
            }
            meta={
              book ? (
                <>
                  <span className="truncate">{book.author}</span>
                  {book.date && (
                    <>
                      <span className="flex-shrink-0">&middot;</span>
                      <span className="text-muted-foreground flex-shrink-0">
                        {shortTimeAgo(new Date(book.date))}
                      </span>
                    </>
                  )}
                </>
              ) : undefined
            }
          />

          {/* Watching */}
          <NowMediaRow
            label="Watching"
            loading={movieLoading && movieInitial}
            title={
              movie ? (
                <a
                  href={movie.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[0.8125rem]"
                >
                  {movie.title}
                  {movie.year ? ` (${movie.year})` : ""}
                  {NEW_TAB}
                </a>
              ) : !movieLoading ? (
                <span className="text-muted-foreground">—</span>
              ) : null
            }
            meta={
              movie ? (
                <>
                  {movie.rating && (
                    <>
                      <span className="flex-shrink-0" aria-label={`${movie.rating} out of 5 stars`}>
                        {starRating(movie.rating)}
                      </span>
                      <span className="flex-shrink-0">&middot;</span>
                    </>
                  )}
                  <span className="text-muted-foreground flex-shrink-0">
                    {shortTimeAgo(new Date(movie.date))}
                  </span>
                </>
              ) : undefined
            }
          />

          {/* Playing */}
          <NowMediaRow
            label="Playing"
            loading={gameLoading && gameInitial}
            title={
              game ? (
                game.url ? (
                  <a
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[0.8125rem]"
                  >
                    {game.title}
                    {NEW_TAB}
                  </a>
                ) : (
                  <span>{game.title}</span>
                )
              ) : !gameLoading ? (
                <span className="text-muted-foreground">—</span>
              ) : null
            }
            meta={
              game ? (
                <>
                  <span className="truncate">Nintendo Switch</span>
                  {game.date && (
                    <>
                      <span className="flex-shrink-0">&middot;</span>
                      <span className="text-muted-foreground flex-shrink-0">
                        {shortTimeAgo(new Date(game.date))}
                      </span>
                    </>
                  )}
                </>
              ) : undefined
            }
          />
        </div>
      </section>
  );
};

export default Now;
