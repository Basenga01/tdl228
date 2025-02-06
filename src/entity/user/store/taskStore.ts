import { createSlice } from '@reduxjs/toolkit'
import { getTask } from '../../task/getTask.ts'
import { TaskType } from '../../../types/taskType.ts'

interface InitialStateType {
  Load: boolean
  task: TaskType[]
}

const initialState: InitialStateType = {
  Load: false,
  task: [],
}
export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.task = action.payload
    })
  },
})
