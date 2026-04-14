import { NextResponse } from "next/server";

import { logoutUser } from "@/lib/server/auth";

export async function POST() {
  try {
    const result = await logoutUser();

    return NextResponse.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to log out right now.";

    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
