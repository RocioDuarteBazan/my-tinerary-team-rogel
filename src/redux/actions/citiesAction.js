import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../url";

const getCities = createAsyncThunk('getCities', async () => {
    const respuesta = await axios.get(`${baseURL}api/cities`)
    return respuesta.data.data
})

const filterCheckCities = createAsyncThunk('filterCheckCities', async (data) => {
    const respuesta = await axios.get(`${baseURL}api/cities?${data.continents}&name=${data.search}`)
    let info = {
        response: respuesta.data.data,
        search: data.search,
        checkBox: data.continents,
        check: data.continentsChecked
    }
    return info
})

const createNewCity = createAsyncThunk('newCity', async (newCity) => {
    try {
        const respuesta = await axios.post(`${baseURL}api/cities`, newCity)
        if (respuesta.data.id) {
            let info = {
                id: respuesta.data.id,
                success: true,
                response: newCity
            }
            return info
        } else {
            let info = {
                success: false,
                messages: respuesta.data.message
            }
            return info
        }
    }catch(error){
        return {
            success: false,
            response: 'An error occurred'
        }
    }
    
})

const getCitiesAdmi = createAsyncThunk('getCitiesAdmi', async (dataUser) => {
    try{
        const respuesta = await axios.get(`${baseURL}api/cities?userId=${dataUser}`)
        return respuesta.data.data
    }catch(error){
        return{
            payload: 'Error'
        }
    }  
})

const deleteCitiesAdmi = createAsyncThunk('deleteCitiesAdmi', async (id) => {
    try{
        const respuesta = await axios.delete(`${baseURL}api/cities/${id}`)
        return respuesta.data
    }catch(error){
        return{
            payload: 'Error'
        }
    }
})  

const updateCitiesAdmi = createAsyncThunk('updateCitiesAdmi', async (data) => {
    try{
        const respuesta = await axios.put(`${baseURL}api/cities/${data.id}`, data.citie)
        return respuesta.data
    }catch(error){
        return{
            payload: 'Error'
        }
    }
})  



const citiesAction = {
    getCities,
    filterCheckCities,
    createNewCity,
    getCitiesAdmi,
    deleteCitiesAdmi,
    updateCitiesAdmi
}

export default citiesAction;