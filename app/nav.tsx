"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  User,
  X,
} from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#5a45db] text-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/"
            aria-label="Pristine Gadgets home"
            className="shrink-0"
            onClick={closeMobileMenu}
          >
            <Image src="/page/logo.png" alt="logo" width={42} height={42} />
          </Link>

          <div className="hidden flex-1 items-center justify-center px-4 md:flex">
            <div className="flex w-full max-w-2xl items-center overflow-hidden rounded-xl bg-white/95 shadow-sm">
              <button
                type="button"
                className="hidden h-14 shrink-0 items-center self-stretch bg-black px-5 text-sm font-medium text-white lg:flex"
              >
                All Categories
              </button>

              <div className="flex min-w-0 flex-1 items-center pl-4 pr-2">
                <input
                  type="search"
                  className="h-14 w-full bg-transparent pr-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="Search phones, accessories, brands, and more"
                />
                <Search size={18} className="shrink-0 text-slate-400" />
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center self-stretch bg-black text-white transition hover:bg-slate-800"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">

            <Link
              href="/cart"
              aria-label="Cart"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20 sm:inline-flex"
            >
              <ShoppingBag size={18} />
            </Link>

            <Link
              href="/notification"
              aria-label="Notifications"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20 sm:inline-flex"
            >
              <Bell size={18} />
            </Link>

            <Link
              href="/account"
              className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20 md:inline-flex"
            >
              <User size={16} />
              <span>Account</span>
            </Link>

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

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/"
            aria-label="Pristine Gadgets home"
            className="shrink-0"
            onClick={closeMobileMenu}
          >
            <Image src="/page/logo.png" alt="logo" width={38} height={38} />
          </Link>

          <div className="flex min-w-0 flex-1 items-center overflow-hidden rounded-xl bg-white/95 shadow-sm">
            <button
              type="button"
              className="flex h-12 shrink-0 items-center self-stretch bg-black px-3 text-xs font-medium text-white"
            >
              All Categories
            </button>
            <div className="flex min-w-0 flex-1 items-center pl-4 pr-2">
              <input
                type="search"
                className="h-12 w-full bg-transparent pr-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                placeholder="Search the store"
              />
              <Search size={18} className="shrink-0 text-slate-400" />
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center self-stretch bg-black text-white transition hover:bg-slate-800"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

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
            <div className="grid grid-cols-3 gap-3">
              <Link
                href="/cart"
                onClick={closeMobileMenu}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-sm font-medium transition hover:bg-white/15"
              >
                <ShoppingBag size={18} />
                <span className="mt-2">Cart</span>
              </Link>

              <Link
                href="/notification"
                onClick={closeMobileMenu}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-sm font-medium transition hover:bg-white/15"
              >
                <Bell size={18} />
                <span className="mt-2">Alerts</span>
              </Link>

              <Link
                href="/account"
                onClick={closeMobileMenu}
                className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-sm font-medium transition hover:bg-white/15"
              >
                <User size={18} />
                <span className="mt-2">Account</span>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
