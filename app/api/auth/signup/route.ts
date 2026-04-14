import { NextResponse } from "next/server";

import { signupUser } from "@/lib/server/auth";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      name?: string;
      homeAddress?: string;
      phoneNumber?: string;
      gender?: string;
      age?: string;
      email?: string;
      password?: string;
    };

    const result = await signupUser({
      name: payload.name ?? "",
      homeAddress: payload.homeAddress ?? "",
      phoneNumber: payload.phoneNumber ?? "",
      gender: payload.gender ?? "",
      age: payload.age ?? "",
      email: payload.email ?? "",
      password: payload.password ?? "",
    });

    return NextResponse.json(result, {
      status: result.ok ? 200 : 400,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to create your account right now.";

    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
