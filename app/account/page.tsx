"use client";

import Link from "next/link";

import Footer from "@/app/footer";
import { NavBar } from "@/app/nav";
import { AuthGate } from "@/components/auth/auth-gate";
import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/ui/button";

const AccountPageContent = () => {
  const { user, session, logout } = useAuth();

  return (
    <div className="flex-1 bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <NavBar />
      <main className="mx-auto flex min-h-[calc(100vh-160px)] max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="w-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Account
          </p>
          <h1 className="mt-3 text-3xl font-bold">Welcome back{user?.name ? `, ${user.name}` : ""}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            This is your account space for reviewing your session, continuing to checkout,
            and keeping your store activity organized.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Profile</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                Name: <span className="font-medium text-slate-900 dark:text-slate-100">{user?.name ?? "Guest"}</span>
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Email: <span className="font-medium text-slate-900 dark:text-slate-100">{user?.email ?? "Unavailable"}</span>
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Session</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                Verified: <span className="font-medium text-slate-900 dark:text-slate-100">{user?.verified ? "Yes" : "No"}</span>
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Logged in:{" "}
                <span className="font-medium text-slate-900 dark:text-slate-100">
                  {session?.loggedInAt ? new Date(session.loggedInAt).toLocaleString() : "Unavailable"}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products">
              <Button className="bg-violet-600 text-white hover:bg-violet-700">Browse products</Button>
            </Link>
            <Link href="/cart">
              <Button variant="outline">Open cart</Button>
            </Link>
            <Button
              type="button"
              variant="outline"
              onClick={logout}
            >
              Log out
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const AccountPage = () => {
  return (
    <AuthGate mode="protected">
      <AccountPageContent />
    </AuthGate>
  );
};

export default AccountPage;
