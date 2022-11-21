import { createReducer } from "@reduxjs/toolkit";
import citiesAction from "../actions/citiesAction"

const {getCities,filterCheckCities,createNewCity} = citiesAction

const initialState = {
    listCities:[],
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
});

export default citiesReducer