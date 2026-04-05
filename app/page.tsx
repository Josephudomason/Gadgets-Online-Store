"use client";

import { useState } from "react";
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
import { Button } from "@/components/ui/button";

export default function Home() {
  const [expandedSections, setExpandedSections] = useState({
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

  return (
    <div className="bg-gray-100">
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

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8">
        {/*Categories and brands*/}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex w-full flex-col rounded-lg bg-white p-4 shadow-sm">
            <div className="flex justify-between gap-5">
              <p className="font-bold">shop by category</p>
              <p className="text-[#6B52F1] hover:underline">see more</p>
            </div>
            <div className="flex justify-between">
              <Categories />
            </div>
          </div>

          <div className="flex w-full flex-col rounded-lg bg-white p-4 shadow-sm">
            <div className="flex justify-between gap-5">
              <p className="font-bold">shop by brand</p>
              <p className="text-[#6B52F1] hover:underline">see more</p>
            </div>
            <div className="flex justify-between">
              <Brands />
            </div>
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
              <Button className="rounded bg-[#6B52F1]">Shop Now</Button>
            </div>
          </div>
        </section>

        {/*Top selling items*/}

        <section
          id="top-sales"
          className="rounded-lg bg-white p-5 shadow-sm sm:p-6"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-lg font-semibold text-gray-900">
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

        <section className="rounded-lg bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-lg font-semibold text-gray-900">
              recommended for you
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

        <section className="rounded-lg bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-lg font-semibold text-gray-900">
              discount sales
            </h1>
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

        <section className="rounded-lg bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-lg font-semibold text-gray-900">Apple</h1>
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
        <section className="rounded-lg bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-lg font-semibold text-gray-900">Samsung</h1>
            <button
              type="button"
              onClick={() => toggleSection("samsung")}
              className="font-semibold text-[#6B52F1] hover:underline"
            >
              {expandedSections.samsung ? "show less" : "see more"}
            </button>
          </div>

          <div className="w-full bg-white">
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
