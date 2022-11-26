import React, { useRef, useState, useEffect } from 'react';
import Checkbox from '../components/Checkbox';
import CityCards from '../components/CityCards';
import NotFound from './NotFound';
import '../components/Checkbox.css';
import '../components/SearchCss.css';
import { useSelector, useDispatch } from 'react-redux';
import citiesAction from '../redux/actions/citiesAction';


export default function Cities() {

    let { listCities, continent, search, checked, checkBox } = useSelector(store => store.citiesReducer);
    const dispatch = useDispatch();
    const { getCities, filterCheckCities } = citiesAction

    let [time, setTime] = useState(true)

    if (time) {
        listCities = null
    }

    let [checkboxes, setCheckboxes] = useState([])
    const searchId = useRef()
    const input = useRef()
    /* console.log(input); */

    useEffect(() => {

        setTimeout(() => {
            setTime(false)
        }, 1000);

        if (search || checkBox) {
            let info = {
                search: search,
                continents: checkBox,
                continentsChecked: checked
            }
            dispatch(filterCheckCities(info))
            searchId.current.value = search
            if (checked) {
                checked.forEach(check => {
                    let checkedCity = Array.from(input.current).find(inp => inp.value === check)
                    checkedCity.checked = true
                })
            }
        } else {
            dispatch(getCities())
        }

    }, [])

    function filterCheck(check) {
        let checkArray = [];
        if (check.target.checked) {
            checkArray = [...checked, check.target.value]
        } else {
            checkArray = checkboxes.filter((checkbox) => checkbox !== check.target.value)
        }
        setCheckboxes(checkArray)
        return checkArray;
    }

    function filterSearch(cityFil) {
        let check = filterCheck(cityFil)
        let url = check.map((continent) => `continent=${continent}`).join('&');
        let data = {
            continents: url,
            search: searchId.current.value,
            continentsChecked: check
        }

        dispatch(filterCheckCities(data))

    }

    return (
        <div className='m-t-3 flex column justify-center align-center'>
            <div id='container-check' className='flex justify-around w-100 '  >
                <form ref={input} className='flex justify-around w-60 gap-4 wrap'>
                    {continent.map((continente) => {
                        return <Checkbox continent={continente} valor={continente} fx={filterSearch} />
                    })}
                </form>
                <div>
                    <input type="text" placeholder="Search" className='input' ref={searchId} onChange={filterSearch} />
                </div>
            </div>

            <div className='flex wrap'>

                {
                    listCities !== null ?

                        listCities.length > 0 ? listCities.map((city) => {
                            return <CityCards city={city} id={city._id} />
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


