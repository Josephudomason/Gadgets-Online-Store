import { NextResponse } from "next/server";

import { updateUserProfile } from "@/lib/server/auth";

export async function PATCH(request: Request) {
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
}
