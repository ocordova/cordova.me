import { cached, TTL } from "~/lib/cache.server";

// Nintendo Switch has no public play API, so "now playing" is set by hand.
// NOW_PLAYING_URL points at a GitHub Gist raw JSON, editable without a redeploy:
//   { "title": "The Legend of Zelda: Tears of the Kingdom", "url": "...", "date": "2026-08-09" }
const NOW_PLAYING_URL = process.env.NOW_PLAYING_URL || "";

export interface NowPlaying {
  title: string;
  url: string;
  date: string;
}

async function fetchNowPlaying(): Promise<NowPlaying> {
  if (!NOW_PLAYING_URL) {
    throw new Error("NOW_PLAYING_URL is not set");
  }

  const response = await fetch(NOW_PLAYING_URL, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch now playing: HTTP ${response.status}`);
  }

  const data = (await response.json()) as Partial<NowPlaying>;
  if (!data.title) {
    throw new Error("No game currently playing");
  }

  return {
    title: data.title,
    url: data.url ?? "",
    date: data.date ?? "",
  };
}

export const getNowPlaying = (opts?: { wait?: boolean }) =>
  cached("now-playing", TTL.playing, fetchNowPlaying, opts);
