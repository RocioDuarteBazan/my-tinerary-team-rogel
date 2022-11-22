import React, {useEffect} from 'react'
import NotFound from './NotFound';
import { useDispatch, useSelector } from 'react-redux';
import citiesAction from '../redux/actions/citiesAction'; 
import MyCard from '../components/MyCard';



export default function MyPage() {

  const dispatch = useDispatch();
  const {admiCities} = useSelector(store => store.citiesReducer);
  const {getCitiesAdmi} = citiesAction

  let idAdmi = "636e67769d2ec6759994acc1"

  useEffect(() => {
    dispatch(getCitiesAdmi(idAdmi))
  },[])


  return(
  <div className='m-t-3 flex column justify-center align-center'>
    <div id='container-check' className='flex justify-around w-100 '></div>
    <div className='flex wrap'>
      {admiCities.length > 0 ? (admiCities.map((city) => {
        return <MyCard city={city}  />
      }))
        : (
          <NotFound />
        )}
    </div>
  </div>
  )
}
