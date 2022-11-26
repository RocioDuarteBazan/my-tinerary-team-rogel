import React, { useRef, useEffect, useState } from 'react'
import SearchHotels from '../components/SearchHotels'
import HotelsCards from '../components/HotelsCards'
import '../components/SearchCss.css';
import NotFound from "./NotFound"
import { useSelector, useDispatch } from 'react-redux';
import hotelsAction from '../redux/actions/hotelsAction';

export default function Hotel() {
    const dispatch = useDispatch()
    let { hotels, name, order } = useSelector(state => state.hotelsReducer)
    const { getHotels, filterHotels } = hotelsAction

    let [time, setTime] = useState(true)

    if (time) {
        hotels = null
    }

    const searchId = useRef();
    const selectId = useRef();

    useEffect(() => {

        setTimeout(() => {
            setTime(false)
        }, 1000);

        if (name || order) {
            let data = {
                name: name,
                order: order
            }
            dispatch(filterHotels(data))
            searchId.current.value = name
            selectId.current.value = order
        } else {
            dispatch(getHotels())
        }
    }, []);

    let filterHotelsOne = () => {
        if (selectId.current.value !== "asc" && selectId.current.value !== "desc") {
            selectId.current.value = "asc";
        }

        let data = {
            name: searchId.current.value,
            order: selectId.current.value
        }

        dispatch(filterHotels(data))
    };

    return (
        <div className="">
            <form className="category-container flex column bg-palette2 p-2 gap-2 text-white w-20 h-50" method="get">
                <label>
                    <input className="search-input w-100 input" type="search" name="search" id="search" placeholder="Search" ref={searchId} onChange={filterHotelsOne} />
                </label>
                <SearchHotels fx={filterHotelsOne} selectId={selectId} />
            </form>

            <div className="cards-container container-fluid w-90 flex wrap gap-2 justify-center align-center">

                {
                    hotels !== null ?

                        hotels.length > 0 ? hotels.map((hotels, index) => {
                            return <HotelsCards hotels={hotels} key={index} id={hotels._id} />
                        }) : <NotFound />

                        :
                        <div className='d-flex flex-column align-items-center'>
                            <img src="https://media.giphy.com/media/twn3qOrkv9KBGgn0bc/giphy.gif" alt="error" className="gif img-fluid " width="385px" />
                        </div>
                }

            </div>
        </div>
    )
}