import React, { useEffect } from 'react'
import NotFound from './NotFound';
import { useDispatch, useSelector } from 'react-redux';
import citiesAction from '../redux/actions/citiesAction';
import MyCardItineraries from '../components/MyCardItineraries';


export default function MyTineraries() {

  const dispatch = useDispatch();
  const { userItineraries } = useSelector(store => store.citiesReducer);
  const { getItinerariesUser } = citiesAction

  let idUser = "636e7a12b2ea2713548222bf"

  useEffect(() => {
    dispatch(getItinerariesUser(idUser))
  }, [])

    
  return (
    <div className='m-t-3 flex column justify-center align-center'>
      <div id='container-check' className='flex justify-around w-100 '></div>
      <div className='flex wrap'>
        {userItineraries.length > 0 && (userItineraries.map((tinerary) => {
          return <MyCardItineraries tinerary={tinerary} />
        }))}
      </div>
    </div>
  )
}
