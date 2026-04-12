import { NextResponse } from "next/server";

import { loginUser } from "@/lib/server/auth";

export async function POST(request: Request) {
  const payload = (await request.json()) as {
    email?: string;
    password?: string;
  };

  const result = await loginUser(payload.email ?? "", payload.password ?? "");

  return NextResponse.json(result, {
    status: result.ok ? 200 : 400,
  });
}
