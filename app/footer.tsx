import React from "react";
import Link from "next/link";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto mt-10 max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <Link href="/#top" aria-label="Back to top" className="lg:justify-self-start">
            <Image
              src="/page/logo.png"
              alt="logo"
              width={40}
              height={40}
              sizes="40px"
              style={{ height: "auto" }}
              className="w-[40px]"
            />
          </Link>

          <ul className="flex flex-col gap-4 font-bold sm:flex-row sm:items-center sm:justify-between sm:gap-10 lg:justify-self-center">
            <li>
              <Link href="/#top-sales">Shop</Link>
            </li>
            <li>
              <Link href="/our-story">Our story</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>

          <div className="hidden lg:block" />
        </div>

        <div>
          <Separator className="bg-[#6B52F1]" />
        </div>

        <div className="mt-10 grid gap-8 text-sm font-extralight sm:grid-cols-2 lg:grid-cols-3">
          <ul className="flex cursor-pointer flex-col gap-2">
            <li className="font-bold text-sm">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/report-product">Report a product</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/faq">Faq</Link>
            </li>
          </ul>

          <ul className="flex cursor-pointer flex-col gap-2">
            <li className="font-bold">Resouces</li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Terms of services</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy and policy</Link>
            </li>
          </ul>

          <ul className="flex cursor-pointer flex-col gap-2">
            <li className="font-bold">Contact</li>
            <li className="flex">
              <MdMarkEmailRead />
              PristineGadgets@gmail.com
            </li>
            <li className="flex">
              <FaPhone />
              +2348128274808
            </li>
            <li className="flex gap-2.5">
              <FaTwitterSquare className="text-sky-500" />
              <FaInstagramSquare className="text-pink-500" />
              <FaWhatsappSquare className="text-green-500" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
