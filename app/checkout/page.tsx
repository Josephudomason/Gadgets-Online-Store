"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Check, ChevronDown, Wallet, Wifi } from "lucide-react";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";

import Footer from "../footer";
import { NavBar } from "../nav";
import { AuthGate } from "@/components/auth/auth-gate";
import { useAuth } from "@/components/providers/auth-provider";
import {
  EMPTY_NAVIGATION_TRAIL,
  getNavigationTrailSnapshot,
  subscribeToNavigationTrail,
} from "@/lib/navigationTrail";
import { clearCartItems } from "@/lib/cart";
import { Button } from "@/components/ui/button";

const cardTypeOptions = [
  { value: "credit-card", label: "Credit Cards" },
  { value: "debit-card", label: "Debit Card" },
  { value: "master-card", label: "Master Cards" },
] as const;

const CardTypeLogo = ({
  cardType,
}: {
  cardType: (typeof cardTypeOptions)[number]["value"];
}) => {
  if (cardType === "master-card") {
    return (
      <div className="flex h-10 w-14 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-slate-950">
        <Image src="/checkout/master-card.svg" alt="Master card logo" width={34} height={22} sizes="34px" className="h-auto w-auto" />
      </div>
    );
  }

  if (cardType === "credit-card") {
    return (
      <div className="flex h-10 w-14 items-center justify-center rounded-xl bg-linear-to-r from-sky-500 to-indigo-600 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
        Credit
      </div>
    );
  }

  return (
    <div className="flex h-10 w-14 items-center justify-center rounded-xl bg-linear-to-r from-emerald-500 to-teal-600 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
      Debit
    </div>
  );
};

