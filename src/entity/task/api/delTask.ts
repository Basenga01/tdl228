import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance } from '../../../shered/api'
import { TaskRequest, TaskType } from '../../../types/taskType.ts'

interface Params {
  id: string
}

const convert = (data: TaskRequest): TaskType => {
  const { created_at, todolist_id, due_date, is_completed, ...rest } = data
  return {
    ...rest,
    createdAt: created_at,
    isCompleted: is_completed,
    dueDate: due_date,
    todolistId: todolist_id,
  }
}

export const deleteTask = createAsyncThunk<TaskType, Params>(
  '/todolist/deleteTask',
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await apiInstance.delete<TaskRequest>(`/task/${id}`)
      return convert(res.data)
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)
