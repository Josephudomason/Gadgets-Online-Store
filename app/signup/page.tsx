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

const SignupPage = () => {
  const router = useRouter();
  const { signup } = useAuth();
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    homeAddress: "",
    phoneNumber: "",
    gender: "",
    age: "18",
    email: "",
    password: "",
  });

  const next = readNextParam();
  const destination = next || "/profile";
  const loginHref = next ? `/login?next=${encodeURIComponent(next)}` : "/login";

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <NavBar />
      <AuthGate mode="signup">
        <AuthShell
          heading="Create your store account"
          description="Create your account once and we will save your profile details locally so checkout and account access keep working across the app."
          activeHref="/signup"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
              Sign up
            </p>
            <h2 className="mt-2 text-2xl font-bold">Join the storefront</h2>
          </div>

          <form
            className="mt-8 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              const result = signup(form);
              setMessage(result.message);

              if (result.ok) {
                router.push(destination);
              }
            }}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, name: event.target.value }))
                  }
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-violet-500 dark:border-slate-800 dark:bg-slate-900"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="text-sm font-medium">
                  Phone number
                </label>
                <input
                  id="phoneNumber"
                  required
                  value={form.phoneNumber}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      phoneNumber: event.target.value,
                    }))
                  }
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-violet-500 dark:border-slate-800 dark:bg-slate-900"
                  placeholder="+1 555 123 4567"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="homeAddress" className="text-sm font-medium">
                  Home address
                </label>
                <input
                  id="homeAddress"
                  required
                  value={form.homeAddress}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      homeAddress: event.target.value,
                    }))
                  }
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-violet-500 dark:border-slate-800 dark:bg-slate-900"
                  placeholder="24 Lake View Drive, Boston, MA"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="gender" className="text-sm font-medium">
                  Gender
                </label>
                <select
                  id="gender"
                  required
                  value={form.gender}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, gender: event.target.value }))
                  }
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-violet-500 dark:border-slate-800 dark:bg-slate-900"
                >
                  <option value="">Select gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Non-binary">Non-binary</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="age" className="text-sm font-medium">
                  Age
                </label>
                <input
                  id="age"
                  type="number"
                  min={18}
                  required
                  value={form.age}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, age: event.target.value }))
                  }
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-violet-500 dark:border-slate-800 dark:bg-slate-900"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, email: event.target.value }))
                  }
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
                  minLength={6}
                  value={form.password}
                  onChange={(event) =>
                    setForm((current) => ({ ...current, password: event.target.value }))
                  }
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition focus:border-violet-500 dark:border-slate-800 dark:bg-slate-900"
                  placeholder="Minimum 6 characters"
                />
              </div>
            </div>

            {message ? (
              <p className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                {message}
              </p>
            ) : null}

            <Button type="submit" className="h-12 w-full bg-[#6B52F1] text-white hover:bg-[#5b43dd]">
              Create account
            </Button>
          </form>

          <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link href={loginHref} className="font-semibold text-violet-600 hover:text-violet-700">
              Log in here
            </Link>
          </p>
        </AuthShell>
      </AuthGate>
      <Footer />
    </main>
  );
};

export default SignupPage;
