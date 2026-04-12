"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

import { useAuth } from "@/components/providers/auth-provider";

type AuthGateMode = "protected" | "signup" | "login";

const getNextUrl = (pathname: string, existingNext: string | null) => {
  const target = existingNext || (pathname && pathname !== "/" ? pathname : "");

  return target ? `?next=${encodeURIComponent(target)}` : "";
};

const readNextParam = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return new URLSearchParams(window.location.search).get("next");
};

export const AuthGate = ({
  mode,
  children,
}: {
  mode: AuthGateMode;
  children: ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isReady, user, session } = useAuth();

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const nextUrl = getNextUrl(pathname, readNextParam());

    if (mode === "protected") {
      if (!user) {
        router.replace(`/signup${nextUrl}`);
        return;
      }

      if (!session) {
        router.replace(`/login${nextUrl}`);
      }

      return;
    }

    if (mode === "signup") {
      if (session) {
        router.replace(readNextParam() || "/profile");
      }

      return;
    }

    if (mode === "login") {
      if (session) {
        router.replace(readNextParam() || "/account");
      }
    }
  }, [isReady, mode, pathname, router, session, user]);

  if (!isReady) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Preparing your account experience...
        </p>
      </div>
    );
  }

  if (mode === "protected" && (!user || !session)) {
    return null;
  }

  if (mode === "signup" && session) {
    return null;
  }

  if (mode === "login" && session) {
    return null;
  }

  return <>{children}</>;
};
