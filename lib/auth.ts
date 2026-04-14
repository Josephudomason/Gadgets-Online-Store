"use client";

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

type StoredAccountRecord = StoredUser & {
  password: string;
  updatedAt: string;
};

const AUTH_USERS_STORAGE_KEY = "store-auth-users";
const AUTH_SESSION_STORAGE_KEY = "store-auth-session";
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

const sanitizeStoredAccount = (value: unknown): StoredAccountRecord | null => {
  if (!value || typeof value !== "object") {
    return null;
  }

  const candidate = value as Partial<StoredAccountRecord>;
  const user = sanitizeUser(candidate);

  if (!user || typeof candidate.password !== "string") {
    return null;
  }

  return {
    ...user,
    password: candidate.password,
    updatedAt:
      typeof candidate.updatedAt === "string" && candidate.updatedAt
        ? candidate.updatedAt
        : user.createdAt,
  };
};

const canUseStorage = () => typeof window !== "undefined";

const emitAuthChange = () => {
  listeners.forEach((listener) => listener());

  if (canUseStorage()) {
    window.dispatchEvent(new Event(AUTH_STATE_EVENT));
  }
};

const setAuthSnapshot = (nextSnapshot: AuthSnapshot) => {
  authSnapshot = nextSnapshot;
  emitAuthChange();
};

const readJsonFromStorage = (key: string) => {
  if (!canUseStorage()) {
    return null;
  }

  const rawValue = window.localStorage.getItem(key);

  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue) as unknown;
  } catch {
    window.localStorage.removeItem(key);
    return null;
  }
};

const writeJsonToStorage = (key: string, value: unknown) => {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
};

const readStoredAccounts = () => {
  const parsed = readJsonFromStorage(AUTH_USERS_STORAGE_KEY);

  if (!Array.isArray(parsed)) {
    return [];
  }

  return parsed
    .map((entry) => sanitizeStoredAccount(entry))
    .filter((entry): entry is StoredAccountRecord => Boolean(entry));
};

const writeStoredAccounts = (accounts: StoredAccountRecord[]) => {
  writeJsonToStorage(AUTH_USERS_STORAGE_KEY, accounts);
};

const readStoredSession = () => sanitizeSession(readJsonFromStorage(AUTH_SESSION_STORAGE_KEY));

const writeStoredSession = (session: AuthSession | null) => {
  if (!canUseStorage()) {
    return;
  }

  if (!session) {
    window.localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
    return;
  }

  writeJsonToStorage(AUTH_SESSION_STORAGE_KEY, session);
};

const getUserForSession = (session: AuthSession | null) => {
  if (!session) {
    return null;
  }

  const accounts = readStoredAccounts();
  const account = accounts.find(
    (candidate) => candidate.email === normalizeEmail(session.email)
  );

  return account ? sanitizeUser(account) : null;
};

const validateProfile = ({
  name,
  homeAddress,
  phoneNumber,
  gender,
  age,
}: UpdateProfilePayload) => {
  if (
    !name.trim() ||
    !homeAddress.trim() ||
    !phoneNumber.trim() ||
    !gender.trim()
  ) {
    return "Please complete all profile fields.";
  }

  const numericAge = Number(age);

  if (!Number.isFinite(numericAge) || numericAge < 18) {
    return "Users must be at least 18 years old.";
  }

  return null;
};

const syncAuthSnapshotFromStorage = () => {
  const session = readStoredSession();
  const user = getUserForSession(session);

  if (session && !user) {
    writeStoredSession(null);
  }

  setAuthSnapshot({
    isReady: true,
    user,
    session: user ? session : null,
  });
};

export const getAuthSnapshot = () => authSnapshot;
export const getAuthServerSnapshot = () => INITIAL_AUTH_SNAPSHOT;
export const readStoredUser = () => authSnapshot.user;
export const readAuthSession = () => authSnapshot.session;

