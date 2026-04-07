"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  User,
  X,
} from "lucide-react";

import { useAuth } from "@/components/providers/auth-provider";
import { useTheme } from "@/components/providers/theme-provider";
import { CART_STORAGE_KEY, type CartItem } from "@/lib/cart";
import { products, getProductHref } from "@/lib/productCatalog";

type SearchSuggestion = {
  id: string;
  name: string;
  href: string;
  image: string;
  brand: string | null;
};

const categoryOptions = [
  { label: "Phone", href: "/categories/phones" },
  { label: "Storage Devices", href: "/categories/storage-devices" },
  { label: "Tablets & E-readers", href: "/categories/tablets-e-readers" },
  { label: "Speakers", href: "/categories/speakers" },
  { label: "Pads", href: "/categories/pads" },
  { label: "Chargers", href: "/categories/chargers" },
  { label: "Computer Accessories", href: "/categories/computer-accessories" },
  { label: "Power Banks", href: "/categories/power-banks" },
  { label: "Network Routers", href: "/categories/network-routers" },
] as const;

const searchSuggestions: SearchSuggestion[] = products.map((product) => ({
  id: product.id,
  name: product.name,
  href: getProductHref(product),
  image: product.image,
  brand: product.brand,
}));

const accountNext = encodeURIComponent("/profile");

