"use client";

import Image from "next/image";
import { useState } from "react";
import { NavBar } from "../nav";
import Footer from "../footer";

import Categories from "@/components/categories";
import Brands from "@/components/brands";
import { Button } from "@/components/ui/button";
import TopSalesSection from "@/components/products";
import RecommendedSection from "@/components/recommended";
import SalesDiscountSection from "@/components/salesDiscount";
import AppleSection from "@/components/apple";
import SamsungSection from "@/components/samsung";

export default function Home() {
  const [expandedSections, setExpandedSections] = useState({
    categories: false,
    brands: false,
  });

  return (
    <div className="bg-gray-100 dark:bg-slate-950 dark:text-slate-50">
      <NavBar />

      <div className="w-full">
        <Image
          src="/page/main.webp"
          alt="15% Sales Discount Banner"
          width={1200}
          height={300}
          className="h-auto w-full"
        />
      </div>





      {/*Categories and brands */}

      <section className="w-full bg-gray-100 px-4 dark:bg-slate-950 md:px-10">
        <div className="-mt-5 flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col rounded-md bg-white shadow-md dark:bg-slate-900 lg:max-w-lg">
            <div className="flex justify-between w-full px-4 py-2  ">
              <p className="font-bold">shop by category</p>
              <button
                type="button"
                onClick={() =>
                  setExpandedSections((prev) => ({
                    ...prev,
                    categories: !prev.categories,
                  }))
                }
                className="text-violet-600"
              >
                {expandedSections.categories ? "show less" : "see more"}
              </button>
            </div>
            <Categories
              expanded={expandedSections.categories}
              onExpandedChange={(expanded) =>
                setExpandedSections((prev) => ({ ...prev, categories: expanded }))
              }
              showToggleButton={false}
            />
          </div>


          <div className="flex w-full flex-col rounded-md bg-white shadow-md dark:bg-slate-900 lg:max-w-lg">
            <div className="flex justify-between gap-5 px-4 py-2 ">
              <p className="font-bold">shop by brand</p>
              <button
                type="button"
                onClick={() =>
                  setExpandedSections((prev) => ({
                    ...prev,
                    brands: !prev.brands,
                  }))
                }
                className="text-violet-600"
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
      </section>



      {/*Advert 1*/}

      <section className="px-4 py-6 md:px-10">
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute inset-y-0 left-0 z-10 flex w-[74%] flex-col justify-center px-5 py-6 text-white sm:left-6 sm:top-1/2 sm:block sm:w-[55%] sm:-translate-y-1/2 sm:px-0 sm:py-0 md:left-10 md:w-[42%]">
            <div className="font-serif text-xl font-bold leading-tight sm:text-xl md:text-2xl">
              <p>15% Sales</p>
              <p>Discount.</p>
              <Image
                src="/page/scratch.webp"
                alt="scratch"
                width={100}
                height={30}
                className="mt-1 w-20 sm:w-20 md:w-24"
              />
            </div>

            <div className="mt-2 text-xs font-mono sm:text-xs md:text-sm">
              <p>Enjoy 15% discount on</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono sm:text-xs md:text-sm">
              <p>our clearance sales...</p>
              <Image
                src="/page/smiley.webp"
                alt="smiley"
                width={100}
                height={30}
                className="w-10 sm:w-10 md:w-12"
              />
            </div>

            <Button size={"lg"} className="mt-2 h-auto bg-[#6B52F1] px-3 py-2 text-[10px] sm:mt-3 sm:px-4 sm:text-xs md:text-sm">
              Shop Now
            </Button>
          </div>

          <Image
            className="h-55 w-full object-cover object-center sm:h-auto"
            src="/page/advert1.webp"
            alt="15% Sales Discount Bannera"
            width={1200}
            height={300}
          />
        </div>
      </section>





      {/*Gadgets 1*/}
      <section className="bg-white dark:bg-slate-900">
        <div className="flex justify-between mt-25">
          <h1 className="font-bold text-gray-900 dark:text-white">Top selling items</h1>
          <h1 className="text-violet-600">see more</h1>
        </div>

        <div className="w-full ">
          <TopSalesSection />
        </div>
      </section>


      {/*Gadgets 2*/}
      <section className="bg-white dark:bg-slate-900">
        <div className="flex justify-between mt-25">
          <h1 className="font-bold text-gray-900 dark:text-white">Recommended for you</h1>
          <h1 className="text-violet-600">see more</h1>
        </div>

        <div className="w-full ">
          <RecommendedSection />
        </div>
      </section>

      {/*Gadgets 3*/}
      <section className="bg-white dark:bg-slate-900">
        <div className="flex justify-between mt-25">
          <div className="flex">
            <h1 className="gap-x-2 font-bold text-gray-900 dark:text-white">15% Sales Discount</h1>

            <div className="flex">
              <span className="font-bold text-gray-900 dark:text-white">Ends in</span>
              <div className="bg-red-500">

                <span>
                  02
                </span>
                <span>
                  34</span>
                <span>
                  50
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-violet-600">see more</h1>
        </div>

        <div className="w-full ">
          <SalesDiscountSection />
        </div>
      </section>



      {/*Iphone Gadgets*/}
      <section className="bg-white dark:bg-slate-900">
        <div className="flex justify-between mt-25">
          <h1 className="font-bold text-gray-900 dark:text-white">Apple Iphones </h1>
          <h1 className="text-violet-600">see more</h1>
        </div>

        <div className="w-full ">
          <AppleSection />
        </div>
      </section>



      {/*Samsung Gadgets*/}
      <section className="bg-white dark:bg-slate-900">
        <div className="flex justify-between mt-25">
          <h1 className="font-bold text-gray-900 dark:text-white">Samsung Phones</h1>
          <h1 className="text-violet-600">see more</h1>
        </div>

        <div className="w-full ">
          <SamsungSection />
        </div>
      </section>

      <section>
        <div>
          <Image
            src="/page/advert2.webp"
            alt="15% Sales Discount Banner"
            width={1200}
            height={300}
            className="h-auto w-full"
          />
        </div>
      </section>



      {/* footer */}

      <Footer />

    </div>
  );
}