export const subscribeToAuth = (onStoreChange: () => void) => {
  listeners.add(onStoreChange);

  if (canUseStorage()) {
    const handleStorageChange = (event: StorageEvent) => {
      if (
        event.key === null ||
        event.key === AUTH_USERS_STORAGE_KEY ||
        event.key === AUTH_SESSION_STORAGE_KEY
      ) {
        syncAuthSnapshotFromStorage();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      listeners.delete(onStoreChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }

  return () => {
    listeners.delete(onStoreChange);
  };
};

export const refreshAuthState = async () => {
  if (!canUseStorage()) {
    return;
  }

  syncAuthSnapshotFromStorage();
};

export const initializeAuthState = () => {
  if (!canUseStorage()) {
    return Promise.resolve();
  }

  if (!authInitializationPromise) {
    authInitializationPromise = Promise.resolve().then(() => {
      syncAuthSnapshotFromStorage();
    }).finally(() => {
      authInitializationPromise = null;
    });
  }

  return authInitializationPromise;
};

export const signupWithApi = async (
  payload: SignupPayload
): Promise<AuthMutationResult> => {
  if (!canUseStorage()) {
    return {
      ok: false,
      message: "Account storage is only available in the browser.",
    };
  }

  const profileValidationMessage = validateProfile(payload);

  if (profileValidationMessage) {
    return { ok: false, message: profileValidationMessage };
  }

  const email = normalizeEmail(payload.email);

  if (!email) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (payload.password.trim().length < 6) {
    return {
      ok: false,
      message: "Password must be at least 6 characters long.",
    };
  }

  const accounts = readStoredAccounts();
  const existingUser = accounts.find((account) => account.email === email);

  if (existingUser) {
    return {
      ok: false,
      message: "An account with this email already exists.",
    };
  }

  const now = new Date().toISOString();
  const account: StoredAccountRecord = {
    name: payload.name.trim(),
    homeAddress: payload.homeAddress.trim(),
    phoneNumber: payload.phoneNumber.trim(),
    gender: payload.gender.trim(),
    age: payload.age.trim(),
    email,
    createdAt: now,
    updatedAt: now,
    password: payload.password,
  };

  accounts.push(account);
  writeStoredAccounts(accounts);

  const session: AuthSession = {
    email,
    loggedInAt: now,
  };

  writeStoredSession(session);
  syncAuthSnapshotFromStorage();

  return {
    ok: true,
    message: "Account created successfully.",
  };
};

export const loginWithApi = async (
  payload: LoginPayload
): Promise<AuthMutationResult> => {
  if (!canUseStorage()) {
    return {
      ok: false,
      message: "Account storage is only available in the browser.",
    };
  }

  const email = normalizeEmail(payload.email);
  const password = payload.password.trim();
  const accounts = readStoredAccounts();
  const account = accounts.find((candidate) => candidate.email === email);

  if (!account) {
    return {
      ok: false,
      message: "No account found. Sign up first.",
    };
  }

  if (account.password !== password) {
    return {
      ok: false,
      message: "Invalid email or password.",
    };
  }

  writeStoredSession({
    email,
    loggedInAt: new Date().toISOString(),
  });
  syncAuthSnapshotFromStorage();

  return {
    ok: true,
    message: "Login successful.",
  };
};

export const updateProfileWithApi = async (
  payload: UpdateProfilePayload
): Promise<AuthMutationResult> => {
  if (!canUseStorage()) {
    return {
      ok: false,
      message: "Account storage is only available in the browser.",
    };
  }

  const profileValidationMessage = validateProfile(payload);

  if (profileValidationMessage) {
    return { ok: false, message: profileValidationMessage };
  }

  const session = readStoredSession();

  if (!session) {
    return {
      ok: false,
      message: "Please log in to update your profile.",
    };
  }

  const accounts = readStoredAccounts();
  const accountIndex = accounts.findIndex(
    (account) => account.email === normalizeEmail(session.email)
  );

  if (accountIndex === -1) {
    writeStoredSession(null);
    syncAuthSnapshotFromStorage();
    return {
      ok: false,
      message: "Your session has expired. Please log in again.",
    };
  }

  accounts[accountIndex] = {
    ...accounts[accountIndex],
    name: payload.name.trim(),
    homeAddress: payload.homeAddress.trim(),
    phoneNumber: payload.phoneNumber.trim(),
    gender: payload.gender.trim(),
    age: payload.age.trim(),
    updatedAt: new Date().toISOString(),
  };

  writeStoredAccounts(accounts);
  syncAuthSnapshotFromStorage();

  return {
    ok: true,
    message: "Profile saved.",
  };
};

export const logoutWithApi = async (): Promise<AuthMutationResult> => {
  if (!canUseStorage()) {
    return {
      ok: false,
      message: "Account storage is only available in the browser.",
    };
  }

  writeStoredSession(null);
  syncAuthSnapshotFromStorage();

  return {
    ok: true,
    message: "Logged out successfully.",
  };
};
