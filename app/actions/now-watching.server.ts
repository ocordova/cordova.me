import { leadingZero } from "~/lib/utils";
import { traktFetch } from "~/actions/trakt-auth.server";

const TRAKT_BASE_URL = "https://trakt.tv/";
const TRAKT_API = "https://api.trakt.tv/";
const TRAKT_USERNAME = "ocordova";
const TRAKT_ENDPOINT = `${TRAKT_API}users/${TRAKT_USERNAME}/history`;

const TRAKT_RATINGS_ENDPOINT = `${TRAKT_API}users/${TRAKT_USERNAME}/ratings`;

const TMDB_API = "https://api.themoviedb.org/3/";
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_MOVIE_ENDPOINT = `${TMDB_API}movie/`;
const TMDB_TV_ENDPOINT = `${TMDB_API}tv/`;

async function fetchRatings(
  type: "movies" | "shows"
): Promise<Map<string, number>> {
  try {
    const data = await traktFetch<
      Array<{
        rating: number;
        movie?: { ids: { slug: string } };
        show?: { ids: { slug: string } };
      }>
    >(`${TRAKT_RATINGS_ENDPOINT}/${type}`);

    const map = new Map<string, number>();
    for (const item of data) {
      const slug = item.movie?.ids.slug ?? item.show?.ids.slug;
      if (slug) {
        map.set(slug, item.rating);
      }
    }
    return map;
  } catch {
    return new Map();
  }
}

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
  rating?: number;
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
    const traktdata = await traktFetch<TraktResponse>(TRAKT_ENDPOINT);

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
    const ratingsType =
      latest.type === Type.Movie ? "movies" : "shows";
    const ratingSlug =
      latest.type === Type.Movie
        ? latest.movie.ids.slug
        : latest.show.ids.slug;

    const [tmdbResponse, ratings] = await Promise.all([
      fetch(`${tmdbEndpoint}${tmdbId}`, { headers: tmdbHeaders }),
      fetchRatings(ratingsType),
    ]);

    if (!tmdbResponse.ok) {
      throw new Error("Failed to fetch data from TMDB API");
    }

    const tmdbData = await tmdbResponse.json();
    const rating = ratings.get(ratingSlug);

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
      rating,
    };
  } catch {
    throw new Error("Failed to fetch data from Trakt API");
  }
}
