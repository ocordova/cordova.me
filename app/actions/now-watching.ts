const TRAKT_API = "https://api.trakt.tv/";
const TRAKT_CLIENT_ID = process.env.TRAKT_CLIENT_ID;
const TRAKT_USERNAME = "ocordova";
const TRAKT_ENDPOINT = `${TRAKT_API}users/${TRAKT_USERNAME}/history`;

const TMDB_API = "https://api.themoviedb.org/3/";
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_ENDPOINT = `${TMDB_API}movie/`;

export interface NowWatching {
  title: string;
  year: number;
  date: Date;
  poster: string;
  slug: string;
}

export async function getNowWatching(): Promise<NowWatching | undefined> {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("trakt-api-version", "2");
    headers.append("trakt-api-key", TRAKT_CLIENT_ID as string);

    const traktresponse = await fetch(TRAKT_ENDPOINT, { headers });

    if (!traktresponse.ok) {
      console.error(traktresponse);
      throw new Error("Failed to fetch data from Trakt API");
    }

    const traktdata = await traktresponse.json();

    if (traktdata.length === 0) {
      return;
    }

    const movies = traktdata.filter((item) => item.type === "movie");

    if (movies.length === 0) {
      return;
    }

    const latestMovie = movies[0];

    const tmdbId = latestMovie.movie.ids.tmdb;
    const date = new Date(latestMovie.watched_at);
    const slug = latestMovie.movie.ids.slug;

    // TMDB Fetch for movie details with bearer token
    const tmdbHeaders = new Headers();
    tmdbHeaders.append("Content-Type", "application/json");
    tmdbHeaders.append("Authorization", `Bearer ${TMDB_API_KEY}`);

    const tmdbResponse = await fetch(`${TMDB_ENDPOINT}${tmdbId}`, {
      headers: tmdbHeaders,
    });

    if (!tmdbResponse.ok) {
      console.error(tmdbResponse);
      throw new Error("Failed to fetch data from TMDB API");
    }

    const tmdbData = await tmdbResponse.json();

    const title = tmdbData.title;
    const year = tmdbData.release_date.split("-")[0];
    const posterPath = tmdbData.poster_path;

    const poster = `https://image.tmdb.org/t/p/w200${posterPath}`;

    return {
      title,
      year,
      date,
      poster,
      slug,
    };
  } catch (error) {
    console.error(error);
    return;
  }
}
