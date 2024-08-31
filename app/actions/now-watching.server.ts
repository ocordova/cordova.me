import { leadingZero } from "~/lib/utils";

const TRAKT_BASE_URL = "https://trakt.tv/";
const TRAKT_API = "https://api.trakt.tv/";
const TRAKT_CLIENT_ID = process.env.TRAKT_CLIENT_ID;
const TRAKT_USERNAME = "ocordova";
const TRAKT_ENDPOINT = `${TRAKT_API}users/${TRAKT_USERNAME}/history`;

const TMDB_API = "https://api.themoviedb.org/3/";
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_MOVIE_ENDPOINT = `${TMDB_API}movie/`;
const TMDB_TV_ENDPOINT = `${TMDB_API}tv/`;

enum Type {
  Movie = "movie",
  Episode = "episode",
}
export interface NowWatching {
  title: string;
  year: number;
  date: Date;
  poster: string;
  url: string;
}

export interface TraktMovie {
  type: Type.Movie;
  movie: {
    ids: {
      tmdb: number;
      slug: string;
    };
  };
  watched_at: string;
}

export interface TraktEpisode {
  watched_at: string;
  type: Type.Episode;
  episode: {
    season: number;
    number: number;
    title: string;
    ids: {
      trakt: number;
      tmdb: number;
    };
  };
  show: {
    title: string;
    year: number;
    ids: {
      slug: string;
      tmdb: number;
    };
  };
}

export type TraktResponse = (TraktMovie | TraktEpisode)[];

export async function getNowWatching(): Promise<NowWatching> {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("trakt-api-version", "2");
    headers.append("trakt-api-key", TRAKT_CLIENT_ID as string);

    const traktresponse = await fetch(TRAKT_ENDPOINT, { headers });

    if (!traktresponse.ok) {
      console.error(
        "Trakt API error:",
        traktresponse.status,
        traktresponse.statusText
      );
      throw new Error("Failed to fetch data from Trakt API");
    }

    const traktdata: TraktResponse = await traktresponse.json();

    if (traktdata.length === 0) {
      throw new Error("No data returned from Trakt API");
    }

    const latest = traktdata[0];

    let title = "";
    let year = 0;
    let date = new Date();
    let poster = "";
    let slug = "";
    let url = "";

    const tmdbHeaders = new Headers();
    tmdbHeaders.append("Content-Type", "application/json");
    tmdbHeaders.append("Authorization", `Bearer ${TMDB_API_KEY}`);

    const tmdbId =
      latest.type === Type.Movie ? latest.movie.ids.tmdb : latest.show.ids.tmdb;
    const tmdbEndpoint =
      latest.type === Type.Movie ? TMDB_MOVIE_ENDPOINT : TMDB_TV_ENDPOINT;

    const tmdbResponse = await fetch(`${tmdbEndpoint}${tmdbId}`, {
      headers: tmdbHeaders,
    });

    if (!tmdbResponse.ok) {
      console.error(
        "TMDB API error:",
        tmdbResponse.status,
        tmdbResponse.statusText
      );
      throw new Error("Failed to fetch data from TMDB API");
    }

    const tmdbData = await tmdbResponse.json();

    if (latest.type === Type.Movie) {
      title = tmdbData.title;
      year = new Date(tmdbData.release_date).getFullYear();
      poster = `https://image.tmdb.org/t/p/w200${tmdbData.poster_path}`;
      slug = latest.movie.ids.slug;
      url = `${TRAKT_BASE_URL}movies/${slug}`;
    } else {
      const seasonAndEpisode = `S${latest.episode.season} E${leadingZero(
        latest.episode.number
      )}`;
      title = `${latest.show.title} · ${seasonAndEpisode} · ${latest.episode.title}`;
      year = new Date(tmdbData.first_air_date).getFullYear();
      poster = `https://image.tmdb.org/t/p/w200${tmdbData.poster_path}`;
      slug = latest.show.ids.slug;
      url = `${TRAKT_BASE_URL}shows/${slug}/seasons/${latest.episode.season}/episodes/${latest.episode.number}`;
    }

    date = new Date(latest.watched_at);
    return {
      title,
      year,
      date,
      poster,
      url,
    };
  } catch (error) {
    throw new Error("Failed to fetch data from Trakt API");
  }
}
