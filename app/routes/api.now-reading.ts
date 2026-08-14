import { LoaderFunctionArgs } from "react-router";
import { getNowReading } from "~/actions/now-reading.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const wait = new URL(request.url).searchParams.has("wait");
  try {
    const { value, stale } = await getNowReading({ wait });
    return Response.json({ data: value, stale });
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
