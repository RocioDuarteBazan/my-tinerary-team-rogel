import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../url";

const getReaction = createAsyncThunk("getReaction", async ({eventId, type}) => {
    try{
    const response = await axios.get(`${baseURL}api/reactions?${type}=${eventId}`);
    return {
        success: true,
        response: response.data,
    };
    } catch(error){ 
        return {
        success: false,
        response: error.response.data.data,
        }
    }
});

const getUserReactions = createAsyncThunk("getUserReactions", async (id, token) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try{
    const response = await axios.get(`${baseURL}api/reactions?userId=${id}`, headers);
    return {
        success: true,
        response: response.data.data,
    };
    } catch(error){
        return {
        success: false,
        response: error.response.data.data,
        }
    }
});

const updateReaction = createAsyncThunk("updateReaction", async ( data ) => {
    let headers = { headers: { Authorization: `Bearer ${data.token}` } };
    try {
        const response = await axios.put(`${baseURL}api/reactions?${data.type}=${data.id}&name=${data.name}`,null, headers);
        return response.data.response;
    }
    catch (error) {
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
});

const deleteReaction = createAsyncThunk("deleteReaction", async ( {id, token }) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
        const response = await axios.put(`${baseURL}api/reactions/${id}`, null, headers);
        return response.data.response;
    }
    catch (error) {
        console.log(error)
        return {    
            payload: 'An error has ocurred'
        }
    }
});

const reactionActions = {
    getReaction,
    getUserReactions,
    updateReaction,
    deleteReaction
}

export default reactionActions;