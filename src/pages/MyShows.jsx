import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import hotelsAction from '../redux/actions/hotelsAction';
import MyCardShows from '../components/MyCardShows';


export default function MyShows() {

    const dispatch = useDispatch();
    const { userShows } = useSelector(store => store.hotelsReducer);
    const { getShowUser } = hotelsAction

    let idUser = "636e7868b2ea2713548222b7"

    useEffect(() => {
        dispatch(getShowUser(idUser))
    }, [])


    return (
        <div className='m-t-3 flex column justify-center align-center'>
            <div id='container-check' className='flex justify-around w-100 '></div>
            <div className='flex wrap'>
                {userShows.length > 0 && (userShows.map((show) => {
                    return <MyCardShows show={show} />
                }))}
            </div>
        </div>
    )
}