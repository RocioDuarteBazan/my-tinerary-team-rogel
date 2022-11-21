import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../url";

const getCities = createAsyncThunk('getCities', async () => {
    const respuesta = await axios.get(`${baseURL}api/cities`)
    return respuesta.data.data
})

const filterCheckCities = createAsyncThunk('filterCheckCities', async (data) => {
    const respuesta = await axios.get(`${baseURL}api/cities?${data.search}&name=${data.order}`)
    let info = {
        response: respuesta.data.data,
        search: data.search,
        order: data.order
    }
    return info
})

const citiesAction = {
    getCities,
    filterCheckCities
}

export default citiesAction;