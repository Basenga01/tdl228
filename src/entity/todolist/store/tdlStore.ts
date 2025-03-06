import { createSlice } from '@reduxjs/toolkit'
import { TodolistType } from '../../../types/tdlType.ts'
import { getTdl } from '../api'
import { delTdl } from '../api/delTdl.ts'

interface InitialStateType {
  Load: boolean
  tdls: TodolistType[]
}

const initialState: InitialStateType = {
  Load: false,
  tdls: [],
}
export const tdlSlice = createSlice({
  name: 'tdls',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTdl.fulfilled, (state, action) => {
        state.tdls = action.payload
      })
      .addCase(delTdl.fulfilled, (state, action) => {
        const newTdl = [...state.tdls]
        const filterTdl = newTdl.filter((el) => el.id != action.payload.id)
        state.tdls = filterTdl
      })
  },
})
