import { getNowReading } from "~/actions/now-reading.server";

export async function loader() {
  try {
    const data = await getNowReading();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching now reading:", error);
    throw new Response(
      JSON.stringify({ error: "Failed to fetch currently reading" }), 
      { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}