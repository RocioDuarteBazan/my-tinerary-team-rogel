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
    <div onClick={scrolltoTop} className='button-scroll'><div className="arrow-up"><img className='img-scroll' src="../img/logotopuno.svg" alt="" /></div></div>
  )
}
