import { useNowReading } from "~/lib/hooks";
import Book from "./book";
import { ReadingSectionSkeleton } from "./ui/content-skeletons";
import { Button } from "./ui/button";

export default function NowReadingSection() {
  const { data: book, loading, error, isInitialLoad } = useNowReading();

  if (loading && isInitialLoad) {
    return (
      <section className="mt-12">
        <ReadingSectionSkeleton />
      </section>
    );
  }

  if (error) {
    return (
      <section className="mt-12">
        <div className="mt-16 flex items-center justify-between">
          <h2 className="font-medium tracking-tight text-forground">Reading</h2>
          <a
            href="https://literal.club/ocordova"
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
        <div className="mt-2 p-4 rounded-md bg-destructive/10 border border-destructive/20">
          <p className="text-sm text-destructive">
            Failed to load currently reading: {error}
          </p>
        </div>
      </section>
    );
  }

  if (!book) {
    return (
      <section className="mt-12">
        <div className="mt-16 flex items-center justify-between">
          <h2 className="font-medium tracking-tight text-forground">Reading</h2>
          <a
            href="https://literal.club/ocordova"
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
        <div className="mt-2 text-sm text-muted-foreground">
          No reading data available
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <div className="mt-16 flex items-center justify-between">
        <h2 className="font-medium tracking-tight text-forground">Reading</h2>
        <a
          href="https://literal.club/ocordova"
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
        <Book book={book} />
      </div>
    </section>
  );
}