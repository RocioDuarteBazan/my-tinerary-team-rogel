import React from 'react'
import { useEffect, useState } from 'react'
import "./Carrousel.css";
import {useSelector, useDispatch} from 'react-redux';
import citiesAction from '../redux/actions/citiesAction'; 
import hotelsAction from '../redux/actions/hotelsAction'; 


export default function Carousel() {

  const {listCities} = useSelector(store => store.citiesReducer);
  const dispatch = useDispatch();
  const {getCities} = citiesAction

  const {hotels} = useSelector(store => store.hotelsReducer);
  const { getHotels } = hotelsAction

  let [numeroAcambiar, setNumeroAcambiar] = useState(1)
  let [imgTotal, setImgTotal] = useState([])

  let [imgCities, setImgCities] = useState([])

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

    dispatch(getCities())
    dispatch(getHotels())
    
    
  }, [])


  setImgCities = listCities.filter((img, index) => {
    if (imgCities.length < 4) {
      imgCities.push(img.photo)
  }
  })

setImgHotels = hotels.filter((img, index) => {
  if (imgHotels.length < 4) {
    imgHotels.push(img.photo[0])
  }
})

setImgPlus = hotels.filter((img, index) => {
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
    setNumeroAcambiar(numeroAcambiar - 1)
  }
  else {
    setNumeroAcambiar(imgTotal.length - 1)
  }
  clearInterval(id);
}
return (
  <>
    <div className='container-carrousel'>
      <div className='button-div'>
        <button onClick={back} className="button-carrousel"><img className='img-botton-carrousel' src="../img/botton-back.png" alt="button"  /></button>
      </div>
      <div className='container-img-carrousel'>
        {
          imgTotal[numeroAcambiar].map((img , index)  => {
            return (
              <img src={img} alt="foto" className='img-carrousel' key={index}/>
            )
          })
        }
      </div>
      <div className='button-div'>
        <button onClick={next} className='button-carrousel'> <img className='img-botton-carrousel' src="../img/botton-next.png" alt="button" /></button>
      </div>
    </div>
  </>
)
}
