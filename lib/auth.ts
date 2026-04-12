export const AUTH_STATE_EVENT = "store-auth-change";

export type StoredUser = {
  name: string;
  homeAddress: string;
  phoneNumber: string;
  gender: string;
  age: string;
  email: string;
  createdAt: string;
};

export type AuthSession = {
  email: string;
  loggedInAt: string;
};

type AuthSnapshot = {
  isReady: boolean;
  user: StoredUser | null;
  session: AuthSession | null;
};

type SignupPayload = {
  name: string;
  homeAddress: string;
  phoneNumber: string;
  gender: string;
  age: string;
  email: string;
  password: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

type UpdateProfilePayload = Omit<SignupPayload, "email" | "password">;

type AuthMutationResult = {
  ok: boolean;
  message: string;
};

const INITIAL_AUTH_SNAPSHOT: AuthSnapshot = {
  isReady: false,
  user: null,
  session: null,
};

let authSnapshot = INITIAL_AUTH_SNAPSHOT;
let authInitializationPromise: Promise<void> | null = null;
const listeners = new Set<() => void>();

export const normalizeEmail = (email: string) => email.trim().toLowerCase();
const normalizeText = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const sanitizeUser = (value: unknown): StoredUser | null => {
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
    createdAt:
      typeof candidate.createdAt === "string" && candidate.createdAt
        ? candidate.createdAt
        : new Date().toISOString(),
  };
};

const sanitizeSession = (value: unknown): AuthSession | null => {
  if (!value || typeof value !== "object") {
    return null;
  }

  const candidate = value as Partial<AuthSession>;

  if (
    typeof candidate.email !== "string" ||
    typeof candidate.loggedInAt !== "string"
  ) {
    return null;
  }

  return {
    email: normalizeEmail(candidate.email),
    loggedInAt: candidate.loggedInAt,
  };
};

const emitAuthChange = () => {
  listeners.forEach((listener) => listener());

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUTH_STATE_EVENT));
  }
};

const setAuthSnapshot = (nextSnapshot: AuthSnapshot) => {
  authSnapshot = nextSnapshot;
  emitAuthChange();
};

const clearLegacyAuthStorage = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem("store-auth-user");
  window.localStorage.removeItem("store-auth-session");
};

const readJsonSafely = async (response: Response) => {
  try {
    return (await response.json()) as Record<string, unknown>;
  } catch {
    return {};
  }
};

const applySessionPayload = (payload: Record<string, unknown>) => {
  setAuthSnapshot({
    isReady: true,
    user: sanitizeUser(payload.user),
    session: sanitizeSession(payload.session),
  });
};

export const getAuthSnapshot = () => authSnapshot;
export const getAuthServerSnapshot = () => INITIAL_AUTH_SNAPSHOT;
export const readStoredUser = () => authSnapshot.user;
export const readAuthSession = () => authSnapshot.session;

export const subscribeToAuth = (onStoreChange: () => void) => {
  listeners.add(onStoreChange);

  return () => {
    listeners.delete(onStoreChange);
  };
};

export const refreshAuthState = async () => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const response = await fetch("/api/auth/session", {
      credentials: "include",
      cache: "no-store",
    });
    const payload = await readJsonSafely(response);

    if (!response.ok) {
      throw new Error(typeof payload.message === "string" ? payload.message : "Unable to load session.");
    }

    clearLegacyAuthStorage();
    applySessionPayload(payload);
  } catch {
    setAuthSnapshot({
      isReady: true,
      user: null,
      session: null,
    });
  }
};

export const initializeAuthState = () => {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (!authInitializationPromise) {
    authInitializationPromise = refreshAuthState().finally(() => {
      authInitializationPromise = null;
    });
  }

  return authInitializationPromise;
};

const mutateAuth = async (
  input: RequestInfo | URL,
  init: RequestInit = {}
): Promise<AuthMutationResult> => {
  try {
    const response = await fetch(input, {
      ...init,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(init.headers ?? {}),
      },
      cache: "no-store",
    });
    const payload = await readJsonSafely(response);

    if (!response.ok) {
      return {
        ok: false,
        message:
          typeof payload.message === "string"
            ? payload.message
            : "Something went wrong. Please try again.",
      };
    }

    clearLegacyAuthStorage();
    applySessionPayload(payload);

    return {
      ok: true,
      message:
        typeof payload.message === "string"
          ? payload.message
          : "Request completed successfully.",
    };
  } catch {
    return {
      ok: false,
      message: "Unable to reach the server right now. Please try again.",
    };
  }
};

export const signupWithApi = (payload: SignupPayload) =>
  mutateAuth("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const loginWithApi = (payload: LoginPayload) =>
  mutateAuth("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateProfileWithApi = (payload: UpdateProfilePayload) =>
  mutateAuth("/api/auth/profile", {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

export const logoutWithApi = () =>
  mutateAuth("/api/auth/logout", {
    method: "POST",
    body: JSON.stringify({}),
  });
