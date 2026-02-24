import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const TRAKT_API = "https://api.trakt.tv/";
const CLIENT_ID = process.env.TRAKT_CLIENT_ID;
const CLIENT_SECRET = process.env.TRAKT_CLIENT_SECRET;
const TOKEN_PATH = process.env.TRAKT_TOKEN_PATH || ".data/trakt-tokens.json";

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error(
    "Missing TRAKT_CLIENT_ID or TRAKT_CLIENT_SECRET environment variables."
  );
  process.exit(1);
}

async function deviceAuth() {
  // Step 1: Request device code
  const codeResponse = await fetch(`${TRAKT_API}oauth/device/code`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ client_id: CLIENT_ID }),
  });

  if (!codeResponse.ok) {
    console.error("Failed to get device code:", codeResponse.status);
    process.exit(1);
  }

  const { device_code, user_code, verification_url, interval } =
    await codeResponse.json();

  console.log(`\nGo to: ${verification_url}`);
  console.log(`Enter code: ${user_code}\n`);
  console.log("Waiting for authorization...\n");

  // Step 2: Poll for token
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, interval * 1000));

    const tokenResponse = await fetch(`${TRAKT_API}oauth/device/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: device_code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
    });

    if (tokenResponse.status === 200) {
      const tokens = await tokenResponse.json();
      await mkdir(dirname(TOKEN_PATH), { recursive: true });
      await writeFile(TOKEN_PATH, JSON.stringify(tokens, null, 2), "utf-8");
      console.log(`Tokens saved to ${TOKEN_PATH}`);
      return;
    }

    if (tokenResponse.status === 400) {
      // Pending - user hasn't authorized yet
      continue;
    }

    console.error("Authorization failed:", tokenResponse.status);
    process.exit(1);
  }
}

deviceAuth();
