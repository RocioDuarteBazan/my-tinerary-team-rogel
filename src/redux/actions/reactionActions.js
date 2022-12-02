import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../url";

const getReaction = createAsyncThunk("getReaction", async (id) => {

    try{
    const response = await axios.get(`${baseURL}api/reactions?itineraryId=${id}`);
    return {
        success: true,
        response: response.data,
        reqId: response.data.id
    };
    } catch(error){
        return {
        success: false,
        response: error.response.data.data,
        }
    }
});

const updateReaction = createAsyncThunk("updateReaction", async ( datos ) => {
    let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
    try {
        const response = await axios.put(`${baseURL}api/reactions?itineraryId=${datos.id}&name=${datos.name}`,null, headers);
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
    updateReaction
}

export default reactionActions;