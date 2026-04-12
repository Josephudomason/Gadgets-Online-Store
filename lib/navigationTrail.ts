"use client";

export const NAVIGATION_TRAIL_STORAGE_KEY = "store-navigation-trail";
export const NAVIGATION_TRAIL_EVENT = "store-navigation-trail-change";

type NavigationTrailItem = {
  href: string;
  label: string;
};

const EMPTY_NAVIGATION_TRAIL: NavigationTrailItem[] = [];
let cachedTrailRaw: string | null | undefined;
let cachedTrailSnapshot: NavigationTrailItem[] = EMPTY_NAVIGATION_TRAIL;

const isBrowser = () => typeof window !== "undefined";

const getLabelForPath = (pathname: string) => {
  if (pathname === "/") {
    return "Home";
  }

  if (pathname === "/products") {
    return "Product";
  }

  if (pathname.startsWith("/info/")) {
    return "Description";
  }

  if (pathname === "/cart") {
    return "Cart";
  }

  if (pathname === "/checkout") {
    return "Checkout";
  }

  const segment = pathname.split("/").filter(Boolean).pop() ?? pathname;

  return segment
    .split("-")
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(" ");
};

const parseTrail = (raw: string | null) => {
  if (!raw) {
    return EMPTY_NAVIGATION_TRAIL;
  }

  try {
    const parsed = JSON.parse(raw) as NavigationTrailItem[];

    if (!Array.isArray(parsed)) {
      return EMPTY_NAVIGATION_TRAIL;
    }

    const filteredTrail = parsed.filter(
      (item) =>
        item &&
        typeof item.href === "string" &&
        typeof item.label === "string"
    );

    return filteredTrail.length > 0 ? filteredTrail : EMPTY_NAVIGATION_TRAIL;
  } catch {
    return EMPTY_NAVIGATION_TRAIL;
  }
};

export const getNavigationTrailSnapshot = (): NavigationTrailItem[] => {
  if (!isBrowser()) {
    return EMPTY_NAVIGATION_TRAIL;
  }

  const raw = window.sessionStorage.getItem(NAVIGATION_TRAIL_STORAGE_KEY);

  if (raw === cachedTrailRaw) {
    return cachedTrailSnapshot;
  }

  cachedTrailRaw = raw;
  cachedTrailSnapshot = parseTrail(raw);

  return cachedTrailSnapshot;
};

export const trackNavigationPath = (pathname: string) => {
  if (!isBrowser()) {
    return;
  }

  const label = getLabelForPath(pathname);
  const currentTrail = getNavigationTrailSnapshot();
  const lastItem = currentTrail[currentTrail.length - 1];

  if (lastItem?.href === pathname) {
    return;
  }

  const nextTrail = [...currentTrail, { href: pathname, label }].slice(-5);
  const raw = JSON.stringify(nextTrail);

  window.sessionStorage.setItem(NAVIGATION_TRAIL_STORAGE_KEY, raw);
  cachedTrailRaw = raw;
  cachedTrailSnapshot = nextTrail;
  window.dispatchEvent(new Event(NAVIGATION_TRAIL_EVENT));
};

export const subscribeToNavigationTrail = (onStoreChange: () => void) => {
  if (!isBrowser()) {
    return () => undefined;
  }

  window.addEventListener(NAVIGATION_TRAIL_EVENT, onStoreChange);

  return () => {
    window.removeEventListener(NAVIGATION_TRAIL_EVENT, onStoreChange);
  };
};

export { EMPTY_NAVIGATION_TRAIL };
export type { NavigationTrailItem };
