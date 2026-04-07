"use client";

import { useState } from "react";
import Link from "next/link";
import { User } from "lucide-react";

import Footer from "@/app/footer";
import { NavBar } from "@/app/nav";
import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/ui/button";

export const ProfilePageContent = () => {
  const { user, session, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: user?.name ?? "",
    homeAddress: user?.homeAddress ?? "",
    phoneNumber: user?.phoneNumber ?? "",
    gender: user?.gender ?? "",
    age: user?.age || "18",
  });

  return (
    <div className="flex-1 bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <NavBar />
      <main className="mx-auto flex min-h-[calc(100vh-160px)] max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="w-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Profile
          </p>
          <h1 className="mt-3 text-3xl font-bold">
            Welcome back{user?.name ? `, ${user.name}` : ""}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            Review and update the details saved from sign-up registration. These
            details are reused when you continue through checkout.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
            <div className="rounded-[1.75rem] border border-slate-200 bg-linear-to-br from-violet-100 via-white to-fuchsia-100 p-6 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-100">
                <User size={48} />
              </div>
              <h2 className="mt-5 text-xl font-bold">{user?.name ?? "Guest user"}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {user?.email ?? "No email yet"}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                  Personal information
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    if (isEditing) {
                      setIsEditing(false);
                    } else {
                      setForm({
                        name: user?.name ?? "",
                        homeAddress: user?.homeAddress ?? "",
                        phoneNumber: user?.phoneNumber ?? "",
                        gender: user?.gender ?? "",
                        age: user?.age || "18",
                      });
                      setIsEditing(true);
                    }
                    setMessage("");
                  }}
                >
                  {isEditing ? "Cancel" : "Edit profile"}
                </Button>
              </div>

              <form
                className="mt-6 grid gap-4 md:grid-cols-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  const result = updateProfile(form);
                  setMessage(result.message);

                  if (result.ok) {
                    setIsEditing(false);
                  }
                }}
              >
                {[
                  { id: "name", label: "Name", value: form.name, type: "text" },
                  {
                    id: "homeAddress",
                    label: "Home address",
                    value: form.homeAddress,
                    type: "text",
                    span: true,
                  },
                  {
                    id: "phoneNumber",
                    label: "Phone number",
                    value: form.phoneNumber,
                    type: "text",
                  },
                  { id: "age", label: "Age", value: form.age, type: "number" },
                ].map((field) => (
                  <label
                    key={field.id}
                    htmlFor={field.id}
                    className={field.span ? "space-y-2 md:col-span-2" : "space-y-2"}
                  >
                    <span className="text-sm font-medium">{field.label}</span>
                    <input
                      id={field.id}
                      type={field.type}
                      min={field.id === "age" ? 18 : undefined}
                      value={
                        isEditing
                          ? field.value
                          : field.id === "name"
                            ? user?.name ?? ""
                            : field.id === "homeAddress"
                              ? user?.homeAddress ?? ""
                              : field.id === "phoneNumber"
                                ? user?.phoneNumber ?? ""
                                : user?.age ?? "18"
                      }
                      disabled={!isEditing}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          [field.id]: event.target.value,
                        }))
                      }
                      className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition focus:border-violet-500 disabled:cursor-default disabled:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:disabled:bg-slate-900/60"
                    />
                  </label>
                ))}

                <label className="space-y-2">
                  <span className="text-sm font-medium">Gender</span>
                  <select
                    value={isEditing ? form.gender : user?.gender ?? ""}
                    disabled={!isEditing}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        gender: event.target.value,
                      }))
                    }
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition focus:border-violet-500 disabled:cursor-default disabled:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:disabled:bg-slate-900/60"
                  >
                    <option value="" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Select gender</option>
                    <option value="Female" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Female</option>
                    <option value="Male" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Male</option>
                    <option value="Non-binary" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">Non-binary</option>
                  </select>
                </label>

                <div className="space-y-2">
                  <span className="text-sm font-medium">Email address</span>
                  <div className="flex h-12 items-center rounded-2xl border border-slate-200 bg-slate-100 px-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                    {user?.email ?? "Unavailable"}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-medium">Signed in at</span>
                  <div className="flex h-12 items-center rounded-2xl border border-slate-200 bg-slate-100 px-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                    {session?.loggedInAt
                      ? new Date(session.loggedInAt).toLocaleString()
                      : "Unavailable"}
                  </div>
                </div>

                {message ? (
                  <p className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-300 md:col-span-2">
                    {message}
                  </p>
                ) : null}

                {isEditing ? (
                  <div className="md:col-span-2">
                    <Button
                      type="submit"
                      className="bg-violet-600 text-white hover:bg-violet-700"
                    >
                      Save profile
                    </Button>
                  </div>
                ) : null}
              </form>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products">
              <Button className="bg-violet-600 text-white hover:bg-violet-700">
                Browse products
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="outline">Open cart</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
