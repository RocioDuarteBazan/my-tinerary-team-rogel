import { createReducer } from "@reduxjs/toolkit";
import hotelsAction from "../actions/hotelsAction"

const { getHotels, filterHotels, createNewHotel, deleteHotelAdmi , updateHotelAdmi, getHotelsAdmi } = hotelsAction

const initialState = {
    hotels: [],
    hotelsAdmin: [],
    order: '',
    name: ''
}

const hotelsReducer = createReducer(initialState, (builder) => {

    builder
        .addCase(getHotels.fulfilled, (state, action) => {
            return {
                ...state,
                hotels: action.payload
            }
        })
        .addCase(filterHotels.fulfilled, (state, action) => {
            return {
                ...state,
                hotels: action.payload.response,
                name: action.payload.name,
                order: action.payload.order
            }
        })
        .addCase(createNewHotel.fulfilled, (state, action) => {
            if(action.payload.success){
                state.hotels.push(action.payload.response)
            }
        })
        .addCase(getHotelsAdmi.fulfilled, (state, action) => {
            return{...state, hotelsAdmin: action.payload}
        })
        .addCase(deleteHotelAdmi.fulfilled, (state, action) => {
            let hotels = state.admiHotels.filter(hotels => hotels.id !== action.data._id)
            return{...state, hotelsAdmin: hotels}
        })
        .addCase(updateHotelAdmi.fulfilled, (state, action) => {
            return{...state}
        })

});

export default hotelsReducer