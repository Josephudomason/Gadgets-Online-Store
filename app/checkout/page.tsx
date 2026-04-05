import React from 'react'
import Image from 'next/image'
import { NavBar } from '../nav'
import { Button } from '@/components/ui/button'
import { ChevronDown, Wallet, Wifi } from 'lucide-react'
import { AiFillDollarCircle } from 'react-icons/ai'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaChevronRight } from 'react-icons/fa6'
import Footer from '../footer'
import { AuthGate } from '@/components/auth/auth-gate'

const PaymentPage = () => {
  return (
    <main className='min-h-screen w-full overflow-x-hidden bg-gray-100 dark:bg-slate-950'>
      <NavBar />
      <AuthGate mode="protected">
        <section className='flex justify-center px-4 py-6 sm:px-6 lg:px-10'>
          <div className='w-full max-w-5xl overflow-hidden rounded-2xl bg-white px-5 py-6 shadow-2xl dark:bg-slate-950 sm:px-8 lg:px-10'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-xl font-bold text-gray-900 dark:text-slate-50'>Checkout</h1>
            <ul className='flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-slate-400 sm:gap-3'>
              <li className='flex items-center gap-1'>Home
                <FaChevronRight size={10} />
              </li>
              <li className='flex items-center gap-1'>Product
                <FaChevronRight size={10} />
              </li>
              <li className='flex items-center gap-1'>Description
                <FaChevronRight size={10} />
              </li>
              <li className='flex items-center gap-1'>Cart
                <FaChevronRight size={10} />
              </li>
              <li className='flex items-center'>Checkout</li>
            </ul>
          </div>

          {/*1st tab*/}

          <div className='mt-6 flex flex-col gap-4'>
            <div className='rounded-xl border border-gray-300 px-3 py-3 shadow-sm dark:border-slate-800 sm:px-4'>
              <div className='flex w-full flex-col gap-3 sm:px-2'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-center text-xs'>
                    a
                  </div>
                  <span className='font-bold text-gray-400 dark:text-slate-400'>LOGIN</span>
                  <IoMdCheckmarkCircleOutline />
                </div>

                <div className='flex flex-col gap-3 text-[13px] font-bold sm:flex-row sm:items-center sm:justify-between sm:px-3'>
                  <div className='flex min-w-0 flex-col gap-1 break-words sm:flex-row sm:flex-wrap sm:gap-3'>
                    <span>Joseph Udomason</span>
                    <span>+234 812 8274 808</span>
                  </div>

                  <Button className='w-fit self-start bg-[#6B52F1] text-white'>
                    change
                  </Button>
                </div>
              </div>
            </div>

            {/*2nd tab*/}

            <div className='rounded-xl border border-gray-300 px-3 py-3 shadow-sm dark:border-slate-800 sm:px-4'>
              <div className='flex w-full flex-col gap-3 px-0 sm:px-2'>
                <div className='flex items-center gap-3 text-center'>
                  <div className='flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 text-xs'>
                    b
                  </div>
                  <span className='font-bold text-gray-400 dark:text-slate-400'>SHIPPING ADDRESS</span>
                  <IoMdCheckmarkCircleOutline />
                </div>

                <div className='flex flex-col gap-3 text-[13px] font-bold sm:flex-row sm:items-center sm:justify-between sm:gap-8'>
                  <div className='min-w-0 max-w-2xl break-words'>
                    <span>2b, Prince Adelowo Adedeji Street, Lekki,Lagos, Nigeria</span>
                  </div>

                  <Button className='w-fit self-start bg-[#6B52F1] text-white'>
                    change
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-6 flex w-full flex-col justify-center'>
            <div
              className='flex items-center gap-x-2 rounded-lg bg-gray-100 px-3 py-3 font-bold shadow-sm dark:bg-slate-900 dark:text-slate-100'>
              <AiFillDollarCircle />
              Payment Method
            </div>

            <Button className='mt-3 h-auto w-full justify-between gap-3 whitespace-normal border border-gray-200 bg-white px-4 py-3 text-left text-black shadow-sm hover:bg-gray-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800'>
              <div>
                <Image src="/checkout/master-card.svg" alt="debit-card"
                  width={20}
                  height={20} />
              </div>
              <span className='flex-1'>Debit/Credit card</span>
              <ChevronDown className='shrink-0' />
            </Button>
          </div>

          <div className='mt-6'>
            <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
              <form className='flex w-full max-w-sm min-w-0 flex-col gap-y-3'>
                <label >Enter card number*</label>
                <input type="text" name="Enter card number"
                  placeholder='1234 5678 9012 3456' required
                  className='rounded-md border border-gray-400 px-3 py-2 shadow-sm outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100' />


                <div className='w-full'>
                  <div className='flex justify-between px-1 text-[12px] font-bold'>
                    <p>
                      Valid Date
                    </p>
                    <p>
                      Cvv
                    </p>
                  </div>

                  <div className='flex items-center gap-3'>
                    <div className='flex min-w-0 flex-1 rounded-md border border-gray-400 shadow-sm dark:border-slate-700'>
                      <select name="expYear" required className='min-w-0 w-full bg-transparent px-2 py-2 outline-0 dark:bg-slate-900 dark:text-slate-100'>
                        <option value="">
                          MM
                        </option>
                        <option value="01">
                          01
                        </option>
                        <option value="02">
                          02
                        </option>
                        <option value="03">
                          03
                        </option>
                        <option value="04">
                          04
                        </option>
                        <option value="05">
                          05
                        </option>
                        <option value="06">
                          06
                        </option>
                        <option value="07">
                          07
                        </option>
                        <option value="08">
                          08
                        </option>
                        <option value="09">
                          09
                        </option>
                        <option value="10">
                          10
                        </option>
                        <option value="11">
                          11
                        </option>
                        <option value="12">
                          12
                        </option>
                      </select>

                      <select name="expYear" required className='min-w-0 w-full bg-transparent px-2 py-2 outline-0 dark:bg-slate-900 dark:text-slate-100'>
                        <option value="">
                          YYYY
                        </option>
                        <option value="2026">
                          2026
                        </option>
                        <option value="2027">
                          2027
                        </option>
                        <option value="2028">
                          2028
                        </option>
                        <option value="2029">
                          2029
                        </option>
                        <option value="2030">
                          2030
                        </option>
                        <option value="2031">
                          2031
                        </option>
                      </select>

                    </div>

                    <input type="password" name="Cvv" className='w-16 shrink-0 rounded-md border border-gray-400 px-2 py-2 shadow-sm outline-0 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 sm:w-20' maxLength={3} />
                  </div>


                </div>
                <Button className='w-full bg-[#6B52F1] text-white'>Pay</Button>
              </form>

              <div className='flex w-full max-w-sm min-w-0 flex-col gap-y-5 text-[12px] font-bold'>
                <div className='flex items-center gap-3'>
                  <input type="radio" />
                  <Button
                    className='h-12 w-12 shrink-0 border border-gray-400 bg-white p-0 shadow-sm hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800'>
                    <Wifi
                      className='text-orange-400'
                      size={40}
                      strokeWidth={2.75} />
                  </Button>
                  <p className='min-w-0 break-words'>
                    Internet Banking
                  </p>
                </div>

                <div className='flex items-center gap-3'>
                  <input type="radio" />
                  <Button
                    className='h-12 w-12 shrink-0 border border-gray-400 bg-white p-0 shadow-sm hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800'>
                    <Wallet
                      className='text-green-400'
                      size={40} strokeWidth={2.0} />
                  </Button>
                  <p className='min-w-0 break-words'>
                    Google/Apple Wallet
                  </p>
                </div>

              </div>
            </div>
          </div>
          </div>
        </section >
      </AuthGate>
      <Footer />
    </main>
  )
}

export default PaymentPage
