import { createSlice } from '@reduxjs/toolkit'
import { getTask } from '../../task/getTask.ts'
import { TaskType } from '../../../types/taskType.ts'

interface InitialStateType {
  Load: boolean
  task: Record<string, TaskType[]>
}

const initialState: InitialStateType = {
  Load: false,
  task: {},
}
export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      const tasks = action.payload
      const newObject: Record<string, TaskType[]> = {}
      tasks.forEach((task) => {
        if (!newObject[task.todolistId]) {
          newObject[task.todolistId] = [task]
        } else {
          newObject[task.todolistId] = [...newObject[task.todolistId], task]
        }
      })
      state.task = newObject
    })
  },
})
