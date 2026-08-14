import { LoaderFunctionArgs } from "react-router";
import { getNowPlaying } from "~/actions/now-playing.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const wait = new URL(request.url).searchParams.has("wait");
  try {
    const { value, stale } = await getNowPlaying({ wait });
    return Response.json({ data: value, stale });
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
