import { randomBytes, createHash } from "crypto";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";
import { compare, hash } from "bcryptjs";

import { getDatabase } from "@/lib/mongodb";
import { normalizeEmail, type AuthSession, type StoredUser } from "@/lib/auth";

const AUTH_COOKIE_NAME = "store-session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 30;

type SignupPayload = {
  name: string;
  homeAddress: string;
  phoneNumber: string;
  gender: string;
  age: string;
  email: string;
  password: string;
};

type UpdateProfilePayload = Omit<SignupPayload, "email" | "password">;

type UserDocument = StoredUser & {
  _id: ObjectId;
  passwordHash: string;
  updatedAt: string;
};

type SessionDocument = {
  _id: ObjectId;
  userId: ObjectId;
  email: string;
  tokenHash: string;
  loggedInAt: string;
  expiresAt: Date;
  createdAt: string;
};

const normalizeText = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export const validateProfile = ({
  name,
  homeAddress,
  phoneNumber,
  gender,
  age,
}: UpdateProfilePayload) => {
  if (!name.trim() || !homeAddress.trim() || !phoneNumber.trim() || !gender.trim()) {
    return "Please complete all profile fields.";
  }

  const numericAge = Number(age);

  if (!Number.isFinite(numericAge) || numericAge < 18) {
    return "Users must be at least 18 years old.";
  }

  return null;
};

const sanitizeUser = (user: UserDocument): StoredUser => ({
  name: normalizeText(user.name),
  homeAddress: normalizeText(user.homeAddress),
  phoneNumber: normalizeText(user.phoneNumber),
  gender: normalizeText(user.gender),
  age: normalizeText(user.age),
  email: normalizeEmail(user.email),
  createdAt: user.createdAt,
});

const sanitizeSession = (session: SessionDocument): AuthSession => ({
  email: normalizeEmail(session.email),
  loggedInAt: session.loggedInAt,
});

const getCollections = async () => {
  const db = await getDatabase();

  const users = db.collection<UserDocument>("users");
  const sessions = db.collection<SessionDocument>("sessions");

  await Promise.all([
    users.createIndex({ email: 1 }, { unique: true }),
    sessions.createIndex({ tokenHash: 1 }, { unique: true }),
    sessions.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
  ]);

  return { users, sessions };
};

const hashSessionToken = (token: string) =>
  createHash("sha256").update(token).digest("hex");

const setSessionCookie = async (token: string, expiresAt: Date) => {
  const cookieStore = await cookies();

  cookieStore.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt,
  });
};

export const clearSessionCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0),
  });
};

export const createSessionForUser = async (user: UserDocument) => {
  const { sessions } = await getCollections();
  const token = randomBytes(32).toString("hex");
  const now = new Date();
  const expiresAt = new Date(now.getTime() + SESSION_DURATION_MS);

  const session: SessionDocument = {
    _id: new ObjectId(),
    userId: user._id,
    email: normalizeEmail(user.email),
    tokenHash: hashSessionToken(token),
    loggedInAt: now.toISOString(),
    expiresAt,
    createdAt: now.toISOString(),
  };

  await sessions.insertOne(session);
  await setSessionCookie(token, expiresAt);

  return {
    user: sanitizeUser(user),
    session: sanitizeSession(session),
  };
};

export const getSessionContext = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    return { user: null, session: null, sessionId: null };
  }

  const { users, sessions } = await getCollections();
  const session = await sessions.findOne({
    tokenHash: hashSessionToken(token),
    expiresAt: { $gt: new Date() },
  });

  if (!session) {
    await clearSessionCookie();
    return { user: null, session: null, sessionId: null };
  }

  const user = await users.findOne({ _id: session.userId });

  if (!user) {
    await sessions.deleteOne({ _id: session._id });
    await clearSessionCookie();
    return { user: null, session: null, sessionId: null };
  }

  return {
    user: sanitizeUser(user),
    session: sanitizeSession(session),
    sessionId: session._id,
  };
};

export const signupUser = async (payload: SignupPayload) => {
  const profileValidationMessage = validateProfile(payload);

  if (profileValidationMessage) {
    return { ok: false as const, message: profileValidationMessage };
  }

  const email = normalizeEmail(payload.email);

  if (!email) {
    return { ok: false as const, message: "Please enter a valid email address." };
  }

  if (payload.password.trim().length < 6) {
    return { ok: false as const, message: "Password must be at least 6 characters long." };
  }

  const { users } = await getCollections();
  const existingUser = await users.findOne({ email });

  if (existingUser) {
    return { ok: false as const, message: "An account with this email already exists." };
  }

  const now = new Date().toISOString();
  const user: UserDocument = {
    _id: new ObjectId(),
    name: payload.name.trim(),
    homeAddress: payload.homeAddress.trim(),
    phoneNumber: payload.phoneNumber.trim(),
    gender: payload.gender.trim(),
    age: payload.age.trim(),
    email,
    passwordHash: await hash(payload.password, 12),
    createdAt: now,
    updatedAt: now,
  };

  await users.insertOne(user);

  return {
    ok: true as const,
    message: "Account created successfully.",
    ...(await createSessionForUser(user)),
  };
};

export const loginUser = async (emailInput: string, password: string) => {
  const email = normalizeEmail(emailInput);
  const { users } = await getCollections();
  const user = await users.findOne({ email });

  if (!user) {
    return { ok: false as const, message: "No account found. Sign up first." };
  }

  const passwordMatches = await compare(password, user.passwordHash);

  if (!passwordMatches) {
    return { ok: false as const, message: "Invalid email or password." };
  }

  return {
    ok: true as const,
    message: "Login successful.",
    ...(await createSessionForUser(user)),
  };
};

export const updateUserProfile = async (payload: UpdateProfilePayload) => {
  const profileValidationMessage = validateProfile(payload);

  if (profileValidationMessage) {
    return { ok: false as const, message: profileValidationMessage };
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    return { ok: false as const, message: "Please log in to update your profile." };
  }

  const { users, sessions } = await getCollections();
  const session = await sessions.findOne({
    tokenHash: hashSessionToken(token),
    expiresAt: { $gt: new Date() },
  });

  if (!session) {
    await clearSessionCookie();
    return { ok: false as const, message: "Your session has expired. Please log in again." };
  }

  await users.updateOne(
    { _id: session.userId },
    {
      $set: {
        name: payload.name.trim(),
        homeAddress: payload.homeAddress.trim(),
        phoneNumber: payload.phoneNumber.trim(),
        gender: payload.gender.trim(),
        age: payload.age.trim(),
        updatedAt: new Date().toISOString(),
      },
    }
  );

  const updatedUser = await users.findOne({ _id: session.userId });

  if (!updatedUser) {
    return { ok: false as const, message: "No account found to update." };
  }

  return {
    ok: true as const,
    message: "Profile saved.",
    user: sanitizeUser(updatedUser),
    session: sanitizeSession(session),
  };
};

export const logoutUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (token) {
    const { sessions } = await getCollections();
    await sessions.deleteOne({ tokenHash: hashSessionToken(token) });
  }

  await clearSessionCookie();

  return {
    ok: true as const,
    message: "Logged out successfully.",
    user: null,
    session: null,
  };
};
