import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/citiesAction"

const { getCities, filterCheckCities, createNewCity, getCitiesAdmi, deleteCitiesAdmi, updateCitiesAdmi, getItinerariesUser, deleteItinerariesUser, updateItinerariesUser } = citiesAction

const initialState = {
    listCities: [],
    admiCities: [],
    continent: [],
    search: '',
    checkBox: '',
    checked: [],
    userItineraries: []
}

const citiesReducer = createReducer(initialState, (builder) => {

    builder
        .addCase(getCities.fulfilled, (state, action) => {
            let check = [...new Set(action.payload.map(city => city.continent))]
            return { ...state, listCities: action.payload, continent: check }
        })
        .addCase(filterCheckCities.fulfilled, (state, action) => {
            return { ...state, listCities: action.payload.response, search: action.payload.search, checkBox: action.payload.checkBox, checked: action.payload.check }
        })
        .addCase(createNewCity.fulfilled, (state, action) => {
            if (action.payload.success) {
                state.listCities.push(action.payload.response)
            }
        })
        .addCase(getCitiesAdmi.fulfilled, (state, action) => {
            return { ...state, admiCities: action.payload }
        })
        .addCase(deleteCitiesAdmi.fulfilled, (state, action) => {
            let cities = state.admiCities.filter(cities => cities._id !== action.payload._id)
            return { ...state, admiCities: cities }
        })
        .addCase(updateCitiesAdmi.fulfilled, (state, action) => {
            let cities = state.admiCities.filter(cities => cities._id !== action.payload._id)
            return { ...state, admiCities: [...cities, action.payload] }
        })
        .addCase(getItinerariesUser.fulfilled, (state, action) => {
            return { ...state, userItineraries: action.payload }
        })
        .addCase(deleteItinerariesUser.fulfilled, (state, action) => {
            let itineraries = state.userItineraries.filter(itineraries => itineraries._id !== action.payload._id)
            return { ...state, userItineraries: itineraries }
        })
        .addCase(updateItinerariesUser.fulfilled, (state, action) => {
            let itineraries = state.userItineraries.filter(itineraries => itineraries._id !== action.payload._id)
            return { ...state, userItineraries: [...itineraries, action.payload] }
        })
});

export default citiesReducer