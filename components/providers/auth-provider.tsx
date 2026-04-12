"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  getAuthServerSnapshot,
  getAuthSnapshot,
  initializeAuthState,
  loginWithApi,
  readAuthSession,
  readStoredUser,
  refreshAuthState,
  signupWithApi,
  subscribeToAuth,
  updateProfileWithApi,
  logoutWithApi,
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

type AuthResult = {
  ok: boolean;
  message: string;
};

type AuthContextValue = {
  user: StoredUser | null;
  session: AuthSession | null;
  isReady: boolean;
  isAuthenticated: boolean;
  signup: (payload: SignupPayload) => Promise<AuthResult>;
  login: (payload: LoginPayload) => Promise<AuthResult>;
  refresh: () => Promise<void>;
  updateProfile: (payload: Omit<SignupPayload, "email" | "password">) => Promise<AuthResult>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const authState = useSyncExternalStore(
    subscribeToAuth,
    getAuthSnapshot,
    getAuthServerSnapshot
  );
  const user = readStoredUser();
  const session = readAuthSession();
  const isReady = authState.isReady;

  useEffect(() => {
    void initializeAuthState();
  }, []);

  const signup = (payload: SignupPayload) => signupWithApi(payload);
  const login = (payload: LoginPayload) => loginWithApi(payload);
  const updateProfile = (payload: Omit<SignupPayload, "email" | "password">) =>
    updateProfileWithApi(payload);

  const logout = async () => {
    await logoutWithApi();
  };

  const value = {
    user,
    session,
    isReady,
    isAuthenticated: Boolean(user && session),
    signup,
    login,
    refresh: refreshAuthState,
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
