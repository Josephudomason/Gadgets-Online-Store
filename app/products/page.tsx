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
  return (
    <div className="bg-gray-100">
      <NavBar />

      <div className="w-full">
        <img
          src="/page/main.webp"
          alt="15% Sales Discount Banner"
          width={1200}
          height={300}
          style={{ width: "100%", height: "auto" }}
        />
      </div>





      {/*Categories and brands */}

      <section className="w-full bg-gray-100 px-4 md:px-10">
        <div className="-mt-5 flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col rounded-md bg-white shadow-md lg:max-w-lg">
            <div className="flex justify-between w-full px-4 py-2  ">
              <p className="font-bold">shop by category</p>
              <p className="text-violet-600">see more</p>
            </div>
            <div>
              <Categories />
            </div>
          </div>


          <div className="flex w-full flex-col rounded-md bg-white shadow-md lg:max-w-lg">
            <div className="flex justify-between gap-5 px-4 py-2 ">
              <p className="font-bold">shop by brand</p>
              <p className="text-violet-600">see more</p>
            </div>
            <div>
              <Brands />
            </div>
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
              <img
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
              <img
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

          <img
            className="h-55 w-full object-cover object-center sm:h-auto"
            src="/page/advert1.webp"
            alt="15% Sales Discount Bannera"
            width={1200}
            height={300}
            style={{ width: "100%" }}
          />
        </div>
      </section>





      {/*Gadgets 1*/}
      <section className="bg-white">
        <div className="flex justify-between mt-25">
          <h1>Top selling items</h1>
          <h1 className="text-violet-600">see more</h1>
        </div>

        <div className="w-full ">
          <TopSalesSection />
        </div>
      </section>


      {/*Gadgets 2*/}
      <section className="bg-white">
        <div className="flex justify-between mt-25">
          <h1>Recommended for you</h1>
          <h1 className="text-violet-600">see more</h1>
        </div>

        <div className="w-full ">
          <RecommendedSection />
        </div>
      </section>

      {/*Gadgets 3*/}
      <section className="bg-white">
        <div className="flex justify-between mt-25">
          <div className="flex">
            <h1 className="gap-x-2">15% Sales Discount</h1>

            <div className="flex">
              Ends in
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
      <section className="bg-white">
        <div className="flex justify-between mt-25">
          <h1>Apple Iphones </h1>
          <h1 className="text-violet-600">see more</h1>
        </div>

        <div className="w-full ">
          <AppleSection />
        </div>
      </section>



      {/*Samsung Gadgets*/}
      <section className="bg-white">
        <div className="flex justify-between mt-25">
          <h1>Samsung Phones</h1>
          <h1 className="text-violet-600">see more</h1>
        </div>

        <div className="w-full ">
          <SamsungSection />
        </div>
      </section>

      <section>
        <div>
          <img
            src="/page/advert2.webp"
            alt="15% Sales Discount Banner"
            width={1200}
            height={300}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>



      {/* footer */}

      <Footer />

    </div>
  );
}
