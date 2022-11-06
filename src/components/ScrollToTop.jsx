import React from 'react'
import "./Scroll.css"

export default function ScrolltoTop() {
    const scrolltoTop = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
  return (
    <div onClick={scrolltoTop} className='button-scroll'><div class="arrow-up"></div></div>
  )
}
