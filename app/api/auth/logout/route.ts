import { NextResponse } from "next/server";

import { logoutUser } from "@/lib/server/auth";

export async function POST() {
  const result = await logoutUser();

  return NextResponse.json(result);
}
