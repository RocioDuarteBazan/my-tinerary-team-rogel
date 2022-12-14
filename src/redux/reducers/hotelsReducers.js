import { createReducer } from "@reduxjs/toolkit";
import hotelsAction from "../actions/hotelsAction"

const { getHotels, filterHotels, createNewHotel, deleteHotelAdmi, updateHotelAdmi, getHotelsAdmi, getShowUser, deleteShowUser, updateShowUser } = hotelsAction

const initialState = {
    hotels: [],
    hotelsAdmin: [],
    order: '',
    name: '',
    userShows: []
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
            if (action.payload.success) {
                state.hotels.push(action.payload.response)
            }
        })
        .addCase(getHotelsAdmi.fulfilled, (state, action) => {
            return { ...state, hotelsAdmin: action.payload }
        })
        .addCase(deleteHotelAdmi.fulfilled, (state, action) => {
            let hotels = state.admiHotels.filter(hotels => hotels._id !== action.payload._id)
            return { ...state, hotelsAdmin: hotels }
        })
        .addCase(updateHotelAdmi.fulfilled, (state, action) => {
            let hotels = state.admiHotels.filter(
                hotels => hotels._id !== action.payload._id
            )
            return { ...state, updateHotelAdmi: [...hotels, action.payload] }
        })
        .addCase(getShowUser.fulfilled, (state, action) => {
            return { ...state, userShows: action.payload }
        })
        .addCase(deleteShowUser.fulfilled, (state, action) => {
            let show = state.userShows.filter(show => show._id !== action.payload._id)
            return { ...state, userShows: show }
        })
        .addCase(updateShowUser.fulfilled, (state, action) => {
            let show = state.userShows.filter(show => show._id !== action.payload._id)
            return { ...state, userShows: [...show, action.payload] }
        })
});

export default hotelsReducer