import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../entity/user/store/userStore.ts'
import { useDispatch, useSelector } from 'react-redux'
import {tdlSlice} from "../entity/user/store/tdlStore.ts";

export const store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
        tdlReducer: tdlSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.dispatch>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()