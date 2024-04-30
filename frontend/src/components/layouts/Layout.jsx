import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar />
    <div className='sm:pt-20 lg:pt-8'>
        <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default Layout