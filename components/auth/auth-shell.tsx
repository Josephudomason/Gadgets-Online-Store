"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const authLinks = [
  { href: "/signup", label: "Sign up" },
  { href: "/verify", label: "Verify" },
  { href: "/login", label: "Log in" },
];

const readNextParam = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return new URLSearchParams(window.location.search).get("next");
};

export const AuthShell = ({
  heading,
  description,
  activeHref,
  children,
}: {
  heading: string;
  description: string;
  activeHref: string;
  children: ReactNode;
}) => {
  const next = readNextParam();
  const withNext = (href: string) => (next ? `${href}?next=${encodeURIComponent(next)}` : href);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] bg-[#6B52F1] p-8 text-white shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
            Pristine Gadgets
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight">{heading}</h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={withNext(link.href)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  activeHref === link.href
                    ? "border-white bg-white text-[#6B52F1]"
                    : "border-white/25 bg-white/10 text-white hover:bg-white/20"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/15 bg-white/10 p-5">
            <p className="text-sm font-semibold">What this flow now does</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>New users are sent to sign up first.</li>
              <li>Unverified users are sent to verification.</li>
              <li>Verified users without a session are sent to log in.</li>
              <li>Authenticated users land on their account page.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:p-8">
          {children}
        </div>
      </div>
    </section>
  );
};
