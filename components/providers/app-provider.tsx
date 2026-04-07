"use client";

import type { ReactNode } from "react";

import { AuthProvider } from "@/components/providers/auth-provider";
import { RouteHistoryTracker } from "@/components/providers/route-history-tracker";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider initialTheme="light">
      <AuthProvider>{children}</AuthProvider>
      <RouteHistoryTracker />
    </ThemeProvider>
  );
};
