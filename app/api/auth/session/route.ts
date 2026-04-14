import { NextResponse } from "next/server";

import { getSessionContext } from "@/lib/server/auth";

export async function GET() {
  try {
    const { user, session } = await getSessionContext();

    return NextResponse.json({
      user,
      session,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to load the current session.";

    return NextResponse.json(
      {
        user: null,
        session: null,
        message,
      },
      { status: 500 }
    );
  }
}
