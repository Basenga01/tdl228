import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiInstance, setToken} from "../../../shered/api";
import {User} from "../../../types/userType.ts";
import {authMe} from "./authMe.ts";
export interface SignInReq {
    username: string;
    password: string;
}

export const signIn = createAsyncThunk<User, SignInReq>('user/signIn', async(param, {rejectWithValue, dispatch})=>{
    try{
        const result=  await apiInstance.post<User>('/users/login', param);
        setToken(result.data.access_token)
        dispatch(authMe())
        return result.data
    }
    catch(error){
        return rejectWithValue(error);
    }
} )