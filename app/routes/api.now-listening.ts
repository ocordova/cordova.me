import { getNowListening } from "~/actions/now-listening.server";

export async function loader() {
  try {
    const data = await getNowListening();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching now listening:", error);
    throw new Response(
      JSON.stringify({ error: "Failed to fetch currently listening" }), 
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}