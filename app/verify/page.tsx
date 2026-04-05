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

const VerifyPage = () => {
  const router = useRouter();
  const { user, verificationCode, verify } = useAuth();
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const next = readNextParam();
  const loginHref = next ? `/login?next=${encodeURIComponent(next)}` : "/login";

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <NavBar />
      <AuthGate mode="verify">
        <AuthShell
          heading="Verify your account"
          description="We added a browser-only verification step so your sign-up, login, and protected route flow work before a real backend is connected."
          activeHref="/verify"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
              Verification
            </p>
            <h2 className="mt-2 text-2xl font-bold">Confirm your email</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Enter the demo verification code below to activate the account for{" "}
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                {user?.email}
              </span>.
            </p>
          </div>

          <div className="mt-6 rounded-3xl border border-dashed border-violet-300 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/30">
            <p className="text-sm font-medium text-violet-700 dark:text-violet-300">
              Demo verification code
            </p>
            <p className="mt-2 text-3xl font-bold tracking-[0.45em] text-violet-700 dark:text-violet-200">
              {verificationCode}
            </p>
          </div>

          <form
            className="mt-8 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              const result = verify(code);
              setMessage(result.message);

              if (result.ok) {
                router.push(loginHref);
              }
            }}
          >
            <div className="space-y-2">
              <label htmlFor="code" className="text-sm font-medium">
                Verification code
              </label>
              <input
                id="code"
                required
                value={code}
                onChange={(event) => setCode(event.target.value)}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 tracking-[0.35em] outline-none transition focus:border-violet-500 dark:border-slate-800 dark:bg-slate-900"
                placeholder="123456"
              />
            </div>

            {message ? (
              <p className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                {message}
              </p>
            ) : null}

            <Button type="submit" className="h-12 w-full bg-[#6B52F1] text-white hover:bg-[#5b43dd]">
              Complete verification
            </Button>
          </form>

          <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
            Verified already?{" "}
            <Link href={loginHref} className="font-semibold text-violet-600 hover:text-violet-700">
              Continue to login
            </Link>
          </p>
        </AuthShell>
      </AuthGate>
      <Footer />
    </main>
  );
};

export default VerifyPage;
