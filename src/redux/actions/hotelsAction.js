import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../url";

const getHotels = createAsyncThunk('getHotels', async () => {
    try {
        const respuesta = await axios.get(`${baseURL}api/hotels`)
        return respuesta.data.data
    } catch (error) {
        console.log(error)
        return {
            payload: 'error'
        }
    }
})

const filterHotels = createAsyncThunk('filterHotels', async (data) => {
    try {
        const respuesta = await axios.get(`${baseURL}api/hotels?name=${data.name}&order=${data.order}`)
        let info = {
            response: respuesta.data.data,
            name: data.name,
            order: data.order
        }
        return info
    } catch (error) {
        console.log(error)
        return {
            payload: 'error'
        }
    }
})


const hotelsAction = {
    getHotels,
    filterHotels
}

export default hotelsAction;