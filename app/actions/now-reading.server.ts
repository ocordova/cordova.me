import { cached, TTL } from "~/lib/cache.server";

const LITERAL_API = process.env.LITERAL_API || "";
const LITERAL_TOKEN = process.env.LITERAL_TOKEN || "";
const LITERAL_PROFILE_ID = process.env.LITERAL_PROFILE_ID || "";

export interface NowReading {
  title: string;
  subtitle: string;
  cover: string;
  url: string;
  author: string;
  date: string;
}

interface LiteralBook {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  authors: { name: string }[];
}

type ReadingStatus = "IS_READING" | "FINISHED";

async function literalQuery<T>(query: string, variables: object): Promise<T> {
  const response = await fetch(LITERAL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LITERAL_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data, errors } = await response.json();
  if (errors) {
    console.error("[literal] query errors:", errors);
    throw new Error("Failed to fetch now reading data");
  }
  return data;
}

// readingStatus is a fixed enum constant, not user input, so interpolating it
// into the query is safe. profileId stays a bound variable.
function booksQuery(status: ReadingStatus): string {
  return `
query booksByReadingStateAndProfile($profileId: String!) {
  booksByReadingStateAndProfile(
    limit: 1
    offset: 0
    readingStatus: ${status}
    profileId: $profileId
  ) {
    id
    slug
    title
    subtitle
    cover
    authors {
      name
    }
  }
}`;
}

const READING_STATE_QUERY = `
query readingStateByWork($bookId: String!, $profileId: String!) {
  readingStateByWork(bookId: $bookId, profileId: $profileId) {
    createdAt
  }
}`;

async function fetchBooks(status: ReadingStatus): Promise<LiteralBook[]> {
  const data = await literalQuery<{
    booksByReadingStateAndProfile: LiteralBook[];
  }>(booksQuery(status), { profileId: LITERAL_PROFILE_ID });
  return data.booksByReadingStateAndProfile ?? [];
}

async function fetchReadingDate(bookId: string): Promise<string> {
  const data = await literalQuery<{
    readingStateByWork: { createdAt: string } | null;
  }>(READING_STATE_QUERY, { bookId, profileId: LITERAL_PROFILE_ID });
  return data.readingStateByWork?.createdAt ?? "";
}

async function fetchNowReading(): Promise<NowReading> {
  // Prefer a book in progress; otherwise fall back to the most recently
  // finished one so the row is never empty between books.
  const [reading] = await fetchBooks("IS_READING");
  const book = reading ?? (await fetchBooks("FINISHED"))[0];

  if (!book) {
    throw new Error("No books found");
  }

  return {
    title: book.title,
    subtitle: book.subtitle,
    cover: book.cover,
    url: `https://literal.club/book/${book.slug}`,
    author: book.authors[0]?.name ?? "",
    date: await fetchReadingDate(book.id),
  };
}

export const getNowReading = (opts?: { wait?: boolean }) =>
  cached("now-reading", TTL.reading, fetchNowReading, opts);
