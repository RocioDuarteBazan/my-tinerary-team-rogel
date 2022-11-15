import React, { useRef, useState, useEffect } from 'react'
import SearchHotels from '../components/SearchHotels'
import HotelsCards from '../components/HotelsCards'
import '../components/SearchCss.css';
import NotFound from "./NotFound"
import axios from 'axios';
import { baseURL } from '../url';


export default function Hotels() {

    let [hotels, setHotels] = useState([])
    let [hotelsFiltered, setHotelsFiltered] = useState([])
    const searchId = useRef()
    const selectId = useRef()

    useEffect(() => {
        axios.get(`${baseURL}api/hotels`)
            .then(response => setHotels(response.data.data))

        axios.get(`${baseURL}api/hotels`)
            .then(response => setHotelsFiltered(response.data.data))
    }, [])


    function filterCheckCards() {

        let orderFiltered = sortHotels()
        let searchFiltered = filterSearch(orderFiltered)
        localStorage.setItem('searchFiltered', JSON.stringify(searchFiltered))
        setHotelsFiltered(searchFiltered)
        console.log(searchFiltered)
        localStorage.setItem('hotelsFiltered', JSON.stringify(searchFiltered))
    }

    function sortHotels() {
        let hotelsSorted
        let order = selectId.current.value
        if (order !== 'default') {
            if (order === 'low') {
                hotelsSorted = hotels.sort((a, b) => a.capacity - b.capacity).map((hotel) => hotel)
            } else if (order === 'high') {
                hotelsSorted = hotels.sort((a, b) => b.capacity - a.capacity).map((hotel) => hotel)
            }
            setHotelsFiltered(hotelsSorted)
            return hotelsSorted
        } else {
            return hotels
        }
    }

    function filterSearch(array) {
        if (searchId.current.value !== '') {
            let hotelsFiltered = array.filter((hotel) => hotel.name.toLowerCase().includes(searchId.current.value.toLowerCase()))
            return hotelsFiltered
        } else {
            return array
        }
    }

    return (
        <div className="">
            <form className="category-container flex column bg-palette2 p-2 gap-2 text-white w-20 h-50" method="get">
                <label>
                    <input className="search-input w-100 input" type="search" name="search" id="search" placeholder="Search" ref={searchId} onChange={filterCheckCards} />
                </label>
                <SearchHotels fx={filterCheckCards} selectId={selectId} />
            </form>

            <div className="cards-container container-fluid w-90 flex wrap gap-2 justify-center align-center">

                {hotelsFiltered.length > 0 ? (
                    hotelsFiltered.map((hotels, index) => {
                        return <HotelsCards hotels={hotels} key={index} id={hotels._id}/>
                    }))
                    : (
                        <NotFound />
                    )}
            </div>
        </div>
    )
}