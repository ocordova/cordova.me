// Fetch the current reading from literal graphql api

const LITERAL_API = "https://literal.club/graphql/";
const LITERAL_TOKEN = process.env.LITERAL_TOKEN || "";

export interface NowReading {
  title: string;
  subtitle: string;
  cover: string;
  url: string;
  author: string;
}

export async function getNowReading(): Promise<NowReading | undefined> {
  try {
    const response = await fetch(LITERAL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LITERAL_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
          query myReadingStates {
            myReadingStates {
              ...ReadingStateParts
              book {
                ...BookParts
              }
            }
          }
          fragment BookParts on Book {
            id
            slug
            title
            subtitle
            description
            isbn10
            isbn13
            language
            pageCount
            publishedDate
            publisher
            cover
            authors {
              id
              name
            }
            gradientColors
          }
          fragment ReadingStateParts on ReadingState {
            id
            status
            bookId
            profileId
            createdAt
          }
        `,
      }),
    });

    const { data, errors } = await response.json();

    if (errors) {
      console.error(errors);
      return;
    }

    const nowReading = data.myReadingStates.filter(
      (readingState) => readingState.status === "IS_READING",
    );

    if (!nowReading.length) return;

    const book = nowReading[0].book;
    const url = `https://literal.club/book/${book.slug}`;
    return {
      title: book.title,
      subtitle: book.subtitle,
      cover: book.cover,
      url,
      author: book.authors[0].name,
    };
  } catch (error) {
    console.error(error);
    return;
  }
}
