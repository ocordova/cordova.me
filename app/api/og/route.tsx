import { NextResponse } from "next/server";
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");

    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Óscar Córdova";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <svg
            width="75"
            viewBox="0 0 24 24"
            fill="#000"
            style={{ margin: "0 75px" }}
          >
            <path d="M11 19a6 6 0 006-6h2a8 8 0 11-8-8v2a6 6 0 000 12m4.854-12.406a1.5 1.5 0 11-.001 3.001 1.5 1.5 0 01.001-3.001z"></path>
          </svg>
          <div
            style={{
              marginTop: 40,
              maxWidth: 600,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: 40,
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
