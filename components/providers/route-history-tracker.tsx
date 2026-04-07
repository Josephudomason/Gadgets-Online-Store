"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { trackNavigationPath } from "@/lib/navigationTrail";

export const RouteHistoryTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    trackNavigationPath(pathname);
  }, [pathname]);

  return null;
};
