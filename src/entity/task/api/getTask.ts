import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance } from '../../../shered/api'
import { TaskRequest, TaskType } from '../../../types/taskType.ts'

const convert = (data: TaskRequest[]): TaskType[] => {
  return data.map((el) => {
    const { created_at, todolist_id, due_date, is_completed, ...rest } = el
    return {
      ...rest,
      createdAt: created_at,
      isCompleted: is_completed,
      dueDate: due_date,
      todolistId: todolist_id,
    }
  })
}

export const getTask = createAsyncThunk<TaskType[], void>(
  '/todolist/getTask',
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiInstance.get<TaskRequest[]>('/task')
      return convert(res.data)
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)
