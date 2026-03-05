import { useNowReading } from "~/lib/hooks";
import NowSection from "./now-section";
import Book from "./book";
import { ReadingSectionSkeleton } from "./ui/content-skeletons";

export default function NowReadingSection() {
  const { data: book, loading, error, isInitialLoad } = useNowReading();

  return (
    <NowSection
      title="Reading"
      viewAllHref="https://literal.club/ocordova"
      skeleton={<ReadingSectionSkeleton />}
      loading={loading}
      isInitialLoad={isInitialLoad}
      error={error}
      hasData={!!book}
    >
      {book && <Book book={book} />}
    </NowSection>
  );
}
