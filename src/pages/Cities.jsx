import React, { useRef, useState, useEffect } from 'react';
import axios from "axios";
import { baseURL } from '../url';
import Checkbox from '../components/Checkbox';
import CityCards from '../components/CityCards';
import NotFound from './NotFound';
import '../components/Checkbox.css';
import '../components/SearchCss.css';


export default function Cities() {

    let [ciudades, setCiudades] = useState([])
    let [ciudadesFiltradas, setCiudadesFiltradas] = useState([])
    let [checkboxes, setCheckboxes] = useState([])
    const searchId = useRef()

    useEffect(() => {
        axios.get(`${baseURL}api/cities`)
            .then(response => setCiudades(response.data.data))

        axios.get(`${baseURL}api/cities`)
            .then(response => setCiudadesFiltradas(response.data.data))
    }, [])

    let checkCiudades = [...new Set(ciudades.map((ciudad) => ciudad.continent))]

    function filterCheck(check){
        let checkArray = [];
        if(check.target.checked){
            checkArray = [...checkboxes, check.target.value]
        }else{
            checkArray = checkboxes.filter((checkbox) => checkbox !== check.target.value)
        }
        setCheckboxes(checkArray)
        return checkArray;
    }

    function filterSearch(cityFil){
        let check = filterCheck(cityFil)
        let url = check.map( (continent) => `continent=${continent}`).join('&');

        axios.get(`${baseURL}api/cities?${url}&name=${searchId.current.value}`)
        .then(response => setCiudadesFiltradas(response.data.data))
    }

    return (
        <div className='m-t-3 flex column justify-center align-center'>
            <div id='container-check' className='flex justify-around w-100 '  >
                <div className='flex justify-around w-70 gap-4 wrap'>
                    {checkCiudades.map((continente) => {
                        return <Checkbox continent={continente} valor={continente} fx={filterSearch}/>
                    })}
                </div>
                <div>
                    <input type="text" placeholder="Search" className='input' ref={searchId} onChange={filterSearch} />
                </div>
            </div>

            <div className='flex wrap'>
                {ciudadesFiltradas.length > 0 ? (ciudadesFiltradas.map((city) => {
                    return <CityCards city={city} id={city._id} />
                }))
                : (
                    <NotFound/>
                )}
            </div>
        </div>
    )
}


