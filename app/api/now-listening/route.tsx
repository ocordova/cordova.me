import { NextResponse } from "next/server";
import { getNowListening } from "@/app/actions/now-listening";

export async function GET() {
  const data = await getNowListening();
  return NextResponse.json(data);
}

export const revalidate = 30;
