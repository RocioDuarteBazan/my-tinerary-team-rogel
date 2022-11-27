import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../url";
import axios from "axios"

const login = createAsyncThunk("login", async (datos) => {
    let url = `${ baseURL }api/auth/sign-in`
try {
        let user = await axios.post(url, datos)
        console.log(user);
        return {
            success: true,
            response: user.data.response,
            res: user.data
        }

    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message

        }
    }
});
const reEntry = createAsyncThunk('reEnter', async (token) => {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
        let user = await axios.post(`${baseURL}api/auth/token`, null, headers)
        return {
            success: true,
            response: user.data.response,
            token: token,
        }

    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
});

const signOff = createAsyncThunk('logout', async (token) => {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
        let user = await axios.post(`${baseURL}api/auth/sign-out`, null, headers)
        return {
            success: true,
            response: user.data.message
        }
    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
});

const userAction = {
    login,
    reEntry,
    signOff
}
export default userAction