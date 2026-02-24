import { readFile, writeFile, mkdir } from "node:fs/promises";
import { execFile } from "node:child_process";
import { dirname } from "node:path";

const TRAKT_API = "https://api.trakt.tv/";
const TRAKT_CLIENT_ID = process.env.TRAKT_CLIENT_ID!;
const TRAKT_CLIENT_SECRET = process.env.TRAKT_CLIENT_SECRET!;
const TOKEN_PATH = process.env.TRAKT_TOKEN_PATH!;

interface TraktTokens {
  access_token: string;
  refresh_token: string;
  created_at: number;
  expires_in: number;
}

async function readTokens(): Promise<TraktTokens | null> {
  try {
    const raw = await readFile(TOKEN_PATH, "utf-8");
    return JSON.parse(raw) as TraktTokens;
  } catch {
    return null;
  }
}

async function writeTokens(tokens: TraktTokens): Promise<void> {
  await mkdir(dirname(TOKEN_PATH), { recursive: true });
  await writeFile(TOKEN_PATH, JSON.stringify(tokens, null, 2), "utf-8");
}

function isTokenExpired(tokens: TraktTokens): boolean {
  const expiresAt = (tokens.created_at + tokens.expires_in) * 1000;
  const bufferMs = 60 * 60 * 1000; // 1 hour before expiry
  return Date.now() >= expiresAt - bufferMs;
}

async function refreshAccessToken(
  refreshToken: string
): Promise<TraktTokens> {
  const response = await fetch(`${TRAKT_API}oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: TRAKT_CLIENT_ID,
      client_secret: TRAKT_CLIENT_SECRET,
      refresh_token: refreshToken,
      redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
      grant_type: "refresh_token",
    }),
  });

  if (!response.ok) {
    throw new Error(`Trakt token refresh failed: ${response.status}`);
  }

  return (await response.json()) as TraktTokens;
}

function curlFetch(url: string, headers: Record<string, string>): Promise<string> {
  const args = ["-s", url];
  for (const [key, value] of Object.entries(headers)) {
    args.push("-H", `${key}: ${value}`);
  }
  return new Promise((resolve, reject) => {
    execFile("curl", args, (error, stdout) => {
      if (error) return reject(error);
      resolve(stdout);
    });
  });
}

export async function traktFetch<T>(url: string): Promise<T> {
  const accessToken = await getTraktAccessToken();
  const raw = await curlFetch(url, {
    "Content-Type": "application/json",
    "trakt-api-version": "2",
    "trakt-api-key": TRAKT_CLIENT_ID,
    "Authorization": `Bearer ${accessToken}`,
  });
  return JSON.parse(raw) as T;
}

let cachedTokens: TraktTokens | null = null;

export async function getTraktAccessToken(): Promise<string> {
  if (cachedTokens && !isTokenExpired(cachedTokens)) {
    return cachedTokens.access_token;
  }

  let tokens = await readTokens();

  if (!tokens) {
    throw new Error(
      "No Trakt tokens found. Run the device auth script to generate initial tokens."
    );
  }

  if (isTokenExpired(tokens)) {
    tokens = await refreshAccessToken(tokens.refresh_token);
    try {
      await writeTokens(tokens);
    } catch {
      // Token is still usable in-memory even if disk write fails
    }
  }

  cachedTokens = tokens;
  return tokens.access_token;
}
