import { LoaderFunctionArgs } from "react-router";
import { getNowListening } from "~/actions/now-listening.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const wait = new URL(request.url).searchParams.has("wait");
  try {
    const { value, stale } = await getNowListening({ wait });
    return Response.json({ data: value, stale });
  } catch (error) {
    console.error("Error fetching now listening:", error);
    throw new Response(
      JSON.stringify({ error: "Failed to fetch currently listening" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
