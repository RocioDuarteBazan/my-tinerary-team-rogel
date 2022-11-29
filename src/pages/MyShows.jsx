import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import hotelsAction from '../redux/actions/hotelsAction';
import MyCardShows from '../components/MyCardShows';


export default function MyShows() {

    const dispatch = useDispatch();
    const { userShows } = useSelector(store => store.hotelsReducer);
    const { getShowUser } = hotelsAction
    const { id } = useSelector(store => store.userReducer)

    useEffect(() => {
        dispatch(getShowUser(id))
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