import { createReducer } from "@reduxjs/toolkit";
import hotelsAction from "../actions/hotelsAction"

const { getHotels, filterHotels, createNewHotel } = hotelsAction

const initialState = {
    hotels: [],
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

});

export default hotelsReducer