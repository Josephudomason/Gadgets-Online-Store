import React from 'react'
import { NavBar } from '../nav'
import Footer from '../footer'

const page = () => {
  return (
    <main >
      <NavBar />
      <section className='min-h-screen'>
        <h2>Welcome to the Info Page</h2>
      </section>
      <Footer />
    </main>
  )
}

export default page