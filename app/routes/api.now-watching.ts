import { getNowWatching } from "~/actions/now-watching.server";
import { POLLING_INTERVAL_WATCHING } from "~/lib/constants";

export async function loader() {
  try {
    const data = await getNowWatching();
    return Response.json(data, {
      headers: {
        "Cache-Control": `public, max-age=${POLLING_INTERVAL_WATCHING / 1000}`,
      },
    });
  } catch (error) {
    console.error("Error fetching now watching:", error);
    throw new Response(
      JSON.stringify({ error: "Failed to fetch currently watching" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