const PaymentPageContent = () => {
  const router = useRouter();
  const { user, updateProfile } = useAuth();
  const trail = useSyncExternalStore(
    subscribeToNavigationTrail,
    getNavigationTrailSnapshot,
    () => EMPTY_NAVIGATION_TRAIL
  );
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber ?? "");
  const [homeAddress, setHomeAddress] = useState(user?.homeAddress ?? "");
  const [message, setMessage] = useState("");
  const [paymentForm, setPaymentForm] = useState({
    cardType: "credit-card" as (typeof cardTypeOptions)[number]["value"],
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentState, setPaymentState] = useState<"loading" | "success">("loading");

  useEffect(() => {
    if (!isPaymentModalOpen || paymentState !== "loading") {
      return;
    }

    const timeout = window.setTimeout(() => {
      clearCartItems();
      setPaymentState("success");
    }, 1800);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isPaymentModalOpen, paymentState]);

  useEffect(() => {
    if (!isPaymentModalOpen || paymentState !== "success") {
      return;
    }

    const timeout = window.setTimeout(() => {
      setPaymentForm({
        cardType: "credit-card",
        cardNumber: "",
        expMonth: "",
        expYear: "",
        cvv: "",
      });
      setMessage("");
      setIsEditingPhone(false);
      setIsEditingAddress(false);
      setIsPaymentModalOpen(false);
      router.push("/");
    }, 1600);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isPaymentModalOpen, paymentState, router]);

  const savePhoneNumber = async () => {
    if (!user) {
      return;
    }

    const result = await updateProfile({
      name: user.name,
      homeAddress: user.homeAddress,
      phoneNumber,
      gender: user.gender,
      age: user.age,
    });

    setMessage(result.message);

    if (result.ok) {
      setIsEditingPhone(false);
    }
  };

  const saveHomeAddress = async () => {
    if (!user) {
      return;
    }

    const result = await updateProfile({
      name: user.name,
      homeAddress,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      age: user.age,
    });

    setMessage(result.message);

    if (result.ok) {
      setIsEditingAddress(false);
    }
  };

  const handlePaymentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    const sanitizedCardNumber = paymentForm.cardNumber.replace(/\s+/g, "");
    const sanitizedCvv = paymentForm.cvv.trim();

    if (
      !sanitizedCardNumber ||
      !paymentForm.expMonth ||
      !paymentForm.expYear ||
      !sanitizedCvv
    ) {
      setMessage("Please complete all payment fields before continuing.");
      return;
    }

    if (sanitizedCardNumber.length < 12) {
      setMessage("Enter a valid card number.");
      return;
    }

    if (sanitizedCvv.length < 3) {
      setMessage("Enter a valid CVV.");
      return;
    }

    setPaymentState("loading");
    setIsPaymentModalOpen(true);
  };

  return (
    <section className="flex justify-center px-4 py-6 sm:px-6 lg:px-10">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white px-5 py-6 shadow-2xl dark:bg-slate-950 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold text-gray-900 dark:text-slate-50">Checkout</h1>
          <ul className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-slate-400 sm:gap-3">
            {trail.length > 0
              ? trail.map((item, index) => (
                  <li key={`${item.href}-${index}`} className="flex items-center gap-1">
                    <span>{item.label}</span>
                    {index < trail.length - 1 ? <FaChevronRight size={10} /> : null}
                  </li>
                ))
              : null}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <div className="rounded-xl border border-gray-300 px-3 py-3 shadow-sm dark:border-slate-800 sm:px-4">
            <div className="flex w-full flex-col gap-3 sm:px-2">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-center text-xs">
                  a
                </div>
                <span className="font-bold text-gray-400 dark:text-slate-400">LOGIN</span>
                <IoMdCheckmarkCircleOutline />
              </div>

              <div className="flex flex-col gap-3 text-[13px] font-bold sm:flex-row sm:items-start sm:justify-between sm:px-3">
                <div className="flex min-w-0 flex-1 flex-col gap-2 break-words">
                  <span>{user?.name ?? "Guest user"}</span>
                  {isEditingPhone ? (
                    <div className="flex flex-col gap-2 sm:max-w-xs">
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        className="rounded-md border border-gray-400 px-3 py-2 text-sm font-medium shadow-sm outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                      />
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          onClick={savePhoneNumber}
                          className="bg-[#6B52F1] text-white"
                        >
                          Save
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setPhoneNumber(user?.phoneNumber ?? "");
                            setIsEditingPhone(false);
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <span>{user?.phoneNumber ?? "No phone number saved"}</span>
                  )}
                </div>

                <Button
                  type="button"
                  onClick={() => {
                    setMessage("");
                    setPhoneNumber(user?.phoneNumber ?? "");
                    setIsEditingPhone(true);
                  }}
                  className="w-fit self-start bg-[#6B52F1] text-white"
                >
                  change
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-300 px-3 py-3 shadow-sm dark:border-slate-800 sm:px-4">
            <div className="flex w-full flex-col gap-3 px-0 sm:px-2">
              <div className="flex items-center gap-3 text-center">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-xs">
                  b
                </div>
                <span className="font-bold text-gray-400 dark:text-slate-400">
                  SHIPPING ADDRESS
                </span>
                <IoMdCheckmarkCircleOutline />
              </div>

              <div className="flex flex-col gap-3 text-[13px] font-bold sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div className="min-w-0 max-w-2xl flex-1 break-words">
                  {isEditingAddress ? (
                    <div className="flex flex-col gap-2">
                      <textarea
                        value={homeAddress}
                        onChange={(event) => setHomeAddress(event.target.value)}
                        rows={3}
                        className="rounded-md border border-gray-400 px-3 py-2 text-sm font-medium shadow-sm outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                      />
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          onClick={saveHomeAddress}
                          className="bg-[#6B52F1] text-white"
                        >
                          Save
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setHomeAddress(user?.homeAddress ?? "");
                            setIsEditingAddress(false);
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <span>{user?.homeAddress ?? "No shipping address saved"}</span>
                  )}
                </div>

                <Button
                  type="button"
                  onClick={() => {
                    setMessage("");
                    setHomeAddress(user?.homeAddress ?? "");
                    setIsEditingAddress(true);
                  }}
                  className="w-fit self-start bg-[#6B52F1] text-white"
                >
                  change
                </Button>
              </div>
            </div>
          </div>

          {message ? (
            <p className="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300">
              {message}
            </p>
          ) : null}
        </div>

        <div className="mt-6 flex w-full flex-col justify-center">
          <div className="flex items-center gap-x-2 rounded-lg bg-gray-100 px-3 py-3 font-bold shadow-sm dark:bg-slate-900 dark:text-slate-100">
            <AiFillDollarCircle />
            Payment Method
          </div>

          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-black shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
            <CardTypeLogo cardType={paymentForm.cardType} />
            <div className="min-w-0 flex-1">
              <label htmlFor="cardType" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Card Type
              </label>
              <div className="relative">
                <select
                  id="cardType"
                  value={paymentForm.cardType}
                  onChange={(event) =>
                    setPaymentForm((current) => ({
                      ...current,
                      cardType: event.target.value as (typeof cardTypeOptions)[number]["value"],
                    }))
                  }
                  className="w-full appearance-none bg-transparent pr-8 text-sm font-medium text-slate-900 outline-none dark:text-slate-100"
                >
                  {cardTypeOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 dark:text-slate-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <form
              className="flex w-full max-w-sm min-w-0 flex-col gap-y-3"
              onSubmit={handlePaymentSubmit}
            >
              <label>Enter card number*</label>
              <input
                type="text"
                name="Enter card number"
                placeholder="1234 5678 9012 3456"
                required
                value={paymentForm.cardNumber}
                onChange={(event) =>
                  setPaymentForm((current) => ({
                    ...current,
                    cardNumber: event.target.value,
                  }))
                }
                className="rounded-md border border-gray-400 px-3 py-2 shadow-sm outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />

              <div className="w-full">
                <div className="flex justify-between px-1 text-[12px] font-bold">
                  <p>Valid Date</p>
                  <p>Cvv</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex min-w-0 flex-1 rounded-md border border-gray-400 shadow-sm dark:border-slate-700">
                    <select
                      name="expMonth"
                      required
                      value={paymentForm.expMonth}
                      onChange={(event) =>
                        setPaymentForm((current) => ({
                          ...current,
                          expMonth: event.target.value,
                        }))
                      }
                      className="min-w-0 w-full bg-transparent px-2 py-2 text-slate-900 outline-0 dark:bg-slate-900 dark:text-slate-100"
                    >
                      <option value="" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">MM</option>
                      <option value="01" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">01</option>
                      <option value="02" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">02</option>
                      <option value="03" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">03</option>
                      <option value="04" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">04</option>
                      <option value="05" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">05</option>
                      <option value="06" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">06</option>
                      <option value="07" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">07</option>
                      <option value="08" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">08</option>
                      <option value="09" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">09</option>
                      <option value="10" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">10</option>
                      <option value="11" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">11</option>
                      <option value="12" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">12</option>
                    </select>

                    <select
                      name="expYear"
                      required
                      value={paymentForm.expYear}
                      onChange={(event) =>
                        setPaymentForm((current) => ({
                          ...current,
                          expYear: event.target.value,
                        }))
                      }
                      className="min-w-0 w-full bg-transparent px-2 py-2 text-slate-900 outline-0 dark:bg-slate-900 dark:text-slate-100"
                    >
                      <option value="" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">YYYY</option>
                      <option value="2026" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">2026</option>
                      <option value="2027" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">2027</option>
                      <option value="2028" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">2028</option>
                      <option value="2029" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">2029</option>
                      <option value="2030" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">2030</option>
                      <option value="2031" className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">2031</option>
                    </select>
                  </div>

                  <input
                    type="password"
                    name="Cvv"
                    value={paymentForm.cvv}
                    onChange={(event) =>
                      setPaymentForm((current) => ({
                        ...current,
                        cvv: event.target.value,
                      }))
                    }
                    className="w-16 shrink-0 rounded-md border border-gray-400 px-2 py-2 shadow-sm outline-0 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 sm:w-20"
                    maxLength={3}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-[#6B52F1] text-white">
                Pay
              </Button>
            </form>

            <div className="flex w-full max-w-sm min-w-0 flex-col gap-y-5 text-[12px] font-bold">
              <div className="flex items-center gap-3">
                <input type="radio" />
                <Button className="h-12 w-12 shrink-0 border border-gray-400 bg-white p-0 shadow-sm hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">
                  <Wifi className="text-orange-400" size={40} strokeWidth={2.75} />
                </Button>
                <p className="min-w-0 break-words">Internet Banking</p>
              </div>

              <div className="flex items-center gap-3">
                <input type="radio" />
                <Button className="h-12 w-12 shrink-0 border border-gray-400 bg-white p-0 shadow-sm hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">
                  <Wallet className="text-green-400" size={40} strokeWidth={2.0} />
                </Button>
                <p className="min-w-0 break-words">Google/Apple Wallet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPaymentModalOpen ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 text-center text-slate-900 shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50">
            {paymentState === "loading" ? (
              <>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-200 border-t-[#6B52F1] animate-spin dark:border-slate-700 dark:border-t-[#8d7bff]" />
                <h2 className="mt-5 text-2xl font-bold">Processing payment</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Please wait while we confirm your payment details.
                </p>
              </>
            ) : (
              <>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <Check className="h-8 w-8" strokeWidth={3} />
                </div>
                <h2 className="mt-5 text-2xl font-bold">Payment successful</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Your payment has been completed successfully.
                </p>
                <p className="mt-6 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Returning to home page...
                </p>
              </>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
};

const PaymentPage = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gray-100 dark:bg-slate-900">
      <NavBar />
      <AuthGate mode="protected">
        <PaymentPageContent />
      </AuthGate>
      <Footer />
    </main>
  );
};

export default PaymentPage;
