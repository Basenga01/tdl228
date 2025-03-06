import { createSlice } from '@reduxjs/toolkit'
import { getTask, deleteTask } from '../api'
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
    builder
      .addCase(getTask.fulfilled, (state, action) => {
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
      .addCase(deleteTask.fulfilled, (state, action) => {
        const newTasks = state.task[action.payload.todolistId]
        const filterTask = newTasks.filter((el) => el.id != action.payload.id)
        state.task = { ...state.task, [action.payload.todolistId]: filterTask }
      })
  },
})
