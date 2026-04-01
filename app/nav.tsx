import React from 'react'
import { FaBell, FaSearch, FaShoppingBag } from 'react-icons/fa'
import { FaAmazon, FaArrowDown } from 'react-icons/fa6'
import { MdSettings } from 'react-icons/md'

export const NavBar = () => {
  return (
    <nav className='flex items-center justify-between gap-4 p-4 bg-violet-700 text-white'>
      <div>
        <FaAmazon size={40} />
      </div>

      <div className='flex'>

        <button className='bg-black px-5 py-2 rounded-l-md text-nowrap '>All Catergory</button>

        <input type="search" className='bg-violet-100 text-black px-10 py-2 outline-0' placeholder='Enter Keywords' />
        <FaSearch className='text-black -ml-5 mt-2 text-sm' />


        <button className='bg-black rounded-r-md p-2 '>
          <MdSettings />
        </button>
      </div>

      <div className='flex lg:gap-5'>
        <button>
          <FaShoppingBag size={30} />
        </button>


        <button>
          <FaBell size={30} />
        </button>

        <div>
          |
        </div>


        <div>
          <div className='w-full rounded-full bg-white'>

          </div>

          <FaArrowDown size={20} />
        </div>
      </div>
    </nav>
  )
}
