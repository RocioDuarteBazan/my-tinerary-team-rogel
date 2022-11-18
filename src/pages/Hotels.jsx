import React, { useRef, useState, useEffect } from 'react'
import SearchHotels from '../components/SearchHotels'
import HotelsCards from '../components/HotelsCards'
import '../components/SearchCss.css';
import NotFound from "./NotFound"
import axios from 'axios';
import { baseURL } from '../url';


export default function Hotel() {
    let [hotels, setHotels] = useState([]);
    const searchId = useRef();
    const selectId = useRef();

    useEffect(() => {
        axios.get(`${baseURL}api/hotels`)
            .then((response) => setHotels(response.data.data));
    }, []);
    let filterHotels = () => {
        if (selectId.current.value !== "asc" && selectId.current.value !== "desc") {
            selectId.current.value = "asc";
        }
        axios
            .get(
                `${baseURL}api/hotels?order=${selectId.current.value}&name=${searchId.current.value}`
            )
            .then((res) => setHotels(res.data.data));
    };

    return (
        <div className="">
            <form className="category-container flex column bg-palette2 p-2 gap-2 text-white w-20 h-50" method="get">
                <label>
                    <input className="search-input w-100 input" type="search" name="search" id="search" placeholder="Search" ref={searchId} onChange={filterHotels} />
                </label>
                <SearchHotels fx={filterHotels} selectId={selectId} />
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