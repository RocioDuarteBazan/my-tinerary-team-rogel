import React, { useRef, useEffect } from 'react'
import SearchHotels from '../components/SearchHotels'
import HotelsCards from '../components/HotelsCards'
import '../components/SearchCss.css';
import NotFound from "./NotFound"
import { useSelector, useDispatch } from 'react-redux';
import hotelsAction from '../redux/actions/hotelsAction';

export default function Hotel() {
    const dispatch = useDispatch()
    const { hotels, name, order } = useSelector(state => state.hotelsReducer)
    const { getHotels, filterHotels } = hotelsAction

    const searchId = useRef();
    const selectId = useRef();

    useEffect(() => {
        if (name || order) {
            let data = {
                name,
                order
            }
            dispatch(filterHotels(data))
            searchId.current.value = name
            selectId.current.value = order
        }
        dispatch(getHotels())
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
        /* axios
            .get(
                `${baseURL}api/hotels?order=${selectId.current.value}&name=${searchId.current.value}`
            )
            .then((res) => setHotels(res.data.data)); */
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

                {hotels.length > 0 ? (
                    hotels.map((hotels, index) => {
                        return <HotelsCards hotels={hotels} key={index} id={hotels._id} />
                    }))
                    : (
                        <NotFound />
                    )}
            </div>
        </div>
    )
}