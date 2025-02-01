import {createSlice, isPending, isRejected} from "@reduxjs/toolkit";
import {signIn} from "../api/signIn.ts";
import {authMe} from "../api/authMe.ts";

export const userSlice = createSlice({
    name: "133455A",
    initialState: {
        isAuthorize: false,
        isInit: false,
        Load: true,
        firstName: '',
        lastName: '',
    },
    reducers: {},
    extraReducers: (builder) => {


        builder.addCase(signIn.fulfilled, (state) => {
            state.Load = false
        })
            .addCase(authMe.fulfilled, (state, action)=>{
                if (action.payload){
                    state.firstName = action.payload.first_name
                    state.lastName = action.payload.last_name
                    state.isAuthorize = true
                }
            state.isInit = true
            state.Load = false

        })

            .addMatcher(isPending(authMe, signIn), (state)=>{
            state.Load=true


        }).addMatcher(isRejected(authMe, signIn), (state)=> {
                state.Load = false
                state.isInit = true
            })
    }
})
