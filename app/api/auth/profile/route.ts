import { NextResponse } from "next/server";

import { updateUserProfile } from "@/lib/server/auth";

export async function PATCH(request: Request) {
  try {
    const payload = (await request.json()) as {
      name?: string;
      homeAddress?: string;
      phoneNumber?: string;
      gender?: string;
      age?: string;
    };

    const result = await updateUserProfile({
      name: payload.name ?? "",
      homeAddress: payload.homeAddress ?? "",
      phoneNumber: payload.phoneNumber ?? "",
      gender: payload.gender ?? "",
      age: payload.age ?? "",
    });

    return NextResponse.json(result, {
      status: result.ok ? 200 : 400,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to update the profile right now.";

    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
