"use client";

export const AUTH_USER_STORAGE_KEY = "store-auth-user";
export const AUTH_SESSION_STORAGE_KEY = "store-auth-session";

export type StoredUser = {
  name: string;
  email: string;
  password: string;
  verified: boolean;
  createdAt: string;
};

export type AuthSession = {
  email: string;
  loggedInAt: string;
};

export const normalizeEmail = (email: string) => email.trim().toLowerCase();

const isBrowser = () => typeof window !== "undefined";

export const readStoredUser = (): StoredUser | null => {
  if (!isBrowser()) {
    return null;
  }

  const raw = window.localStorage.getItem(AUTH_USER_STORAGE_KEY);

  return raw ? (JSON.parse(raw) as StoredUser) : null;
};

export const writeStoredUser = (user: StoredUser | null) => {
  if (!isBrowser()) {
    return;
  }

  if (!user) {
    window.localStorage.removeItem(AUTH_USER_STORAGE_KEY);
    return;
  }

  window.localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(user));
};

export const readAuthSession = (): AuthSession | null => {
  if (!isBrowser()) {
    return null;
  }

  const raw = window.localStorage.getItem(AUTH_SESSION_STORAGE_KEY);

  return raw ? (JSON.parse(raw) as AuthSession) : null;
};

export const writeAuthSession = (session: AuthSession | null) => {
  if (!isBrowser()) {
    return;
  }

  if (!session) {
    window.localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
    return;
  }

  window.localStorage.setItem(AUTH_SESSION_STORAGE_KEY, JSON.stringify(session));
};

export const buildVerificationCode = () => "123456";
