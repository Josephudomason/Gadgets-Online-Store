"use client";

import { useEffect, useState } from "react";
import { NavBar } from "./nav";
import Footer from "./footer";
import Categories from "@/components/categories";
import Brands from "@/components/brands";
import TopSalesSection from "@/components/products";
import RecommendedSection from "@/components/recommended";
import SalesDiscountSection from "@/components/salesDiscount";
import AppleSection from "@/components/apple";
import SamsungSection from "@/components/samsung";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { theme } = useTheme();
  const [countdown, setCountdown] = useState({
    minutes: "15",
    seconds: "00",
    milliseconds: "000",
  });
  const [expandedSections, setExpandedSections] = useState({
    categories: false,
    brands: false,
    topSales: false,
    recommended: false,
    discount: false,
    apple: false,
    samsung: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    const durationMs = 15 * 60 * 1000;
    let targetTime = Date.now() + durationMs;

    const updateCountdown = () => {
      const remaining = Math.max(targetTime - Date.now(), 0);

      if (remaining === 0) {
        targetTime = Date.now() + durationMs;
      }

      const safeRemaining = Math.max(targetTime - Date.now(), 0);
      const minutes = Math.floor(safeRemaining / 60000);
      const seconds = Math.floor((safeRemaining % 60000) / 1000);
      const milliseconds = safeRemaining % 1000;

      setCountdown({
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
        milliseconds: String(milliseconds).padStart(3, "0"),
      });
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 50);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div id="top" className={theme === "dark" ? "bg-black" : "bg-gray-100"}>
      <NavBar />

      {/*Banner*/}

      <div className="w-full">
        <Image
          src="/page/main.webp"
          alt="15% Sales Discount Banner"
          width={1200}
          height={300}
          className="h-auto w-full"
        />
      </div>

      <main
        className={`mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 ${theme === "dark" ? "bg-black" : "bg-gray-100"
          }`}
      >
        {/*Categories and brands*/}

        <div className="-mt-15 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex w-full flex-col rounded-lg bg-white p-4 shadow-sm dark:bg-slate-900">
            <div className="mb-3 flex justify-between gap-5">
              <p className="font-bold">shop by category</p>
              <button
                type="button"
                onClick={() => toggleSection("categories")}
                className="text-[#6B52F1] hover:underline"
              >
                {expandedSections.categories ? "show less" : "see more"}
              </button>
            </div>
            <Categories
              expanded={expandedSections.categories}
              onExpandedChange={(expanded) =>
                setExpandedSections((prev) => ({
                  ...prev,
                  categories: expanded,
                }))
              }
              showToggleButton={false}
            />
          </div>

          <div className="flex w-full flex-col rounded-lg bg-white p-4 shadow-sm dark:bg-slate-900">
            <div className="mb-3 flex justify-between gap-5">
              <p className="font-bold">shop by brand</p>
              <button
                type="button"
                onClick={() => toggleSection("brands")}
                className="text-[#6B52F1] hover:underline"
              >
                {expandedSections.brands ? "show less" : "see more"}
              </button>
            </div>
            <Brands
              expanded={expandedSections.brands}
              onExpandedChange={(expanded) =>
                setExpandedSections((prev) => ({ ...prev, brands: expanded }))
              }
              showToggleButton={false}
            />
          </div>
        </div>

        {/*Advert 1*/}

        <section className="relative isolate overflow-hidden rounded-2xl text-white shadow-sm">
          <Image
            src="/page/advert1.webp"
            alt="15% Sales Discount Banner"
            width={1200}
            height={420}
            className="h-[320px] w-full object-cover md:h-[380px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
          <div className="absolute inset-0 flex max-w-md flex-col justify-center gap-4 px-6 py-8 sm:px-10">
            <div className="flex flex-col font-serif text-3xl font-extralight leading-tight sm:text-4xl">
              <span>15% Sales</span>
              <span className="relative w-fit">Discount.</span>
            </div>
            <span className="pointer-events-none">
              <Image
                src="/page/scratch.webp"
                alt="scratch"
                width={50}
                height={20}
              />
            </span>
            <div className="space-y-1 text-sm sm:text-base">
              <p>Enjoy 15% discount on</p>
              <p>Our clearance sales</p>
              <span>
                <Image
                  src="/page/smiley.webp"
                  alt="smiley"
                  width={50}
                  height={20}
                />
              </span>
            </div>
            <div>
              <Button asChild className="rounded bg-[#6B52F1]">
                <Link href="/#recommended">Shop Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/*Top selling items*/}

        <section
          id="top-sales"
          className="rounded-lg bg-white p-5 shadow-sm dark:bg-slate-900 sm:p-6"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Top selling items
            </h1>
            <button
              type="button"
              onClick={() => toggleSection("topSales")}
              className="font-semibold text-[#6B52F1] hover:underline"
            >
              {expandedSections.topSales ? "show less" : "see more"}
            </button>
          </div>

          <div className="w-full">
            <TopSalesSection
              expanded={expandedSections.topSales}
              onExpandedChange={(expanded) =>
                setExpandedSections((prev) => ({ ...prev, topSales: expanded }))
              }
              showToggleButton={false}
            />
          </div>
        </section>

        {/*  recommended for you */}

        <section
          id="recommended"
          className="rounded-lg bg-white p-5 shadow-sm dark:bg-slate-900 sm:p-6"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Recommended for you
            </h1>
            <button
              type="button"
              onClick={() => toggleSection("recommended")}
              className="font-semibold text-[#6B52F1] hover:underline"
            >
              {expandedSections.recommended ? "show less" : "see more"}
            </button>
          </div>

          <div className="w-full">
            <RecommendedSection
              expanded={expandedSections.recommended}
              onExpandedChange={(expanded) =>
                setExpandedSections((prev) => ({
                  ...prev,
                  recommended: expanded,
                }))
              }
              showToggleButton={false}
            />
          </div>
        </section>

        {/* 15% Sales Discount */}

        <section className="rounded-lg bg-white p-5 shadow-sm dark:bg-slate-900 sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                15% Sales Discount
              </h1>
              <span className="text-sm text-gray-600 dark:text-slate-300">
                Ends in:
              </span>
              <span className="rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white">
                {countdown.minutes}
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                :
              </span>
              <span className="rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white">
                {countdown.seconds}
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                :
              </span>
              <span className="rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white">
                {countdown.milliseconds}
              </span>
            </div>
            <button
              type="button"
              onClick={() => toggleSection("discount")}
              className="font-semibold text-[#6B52F1] hover:underline"
            >
              {expandedSections.discount ? "show less" : "see more"}
            </button>
          </div>

          <div className="w-full">
            <SalesDiscountSection
              expanded={expandedSections.discount}
              onExpandedChange={(expanded) =>
                setExpandedSections((prev) => ({ ...prev, discount: expanded }))
              }
              showToggleButton={false}
            />
          </div>
        </section>

        {/* Apple Iphones */}

        <section className="rounded-lg bg-white p-5 shadow-sm dark:bg-slate-900 sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Apple Iphones
            </h1>
            <button
              type="button"
              onClick={() => toggleSection("apple")}
              className="font-semibold text-[#6B52F1] hover:underline"
            >
              {expandedSections.apple ? "show less" : "see more"}
            </button>
          </div>

          <div className="w-full">
            <AppleSection
              expanded={expandedSections.apple}
              onExpandedChange={(expanded) =>
                setExpandedSections((prev) => ({ ...prev, apple: expanded }))
              }
              showToggleButton={false}
            />
          </div>
        </section>

        {/* Samsung Phones */}
        <section className="rounded-lg bg-white p-5 shadow-sm dark:bg-slate-900 sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Samsung Phones
            </h1>
            <button
              type="button"
              onClick={() => toggleSection("samsung")}
              className="font-semibold text-[#6B52F1] hover:underline"
            >
              {expandedSections.samsung ? "show less" : "see more"}
            </button>
          </div>

          <div className="w-full bg-white dark:bg-slate-900">
            <SamsungSection
              expanded={expandedSections.samsung}
              onExpandedChange={(expanded) =>
                setExpandedSections((prev) => ({ ...prev, samsung: expanded }))
              }
              showToggleButton={false}
            />
          </div>
        </section>

        {/* Advert 2 */}

        <div className="overflow-hidden rounded-2xl shadow-sm">
          <Image
            src="/page/advert2.webp"
            alt="15% Sales Discount Banner"
            width={1200}
            height={300}
            className="h-auto w-full object-cover"
          />
        </div>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}
