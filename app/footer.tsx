import React from 'react'
import { FaAmazon, FaInstagramSquare, FaMailBulk, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { FaPhone, FaTwitter } from 'react-icons/fa6';
import { MdContactMail, MdMail, MdMailOutline, MdMarkEmailRead, MdMarkEmailUnread } from 'react-icons/md';

const Footer = () => {
  return (
    <footer>
      <div className='mt-10 mb-15'>
        <div className='flex justify-between mb-5 px-10'>
          <FaAmazon />

          <ul className='flex gap-20 justify-between font-bold lg:mr-120 sm:mr-50 md:mr-70'>
            <li>Shop</li>
            <li>Our day</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='flex justify-between mt-10 px-20 text-sm  font-extralight 3'>
          <ul
            className='flex flex-col gap-2 '>
            <li className='font-bold text-sm'>Home</li>
            <li>Report a product</li>
            <li>About Us</li>
            <li>Faq</li>
          </ul>

          <ul
            className='flex flex-col gap-2'>
            <li
              className='font-bold'
            >Resouces</li>
            <li>Blog</li>
            <li>Terms of services</li>
            <li>Privacy and policy</li>
          </ul>


          <ul
            className='flex flex-col gap-2'>
            <li
              className='font-bold'
            >Contact</li>
            <li
              className='flex'>
              <MdMarkEmailRead />
              PristineGadgets@gmail.com</li>
            <li
              className='flex'><FaPhone />
              +2348128274808</li>
            <li className='flex gap-2.5'>
              <FaTwitterSquare />
              <FaInstagramSquare />
              <FaWhatsappSquare />
            </li>
          </ul>
        </div>
      </div>

    </footer>
  )
}

export default Footer;