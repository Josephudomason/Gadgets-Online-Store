"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Footer from "@/app/footer";
import { NavBar } from "@/app/nav";
import { AuthGate } from "@/components/auth/auth-gate";
import { AuthShell } from "@/components/auth/auth-shell";
import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/ui/button";

const readNextParam = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return new URLSearchParams(window.location.search).get("next");
};

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const next = readNextParam();
  const destination = next || "/account";
  const signupHref = next ? `/signup?next=${encodeURIComponent(next)}` : "/signup";

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <NavBar />
      <AuthGate mode="login">
        <AuthShell
          heading="Log in to continue"
          description="Verified users can sign in and continue to checkout or their account page. The redirect destination is preserved automatically."
          activeHref="/login"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
              Log in
            </p>
            <h2 className="mt-2 text-2xl font-bold">Welcome back</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Use the same credentials you created during signup.
            </p>
          </div>

          <form
            className="mt-8 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              const result = login(form);
              setMessage(result.message);

              if (result.ok) {
                router.push(destination);
              }
            }}
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-violet-500 dark:border-slate-800 dark:bg-slate-900"
                placeholder="jane@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={form.password}
                onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-violet-500 dark:border-slate-800 dark:bg-slate-900"
                placeholder="Enter your password"
              />
            </div>

            {message ? (
              <p className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                {message}
              </p>
            ) : null}

            <Button type="submit" className="h-12 w-full bg-[#6B52F1] text-white hover:bg-[#5b43dd]">
              Log in
            </Button>
          </form>

          <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
            Need an account first?{" "}
            <Link href={signupHref} className="font-semibold text-violet-600 hover:text-violet-700">
              Create one here
            </Link>
          </p>
        </AuthShell>
      </AuthGate>
      <Footer />
    </main>
  );
};

export default LoginPage;
