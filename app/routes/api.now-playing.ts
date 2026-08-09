import { getNowPlaying } from "~/actions/now-playing.server";

export async function loader() {
  try {
    const data = await getNowPlaying();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching now playing:", error);
    throw new Response(
      JSON.stringify({ error: "Failed to fetch currently playing" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
