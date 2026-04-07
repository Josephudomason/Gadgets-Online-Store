"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  normalizeEmail,
  readAuthSession,
  readStoredUser,
  subscribeToAuth,
  writeAuthSession,
  writeStoredUser,
  type AuthSession,
  type StoredUser,
} from "@/lib/auth";

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

type AuthContextValue = {
  user: StoredUser | null;
  session: AuthSession | null;
  isReady: boolean;
  isAuthenticated: boolean;
  signup: (payload: SignupPayload) => { ok: boolean; message: string };
  login: (payload: LoginPayload) => { ok: boolean; message: string };
  updateProfile: (payload: Omit<SignupPayload, "email" | "password">) => { ok: boolean; message: string };
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const isReady = useSyncExternalStore(subscribeToAuth, () => true, () => false);
  const user = useSyncExternalStore(
    subscribeToAuth,
    readStoredUser,
    () => null
  );
  const session = useSyncExternalStore(
    subscribeToAuth,
    readAuthSession,
    () => null
  );
  const validateProfile = ({
    name,
    homeAddress,
    phoneNumber,
    gender,
    age,
  }: Omit<SignupPayload, "email" | "password">) => {
    if (!name.trim() || !homeAddress.trim() || !phoneNumber.trim() || !gender.trim()) {
      return "Please complete all profile fields.";
    }

    const numericAge = Number(age);

    if (!Number.isFinite(numericAge) || numericAge < 18) {
      return "Users must be at least 18 years old.";
    }

    return null;
  };

  const signup = ({
    name,
    homeAddress,
    phoneNumber,
    gender,
    age,
    email,
    password,
  }: SignupPayload) => {
    const profileValidationMessage = validateProfile({
      name,
      homeAddress,
      phoneNumber,
      gender,
      age,
    });

    if (profileValidationMessage) {
      return { ok: false, message: profileValidationMessage };
    }

    const normalizedEmail = normalizeEmail(email);
    const existingUser = readStoredUser();

    if (existingUser && normalizeEmail(existingUser.email) === normalizedEmail) {
      return { ok: false, message: "An account with this email already exists." };
    }

    const nextUser: StoredUser = {
      name: name.trim(),
      homeAddress: homeAddress.trim(),
      phoneNumber: phoneNumber.trim(),
      gender: gender.trim(),
      age: age.trim(),
      email: normalizedEmail,
      password,
      createdAt: new Date().toISOString(),
    };
    const nextSession: AuthSession = {
      email: normalizedEmail,
      loggedInAt: new Date().toISOString(),
    };

    writeStoredUser(nextUser);
    writeAuthSession(nextSession);

    return { ok: true, message: "Account created successfully." };
  };

  const login = ({ email, password }: LoginPayload) => {
    const existingUser = readStoredUser();

    if (!existingUser) {
      return { ok: false, message: "No account found. Sign up first." };
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

    return { ok: true, message: "Login successful." };
  };

  const updateProfile = ({
    name,
    homeAddress,
    phoneNumber,
    gender,
    age,
  }: Omit<SignupPayload, "email" | "password">) => {
    const profileValidationMessage = validateProfile({
      name,
      homeAddress,
      phoneNumber,
      gender,
      age,
    });

    if (profileValidationMessage) {
      return { ok: false, message: profileValidationMessage };
    }

    const existingUser = readStoredUser();

    if (!existingUser) {
      return { ok: false, message: "No account found to update." };
    }

    const nextUser: StoredUser = {
      ...existingUser,
      name: name.trim(),
      homeAddress: homeAddress.trim(),
      phoneNumber: phoneNumber.trim(),
      gender: gender.trim(),
      age: age.trim(),
    };

    writeStoredUser(nextUser);

    return { ok: true, message: "Profile saved." };
  };

  const logout = () => {
    writeAuthSession(null);
  };

  const value = {
    user,
    session,
    isReady,
    isAuthenticated: Boolean(user && session),
    signup,
    login,
    updateProfile,
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
