import { NextResponse } from "next/server";

import { getSessionContext } from "@/lib/server/auth";

export async function GET() {
  const { user, session } = await getSessionContext();

  return NextResponse.json({
    user,
    session,
  });
}
