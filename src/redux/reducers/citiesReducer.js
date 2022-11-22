import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/citiesAction"

const {getCities,filterCheckCities,createNewCity, getCitiesAdmi, deleteCitiesAdmi,updateCitiesAdmi} = citiesAction

const initialState = {
    listCities:[],
    admiCities: [],
    continent:[],
    search: '',
    checkBox: '',
    checked: []
}

const citiesReducer = createReducer(initialState, (builder) => {

    builder
        .addCase(getCities.fulfilled, (state, action) => {
            let check = [...new Set (action.payload.map(city => city.continent))] 
            return{...state, listCities: action.payload , continent: check}
        })
        .addCase(filterCheckCities.fulfilled, (state, action) => {
            return{...state, listCities: action.payload.response, search: action.payload.search,checkBox: action.payload.checkBox, checked: action.payload.check}
        })
        .addCase(createNewCity.fulfilled, (state, action) => {
            if(action.payload.success){
                state.listCities.push(action.payload.response)
            }
        })
        .addCase(getCitiesAdmi.fulfilled, (state, action) => {
            return{...state, admiCities: action.payload}
        })
        .addCase(deleteCitiesAdmi.fulfilled, (state, action) => {
            let cities = state.admiCities.filter(cities => cities.id !== action.data._id)
            return{...state, admiCities: cities}
        })
        .addCase(updateCitiesAdmi.fulfilled, (state, action) => {
            return{...state}
        })
});

export default citiesReducer