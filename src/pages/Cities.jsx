import React, { useRef, useState, useEffect } from 'react';
import Checkbox from '../components/Checkbox';
import CityCards from '../components/CityCards';
import '../components/Checkbox.css';
import '../components/SearchCss.css';
import axios from "axios";
import { baseURL } from '../url';

export default function Cities() {

    let [ciudades, setCiudades] = useState([])
    let [ciudadesFiltradas, setCiudadesFiltradas] = useState([])
    const America = useRef()
    const Europe = useRef()
    const Asia = useRef()
    const Oceania = useRef()
    const searchId = useRef()

    const continentes = [ America, Europe, Asia, Oceania ]

    useEffect(() => {
        axios.get(`${baseURL}api/cities`)
            .then(response => setCiudades(response.data.data))

        axios.get(`${baseURL}api/cities`)
            .then(response => setCiudadesFiltradas(response.data.data))
    }, [])

    let checkCiudades = [...new Set(ciudades.map((ciudad) => ciudad.continent))]

    function filterCheckCards(){
       
        let checkFiltered = filterCheck()
        let searchFiltered = filterSearch(checkFiltered)
        setCiudadesFiltradas(searchFiltered)
        localStorage.setItem('ciudadesFiltradas', JSON.stringify(searchFiltered))
    }

    function filterCheck(){
        let checks = [] 
        continentes.filter((continente) => continente.current?.checked).map((continente) => checks.push(continente.current.value))
        let ciudadesFiltradas = ciudades.filter((ciudad) => checks.includes(ciudad.continent))
        console.log(ciudadesFiltradas)

        if(checks.length === 0){
            return ciudades
        }
        return ciudadesFiltradas
    }

    function filterSearch(array){
        if(searchId.current.value !== ''){
            let ciudadesFiltradas = array.filter((ciudad) => ciudad.name.toLowerCase().includes(searchId.current.value.toLowerCase()))
            return ciudadesFiltradas
        }else{
            return array
        }
    }

    return (
        <div className='m-t-3 flex column justify-center align-center'>
            <div id='container-check' className='flex justify-around w-100 '  >
                <div className='flex justify-around w-70 gap-4 wrap'>
                    {checkCiudades.map((continente, index) => {
                        return <Checkbox continent={continente} valor={continente} refId={continentes[index]} fx={filterCheckCards}/>
                    })}
                </div>
                <div>
                    <input type="text" placeholder="Search" className='input' ref={searchId} onChange={filterCheckCards} />
                </div>
            </div>

            <div className='flex wrap'>
                {ciudadesFiltradas.map((city, index) => {
                    return <CityCards city={city} key={index} id={city._id} />
                })}
            </div>
        </div>
    )
}


