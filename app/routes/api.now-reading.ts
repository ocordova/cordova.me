import { getNowReading } from "~/actions/now-reading.server";
import { POLLING_INTERVAL_READING } from "~/lib/constants";

export async function loader() {
  try {
    const data = await getNowReading();
    return Response.json(data, {
      headers: {
        "Cache-Control": `public, max-age=${POLLING_INTERVAL_READING / 1000}`,
      },
    });
  } catch (error) {
    console.error("Error fetching now reading:", error);
    throw new Response(
      JSON.stringify({ error: "Failed to fetch currently reading" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
