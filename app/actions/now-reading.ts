// Fetch the current reading from literal graphql api

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

const BOOKS_BY_READING_STATE_AND_PROFILE = `
query booksByReadingStateAndProfile(
  $profileId: String!
) {
  booksByReadingStateAndProfile(
    limit: 3
    offset: 0
    readingStatus: IS_READING
    profileId: $profileId
  ) {
    ...BookParts # find fragments below
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
`;

export async function getNowReading(): Promise<NowReading | undefined> {
  try {
    const response = await fetch(LITERAL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LITERAL_TOKEN}`,
      },
      body: JSON.stringify({
        query: BOOKS_BY_READING_STATE_AND_PROFILE,
        variables: {
          profileId: LITERAL_PROFILE_ID,
        },
      }),
    });

    const { data, errors } = await response.json();

    if (errors) {
      console.error(errors);
      return;
    }

    const currentReading = data.booksByReadingStateAndProfile;

    if (!currentReading.length) return;

    const book = currentReading[0];
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
