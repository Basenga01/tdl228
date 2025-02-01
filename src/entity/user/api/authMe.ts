import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiInstance, getToken} from "../../../shered/api";
import {User} from "../../../types/userType.ts";

export const authMe = createAsyncThunk<User|void ,void>('user/me', async (_, {rejectWithValue}) => {
    try {
        const token = getToken()
        if (token) {
            const result = await apiInstance.get<User>('users/me')
            return result.data
        }
    } catch (err) {
        return rejectWithValue(err)
    }

})
