import {createSlice} from "@reduxjs/toolkit";
import {TodolistType} from "../../../types/tdlType.ts";
import {getTdl} from "../../todolist/getTdl.ts";

interface InitialStateType {
    Load: boolean;
    tdls: TodolistType[]
}
const initialState: InitialStateType = {
    Load: false,
    tdls: [],
}
export const tdlSlice = createSlice({
    name:'tdl',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getTdl.fulfilled, (state, action)=>{
            state.tdls = action.payload
        })
}
})