const SearchBar = ({
  className,
  compact = false,
  onNavigate,
}: {
  className?: string;
  compact?: boolean;
  onNavigate?: () => void;
}) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const suggestions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return searchSuggestions
      .filter((product) => product.name.toLowerCase().includes(normalizedQuery))
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, []);

  const navigateToSuggestion = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setQuery("");
    onNavigate?.();
  };

  const submitSearch = () => {
    if (suggestions.length === 0) {
      setIsOpen(false);
      return;
    }

    navigateToSuggestion(suggestions[0].href);
  };

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      <div className="flex w-full items-center overflow-hidden rounded-xl border border-slate-200 bg-white/95 shadow-sm dark:border-slate-700 dark:bg-slate-900/95">
        <select
          defaultValue=""
          aria-label="Browse categories"
          onChange={(event) => {
            const href = event.target.value;

            if (!href) {
              return;
            }

            router.push(href);
            event.target.value = "";
            onNavigate?.();
          }}
          className={`shrink-0 border-r border-slate-200 bg-slate-100 px-3 text-left font-medium text-slate-700 outline-none transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 ${compact ? "h-12 text-xs" : "h-14 text-sm"
            }`}
        >
          <option value="">All Categories</option>
          {categoryOptions.map((option) => (
            <option key={option.href} value={option.href}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="flex min-w-0 flex-1 items-center pl-4 pr-2">
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                submitSearch();
              }
            }}
            className={`w-full bg-transparent pr-2 text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-50 dark:placeholder:text-slate-500 ${compact ? "h-12 text-sm" : "h-14 text-sm"
              }`}
            placeholder="Search products in the store"
          />
          <button
            type="button"
            onClick={submitSearch}
            aria-label="Search products"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50"
          >
            <Search size={18} className="shrink-0" />
          </button>
        </div>
      </div>

      {isOpen && query.trim() ? (
        <div className="absolute inset-x-0 top-[calc(100%+0.6rem)] z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
          {suggestions.length > 0 ? (
            <ul className="max-h-96 overflow-y-auto py-2">
              {suggestions.map((suggestion) => (
                <li key={suggestion.id}>
                  <button
                    type="button"
                    onClick={() => navigateToSuggestion(suggestion.href)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 p-2 dark:bg-slate-800">
                      <Image
                        src={suggestion.image}
                        alt={suggestion.name}
                        width={40}
                        height={40}
                        sizes="40px"
                        unoptimized={suggestion.image.endsWith(".gif")}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {suggestion.name}
                      </p>
                      <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                        {suggestion.brand ?? "Product"}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-5 text-sm text-slate-500 dark:text-slate-400">
              No matching products in this project.
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export const NavBar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [logoutCountdown, setLogoutCountdown] = useState(10);
  const [logoutDeadline, setLogoutDeadline] = useState<number | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { user, session, logout } = useAuth();
  const accountMenuRef = useRef<HTMLDivElement | null>(null);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncHistoryState = () => {
      setCanGoBack(window.history.length > 1);
    };

    syncHistoryState();
    window.addEventListener("popstate", syncHistoryState);

    return () => {
      window.removeEventListener("popstate", syncHistoryState);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncCartCount = () => {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      const cartItems = storedCart ? (JSON.parse(storedCart) as CartItem[]) : [];
      const nextCount = cartItems.reduce((total, item) => total + item.quantity, 0);
      setCartCount(nextCount);
    };

    syncCartCount();
    window.addEventListener("storage", syncCartCount);
    window.addEventListener("focus", syncCartCount);

    return () => {
      window.removeEventListener("storage", syncCartCount);
      window.removeEventListener("focus", syncCartCount);
    };
  }, []);

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (!accountMenuRef.current?.contains(event.target as Node)) {
        setIsAccountMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, []);

  useEffect(() => {
    if (!isLogoutModalOpen || logoutDeadline === null) {
      return;
    }

    const interval = window.setInterval(() => {
      const remainingMilliseconds = Math.max(logoutDeadline - Date.now(), 0);
      const nextCountdown = Math.max(Math.ceil(remainingMilliseconds / 1000), 0);

      setLogoutCountdown((current) => (current === nextCountdown ? current : nextCountdown));

      if (remainingMilliseconds === 0) {
        window.clearInterval(interval);
        logout();
        setIsLogoutModalOpen(false);
        setLogoutCountdown(10);
        setLogoutDeadline(null);
        router.push("/");
      }
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isLogoutModalOpen, logoutDeadline, logout, router]);

  const accountLabel = session && user?.name ? user.name.split(" ")[0] : "Account";
  const accountDestination = session ? "/profile" : "/signup";

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#5a45db] text-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6 lg:px-8">
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/"
              aria-label="Pristine Gadgets home"
              className="shrink-0"
              onClick={closeMobileMenu}
            >
              <Image
                src="/page/logo.png"
                alt="logo"
                width={42}
                height={42}
                sizes="42px"
                style={{ height: "auto" }}
                className="w-[42px]"
              />
            </Link>

            <SearchBar className="flex-1 px-4" onNavigate={closeMobileMenu} />

            <div className="ml-auto flex items-center gap-2 sm:gap-3">
              <div className="hidden items-center gap-2 xl:flex">
                <button
                  type="button"
                  onClick={() => router.back()}
                  disabled={!canGoBack}
                  aria-label="Go back"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => router.forward()}
                  aria-label="Go forward"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <Link
                href="/cart"
                aria-label="Cart"
                className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20 sm:inline-flex"
              >
                <ShoppingBag size={18} />
                {cartCount > 0 ? (
                  <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                ) : null}
              </Link>

              <Link
                href="/notification"
                aria-label="Notifications"
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20 sm:inline-flex"
              >
                <Bell size={18} />
              </Link>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div ref={accountMenuRef} className="relative hidden md:block">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1 shadow-sm">
                  <Link
                    href={accountDestination}
                    className="inline-flex items-center gap-3 rounded-full px-2 py-1.5 text-sm font-medium transition hover:bg-white/10"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#5a45db]">
                      <User size={16} />
                    </span>
                    <span>{accountLabel}</span>
                  </Link>

                  <button
                    type="button"
                    aria-label="Open account menu"
                    aria-expanded={isAccountMenuOpen}
                    onClick={() => setIsAccountMenuOpen((current) => !current)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#5a45db]">
                      <ChevronDown size={16} />
                    </span>
                  </button>
                </div>

                {isAccountMenuOpen ? (
                  <div className="absolute right-0 top-[calc(100%+0.8rem)] w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50">
                    <div className="border-b border-slate-200 px-4 py-3 dark:border-slate-700">
                      <p className="text-sm font-semibold">
                        {session && user?.name ? user.name : "Guest account"}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {session && user?.email
                          ? user.email
                          : "Create an account to save your profile"}
                      </p>
                    </div>

                    <div className="py-2">
                      <Link
                        href={`/signup?next=${accountNext}`}
                        onClick={() => setIsAccountMenuOpen(false)}
                        className="block px-4 py-3 text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        Sign-up
                      </Link>
                      <Link
                        href={`/login?next=${accountNext}`}
                        onClick={() => setIsAccountMenuOpen(false)}
                        className="block px-4 py-3 text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        Login
                      </Link>
                      {session ? (
                        <button
                          type="button"
                          onClick={() => {
                            setIsAccountMenuOpen(false);
                            setLogoutCountdown(10);
                            setLogoutDeadline(Date.now() + 10000);
                            setIsLogoutModalOpen(true);
                          }}
                          className="block w-full px-4 py-3 text-left text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          Logout
                        </button>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>

              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20 lg:hidden"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/"
              aria-label="Pristine Gadgets home"
              className="shrink-0"
              onClick={closeMobileMenu}
            >
              <Image
                src="/page/logo.png"
                alt="logo"
                width={38}
                height={38}
                sizes="38px"
                style={{ height: "auto" }}
                className="w-[38px]"
              />
            </Link>

            <SearchBar className="min-w-0 flex-1" compact onNavigate={closeMobileMenu} />

            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {isMobileMenuOpen ? (
            <div className="mt-4 rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur lg:hidden">
              <div className="mb-3 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    router.back();
                    closeMobileMenu();
                  }}
                  disabled={!canGoBack}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-sm font-medium transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ChevronLeft size={18} />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    router.forward();
                    closeMobileMenu();
                  }}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-sm font-medium transition hover:bg-white/15"
                >
                  <ChevronRight size={18} />
                  <span>Forward</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/cart"
                  onClick={closeMobileMenu}
                  className="relative flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-sm font-medium transition hover:bg-white/15"
                >
                  <ShoppingBag size={18} />
                  <span className="mt-2">Cart</span>
                  {cartCount > 0 ? (
                    <span className="absolute right-2 top-2 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                      {cartCount}
                    </span>
                  ) : null}
                </Link>

                <Link
                  href={accountDestination}
                  onClick={closeMobileMenu}
                  className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-sm font-medium transition hover:bg-white/15"
                >
                  <User size={18} />
                  <span className="mt-2">Profile</span>
                </Link>

                <Link
                  href={`/signup?next=${accountNext}`}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-sm font-medium transition hover:bg-white/15"
                >
                  Sign-up
                </Link>

                <Link
                  href={`/login?next=${accountNext}`}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-sm font-medium transition hover:bg-white/15"
                >
                  Login
                </Link>

                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-sm font-medium transition hover:bg-white/15"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
                </button>

                {session ? (
                  <button
                    type="button"
                    onClick={() => {
                      closeMobileMenu();
                      setLogoutCountdown(10);
                      setLogoutDeadline(Date.now() + 10000);
                      setIsLogoutModalOpen(true);
                    }}
                    className="flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-sm font-medium transition hover:bg-white/15"
                  >
                    Logout
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </nav>

      {isLogoutModalOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
              Logging out
            </p>
            <h2 className="mt-3 text-2xl font-bold">User is being logged out</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Please wait while we end this session. You will be redirected shortly.
            </p>
            <div className="mt-6 rounded-2xl bg-slate-100 px-4 py-4 text-center text-3xl font-bold dark:bg-slate-800">
              {logoutCountdown}s
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
