import React from 'react'
import AutoToTop from '../components/AutoToTop'
import Navbar from '../components/Navbar'
import Footer from  '../components/Footer'

function layout(props) {
  return (
    <>
        <AutoToTop />
        <Navbar />
        <div className='main-full'>
                {props.children}
        </div>
        <Footer />
    </>
  )
}

export default layout