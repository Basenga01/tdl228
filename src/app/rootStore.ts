import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../entity/user/store/userStore.ts'
import { useDispatch, useSelector } from 'react-redux'
import { tdlSlice } from '../entity/user/store/tdlStore.ts'
import { taskSlice } from '../entity/user/store/taskStore.ts'

export const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer,
    tdlReducer: tdlSlice.reducer,
    taskReducer: taskSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
