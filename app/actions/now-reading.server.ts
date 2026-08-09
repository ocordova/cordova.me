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
}

interface LiteralBook {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  authors: { name: string }[];
}

type ReadingStatus = "IS_READING" | "FINISHED";

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

async function fetchBooks(status: ReadingStatus): Promise<LiteralBook[]> {
  const response = await fetch(LITERAL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LITERAL_TOKEN}`,
    },
    body: JSON.stringify({
      query: booksQuery(status),
      variables: { profileId: LITERAL_PROFILE_ID },
    }),
  });

  const { data, errors } = await response.json();
  if (errors) {
    console.error("[literal] query errors:", errors);
    throw new Error("Failed to fetch now reading data");
  }
  return data?.booksByReadingStateAndProfile ?? [];
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
  };
}

export const getNowReading = (): Promise<NowReading> =>
  cached("now-reading", TTL.reading, fetchNowReading);
