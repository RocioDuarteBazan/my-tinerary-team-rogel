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

const createNewHotel = createAsyncThunk('createNewHotel', async (newHotel) => {
    try {
        const respuesta = await axios.post(`${baseURL}api/hotels`, newHotel)
        if (respuesta.data.id) {
            let info = {
                id: respuesta.data.id,
                success: true,
                response: newHotel
            }
            return info
        } else {
            let info = {
                success: false,
                messages: respuesta.data.message
            }
            return info
        }
    } catch (error) {
        return {
            success: false,
            response: 'An error occurred'
        }
    }

})

const getHotelsAdmi = createAsyncThunk('getHotelsAdmi', async (dataUser) => {
    try{
        const respuesta = await axios.get(`${baseURL}api/hotels?userId=${dataUser}`)
        return respuesta.data.data
    }catch(error){
        return{
            payload: 'Error'
        }
    }  
})

const deleteHotelAdmi = createAsyncThunk('deleteHotelAdmi', async (id) => {
    try {
        const respuesta = await axios.delete(`${baseURL}api/hotels/${id}`)
        return respuesta.data.data
    } catch (error) {
        return {
            payload: 'Error'
        }
    }
})

const updateHotelAdmi = createAsyncThunk('updateHotelAdmi', async (data) => {
    try {
        const respuesta = await axios.patch(`${baseURL}api/hotels/${data.id}`, data.hotels)
        return respuesta.data.data
    } catch (error) {
        return {
            payload: 'Error'
        }
    }
})

const hotelsAction = {
    getHotels,
    filterHotels,
    createNewHotel,
    getHotelsAdmi,
    deleteHotelAdmi,
    updateHotelAdmi
}

export default hotelsAction;