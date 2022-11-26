import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../url";
import axios from "axios"

const login = createAsyncThunk("login", async (datos) => {
    let url = `${ baseURL }api/auth/sign-in`
try {
        let user = await axios.post(url, datos)
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
const exit = createAsyncThunk("exit", async (token) => {
    let url = `${ baseURL }api/auth/sign-in`
        let headers = { headers: { "Authorization": `Bearer ${ token }`
}}
try {
    let user = await axios.put(url, null, headers)
    console.log(user.data);
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
}
)

const userAction = {
    login,
    exit

}
export default userAction