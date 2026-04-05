"use client";

import {
  createContext,
  useContext,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  buildVerificationCode,
  normalizeEmail,
  readAuthSession,
  readStoredUser,
  writeAuthSession,
  writeStoredUser,
  type AuthSession,
  type StoredUser,
} from "@/lib/auth";

type SignupPayload = {
  name: string;
  email: string;
  password: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

type AuthContextValue = {
  user: StoredUser | null;
  session: AuthSession | null;
  verificationCode: string;
  isReady: boolean;
  isAuthenticated: boolean;
  signup: (payload: SignupPayload) => { ok: boolean; message: string };
  verify: (code: string) => { ok: boolean; message: string };
  login: (payload: LoginPayload) => { ok: boolean; message: string };
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const emptySubscribe = () => () => {};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const isReady = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [user, setUser] = useState<StoredUser | null>(() =>
    typeof window === "undefined" ? null : readStoredUser()
  );
  const [session, setSession] = useState<AuthSession | null>(() =>
    typeof window === "undefined" ? null : readAuthSession()
  );
  const [verificationCode] = useState(buildVerificationCode());

  const signup = ({ name, email, password }: SignupPayload) => {
    const normalizedEmail = normalizeEmail(email);
    const existingUser = readStoredUser();

    if (existingUser && normalizeEmail(existingUser.email) === normalizedEmail) {
      return { ok: false, message: "An account with this email already exists." };
    }

    const nextUser: StoredUser = {
      name: name.trim(),
      email: normalizedEmail,
      password,
      verified: false,
      createdAt: new Date().toISOString(),
    };

    writeStoredUser(nextUser);
    writeAuthSession(null);
    setUser(nextUser);
    setSession(null);

    return { ok: true, message: "Account created. Verify your email to continue." };
  };

  const verify = (code: string) => {
    const existingUser = readStoredUser();

    if (!existingUser) {
      return { ok: false, message: "Create an account before verification." };
    }

    if (code.trim() !== verificationCode) {
      return { ok: false, message: "Incorrect verification code." };
    }

    const nextUser = { ...existingUser, verified: true };
    writeStoredUser(nextUser);
    setUser(nextUser);

    return { ok: true, message: "Verification completed. Please log in." };
  };

  const login = ({ email, password }: LoginPayload) => {
    const existingUser = readStoredUser();

    if (!existingUser) {
      return { ok: false, message: "No account found. Sign up first." };
    }

    if (!existingUser.verified) {
      return { ok: false, message: "Verify your account before logging in." };
    }

    if (
      normalizeEmail(existingUser.email) !== normalizeEmail(email) ||
      existingUser.password !== password
    ) {
      return { ok: false, message: "Invalid email or password." };
    }

    const nextSession: AuthSession = {
      email: existingUser.email,
      loggedInAt: new Date().toISOString(),
    };

    writeAuthSession(nextSession);
    setUser(existingUser);
    setSession(nextSession);

    return { ok: true, message: "Login successful." };
  };

  const logout = () => {
    writeAuthSession(null);
    setSession(null);
  };

  const value = {
    user,
    session,
    verificationCode,
    isReady,
    isAuthenticated: Boolean(user?.verified && session),
    signup,
    verify,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};
