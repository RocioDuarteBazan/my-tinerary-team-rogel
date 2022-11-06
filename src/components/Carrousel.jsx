import React from 'react'
import {useEffect, useState } from 'react'
import "./Carrousel.css";

export default function Carousel() {
  let [numeroAcambiar, setNumeroAcambiar] = useState(1)
  let [imgTotal, setImgTotal] = useState([])

  let [cities, setCities] = useState([])
  let [imgCities, setImgCities] = useState([])

  let [hotels, setHotels] = useState([])
  let [imgHotels, setImgHotels] = useState([])

  let [imgPlus, setImgPlus] = useState([])

  let [id, setId] = useState(0);

  useEffect(() => {
    let idInterval = setInterval(
      () => {
          next();
      },
      5000
    );
    setId(idInterval);
    return clearInterval(id);
  }, [numeroAcambiar]);


  useEffect(() => {
    fetch("./citys.json")
      .then(res => res.json())
      .then(res => setCities(res))

    fetch("./hotels.json")
      .then(res => res.json())
      .then(res => setHotels(res))
  },[])


  setImgCities = cities.map((img, index) => {
    if (imgCities.length < 4) {
      imgCities.push(img.photo)
    }
  })

  setImgHotels = hotels.map((img, index) => {
    if (imgHotels.length < 4) {
      imgHotels.push(img.photo[0])
    }
  })

  setImgPlus = hotels.map((img, index) => {
    if (imgPlus.length < 4) {
      imgPlus.push(img.photo[1])
    }
  })

  if (imgTotal.length < 3) {
    setImgTotal = imgTotal.push(imgCities, imgHotels, imgPlus)
  }

  let next = () => {
    if (numeroAcambiar < imgTotal.length - 1) {
      setNumeroAcambiar(numeroAcambiar + 1)
    }
    else {
      setNumeroAcambiar(0)
    }
    clearInterval(id);
  }

  let back = () => {
    if (numeroAcambiar > 0) {
      setNumeroAcambiar(numeroAcambiar -1)
    }
    else {
      setNumeroAcambiar(imgTotal.length -1)
    }
    clearInterval(id);
  }
  return (
    <>
      <div className='container'>
        <div className='button-div'>
          <button onClick={back} className="button-carrousel"> ◄ </button>
        </div>
        <div className='container-img-carrousel'>
        {
          imgTotal[numeroAcambiar].map(img => {
            return (
              <img src={img} alt="foto" className='img-carrousel' />
            )
          })
        }
        </div>
        <div className='button-div'>
          <button onClick={next} className='button-carrousel'> ► </button>
       </div>
      </div>
    </>
  )
}

