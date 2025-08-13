import { getNowWatching } from "~/actions/now-watching.server";

export async function loader() {
  try {
    const data = await getNowWatching();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching now watching:", error);
    throw new Response(
      JSON.stringify({ error: "Failed to fetch currently watching" }), 
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}