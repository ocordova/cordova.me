import { LoaderFunctionArgs } from "react-router";
import { getNowWatching } from "~/actions/now-watching.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const wait = new URL(request.url).searchParams.has("wait");
  try {
    const { value, stale } = await getNowWatching({ wait });
    return Response.json({ data: value, stale });
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
