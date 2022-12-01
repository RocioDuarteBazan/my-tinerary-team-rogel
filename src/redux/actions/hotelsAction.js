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
        let info = {
            response: error.response.data.response,
            name: data.name,
            order: data.order
        }
        return info
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
    try {
        const respuesta = await axios.get(`${baseURL}api/hotels?userId=${dataUser}`)
        return respuesta.data.data
    } catch (error) {
        return {
            payload: 'Error'
        }
    }
})

const deleteHotelAdmi = createAsyncThunk('deleteHotelAdmi', async ({ id, token }) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
        const respuesta = await axios.delete(`${baseURL}api/hotels/${id}`, headers)
        return respuesta.data.data
    } catch (error) {
        return {
            payload: 'Error'
        }
    }
})

const updateHotelAdmi = createAsyncThunk('updateHotelAdmi', async ({ data, token }) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
        const respuesta = await axios.patch(`${baseURL}api/hotels/${data.id}`, data.hotels, headers)
        return respuesta.data.data
    } catch (error) {
        return {
            payload: 'Error'
        }
    }
})

const getShowUser = createAsyncThunk('getShowUser', async (dataUser) => {
    try {
        const respuesta = await axios.get(`${baseURL}api/shows?userId=${dataUser}`)
        return respuesta.data.data
    } catch (error) {
        return {
            payload: 'Error'
        }
    }
})

const deleteShowUser = createAsyncThunk('deleteShowUser', async ({ id, token }) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
        const respuesta = await axios.delete(`${baseURL}api/shows/${id}`, headers)
        return respuesta.data.data
    } catch (error) {
        return {
            payload: 'Error'
        }
    }
})

const updateShowUser = createAsyncThunk('updateShowUser', async ({ data, token }) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
        const respuesta = await axios.patch(`${baseURL}api/shows/${data.id}`, data.shows, headers)
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
    updateHotelAdmi,
    getShowUser,
    deleteShowUser,
    updateShowUser
}

export default hotelsAction;