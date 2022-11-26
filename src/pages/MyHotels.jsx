import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HotelsCardsAdmin from '../components/HotelsCardsAdmin';
import hotelsAction from '../redux/actions/hotelsAction';
import NotFound from './NotFound';


export default function MyHotels() {


    const dispatch = useDispatch();
    const { hotelsAdmin } = useSelector(store => store.hotelsReducer);
    const { getHotelsAdmi } = hotelsAction

    let idAdmi = "636e67769d2ec6759994acc1"

    useEffect(() => {
        dispatch(getHotelsAdmi(idAdmi))
    }, [])

    return (
        <div className="">
            <div className="cards-container container-fluid w-90 flex wrap gap-2 justify-center align-center">
                {hotelsAdmin.length > 0 && (
                    hotelsAdmin.map((hotels, index) => {
                        return <HotelsCardsAdmin hotels={hotels} key={index} id={hotels._id} idAdmi={idAdmi} />
                    }))
                }
            </div>
        </div>
    )
}
