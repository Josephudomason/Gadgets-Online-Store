"use client";

export const AUTH_USER_STORAGE_KEY = "store-auth-user";
export const AUTH_SESSION_STORAGE_KEY = "store-auth-session";
export const AUTH_STATE_EVENT = "store-auth-change";

export type StoredUser = {
  name: string;
  homeAddress: string;
  phoneNumber: string;
  gender: string;
  age: string;
  email: string;
  password: string;
  createdAt: string;
};

export type AuthSession = {
  email: string;
  loggedInAt: string;
};

export const normalizeEmail = (email: string) => email.trim().toLowerCase();
const normalizeText = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const isBrowser = () => typeof window !== "undefined";
let cachedUserRaw: string | null | undefined;
let cachedUserSnapshot: StoredUser | null = null;
let cachedSessionRaw: string | null | undefined;
let cachedSessionSnapshot: AuthSession | null = null;

const normalizeStoredUser = (value: unknown): StoredUser | null => {
  if (!value || typeof value !== "object") {
    return null;
  }

  const candidate = value as Partial<StoredUser>;
  const email = normalizeEmail(normalizeText(candidate.email));

  if (!email) {
    return null;
  }

  return {
    name: normalizeText(candidate.name),
    homeAddress: normalizeText(candidate.homeAddress),
    phoneNumber: normalizeText(candidate.phoneNumber),
    gender: normalizeText(candidate.gender),
    age: normalizeText(candidate.age),
    email,
    password: typeof candidate.password === "string" ? candidate.password : "",
    createdAt:
      typeof candidate.createdAt === "string" && candidate.createdAt
        ? candidate.createdAt
        : new Date().toISOString(),
  };
};

export const readStoredUser = (): StoredUser | null => {
  if (!isBrowser()) {
    return null;
  }

  const raw = window.localStorage.getItem(AUTH_USER_STORAGE_KEY);

  if (raw === cachedUserRaw) {
    return cachedUserSnapshot;
  }

  cachedUserRaw = raw;

  if (!raw) {
    cachedUserSnapshot = null;
    return cachedUserSnapshot;
  }

  try {
    cachedUserSnapshot = normalizeStoredUser(JSON.parse(raw));
  } catch {
    cachedUserSnapshot = null;
  }

  return cachedUserSnapshot;
};

export const writeStoredUser = (user: StoredUser | null) => {
  if (!isBrowser()) {
    return;
  }

  if (!user) {
    window.localStorage.removeItem(AUTH_USER_STORAGE_KEY);
    cachedUserRaw = null;
    cachedUserSnapshot = null;
    window.dispatchEvent(new Event(AUTH_STATE_EVENT));
    return;
  }

  const raw = JSON.stringify(user);
  window.localStorage.setItem(AUTH_USER_STORAGE_KEY, raw);
  cachedUserRaw = raw;
  cachedUserSnapshot = user;
  window.dispatchEvent(new Event(AUTH_STATE_EVENT));
};

export const readAuthSession = (): AuthSession | null => {
  if (!isBrowser()) {
    return null;
  }

  const raw = window.localStorage.getItem(AUTH_SESSION_STORAGE_KEY);

  if (raw === cachedSessionRaw) {
    return cachedSessionSnapshot;
  }

  cachedSessionRaw = raw;

  if (!raw) {
    cachedSessionSnapshot = null;
    return cachedSessionSnapshot;
  }

  try {
    const session = JSON.parse(raw) as Partial<AuthSession>;

    if (
      typeof session.email !== "string" ||
      typeof session.loggedInAt !== "string"
    ) {
      cachedSessionSnapshot = null;
      return cachedSessionSnapshot;
    }

    cachedSessionSnapshot = {
      email: normalizeEmail(session.email),
      loggedInAt: session.loggedInAt,
    };
  } catch {
    cachedSessionSnapshot = null;
  }

  return cachedSessionSnapshot;
};

export const writeAuthSession = (session: AuthSession | null) => {
  if (!isBrowser()) {
    return;
  }

  if (!session) {
    window.localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
    cachedSessionRaw = null;
    cachedSessionSnapshot = null;
    window.dispatchEvent(new Event(AUTH_STATE_EVENT));
    return;
  }

  const raw = JSON.stringify(session);
  window.localStorage.setItem(AUTH_SESSION_STORAGE_KEY, raw);
  cachedSessionRaw = raw;
  cachedSessionSnapshot = session;
  window.dispatchEvent(new Event(AUTH_STATE_EVENT));
};

export const subscribeToAuth = (onStoreChange: () => void) => {
  if (!isBrowser()) {
    return () => undefined;
  }

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(AUTH_STATE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(AUTH_STATE_EVENT, onStoreChange);
  };
};
