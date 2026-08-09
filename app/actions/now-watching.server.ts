import { execFile } from "node:child_process";
import { cached, TTL } from "~/lib/cache.server";

const LETTERBOXD_USER = "ocordova";
const LETTERBOXD_RSS = `https://letterboxd.com/${LETTERBOXD_USER}/rss/`;
const LETTERBOXD_PROFILE = `https://letterboxd.com/${LETTERBOXD_USER}/`;

// Letterboxd sits behind Cloudflare, which blocks the default curl agent.
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36";

export interface NowWatching {
  title: string;
  year: number;
  date: Date;
  poster: string;
  url: string;
  rating?: number;
}

// The app cannot reach some hosts via node's fetch (undici TLS handshake
// fails), so shell out to curl like the rest of the server-side fetchers.
function curlFetch(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    execFile(
      "curl",
      ["-sS", "-A", USER_AGENT, "-w", "\n%{http_code}", url],
      { maxBuffer: 10 * 1024 * 1024 },
      (error, stdout) => {
        if (error) {
          console.error(`[letterboxd] curl error for ${url}:`, error.message);
          return reject(error);
        }
        const lines = stdout.trimEnd().split("\n");
        const statusCode = parseInt(lines.pop()!, 10);
        const body = lines.join("\n");
        if (statusCode >= 400) {
          console.error(
            `[letterboxd] HTTP ${statusCode} for ${url}: ${body.slice(0, 200)}`
          );
          return reject(
            new Error(`Letterboxd returned HTTP ${statusCode} for ${url}`)
          );
        }
        resolve(body);
      }
    );
  });
}

function decodeEntities(input: string): string {
  return input
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCodePoint(parseInt(hex, 16))
    )
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function pick(block: string, tag: string): string | undefined {
  const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return match ? match[1].trim() : undefined;
}

async function fetchNowWatching(): Promise<NowWatching> {
  const xml = await curlFetch(LETTERBOXD_RSS);
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

  // Feed mixes diary entries, reviews, and list updates. Take the most recent
  // item that actually names a film with a watched date.
  for (const item of items) {
    const filmTitle = pick(item, "letterboxd:filmTitle");
    const watchedDate = pick(item, "letterboxd:watchedDate");
    if (!filmTitle || !watchedDate) continue;

    const filmYear = pick(item, "letterboxd:filmYear");
    const memberRating = pick(item, "letterboxd:memberRating");
    const link = pick(item, "link");
    const poster = item.match(/<img src="([^"]+)"/)?.[1] ?? "";

    return {
      title: decodeEntities(filmTitle),
      year: filmYear ? Number(filmYear) : 0,
      date: new Date(watchedDate),
      poster,
      url: link ?? LETTERBOXD_PROFILE,
      // Letterboxd rating: 0.5–5 stars, in half-star steps. Rendered as stars.
      rating: memberRating ? Number(memberRating) : undefined,
    };
  }

  throw new Error("No films found in Letterboxd feed");
}

export const getNowWatching = (): Promise<NowWatching> =>
  cached("now-watching", TTL.watching, fetchNowWatching);
