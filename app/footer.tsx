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
    <footer className="bg-white dark:text-black">
      <div className="mt-10 mb-15 p-10">
        <div className="flex justify-between mb-5 px-10 cursor-pointer">
          <Link href="/#top" aria-label="Back to top">
            <Image src="/page/logo.png" alt="logo" width={40} height={40} />
          </Link>

          <ul className="flex gap-20 justify-between font-bold lg:mr-120 sm:mr-50 md:mr-70 dark:text-black">
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
        </div>

        <div>
          <Separator className="bg-[#6B52F1]" />
        </div>

        <div className="flex justify-between mt-10 px-20 text-sm  font-extralight 3 ">
          <ul className="flex flex-col gap-2 cursor-pointer dark:text-black">
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

          <ul className="flex flex-col gap-2 cursor-pointer dark:text-black">
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

          <ul className="flex flex-col gap-2 cursor-pointer dark:text-black">
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
