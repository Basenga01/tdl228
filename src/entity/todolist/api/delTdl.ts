import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance } from '../../../shered/api'
import { TodolistRequest, TodolistType } from '../../../types/tdlType.ts'

interface Params {
  id: string
}

const convert = (data: TodolistRequest): TodolistType => {
  const { created_at, user_id, ...rest } = data
  return { ...rest, createdAt: created_at, userId: user_id }
}

export const delTdl = createAsyncThunk<TodolistType, Params>(
  '/todolist/deleteTdl',
  async ({ id }, { rejectWithValue }) => {
    try {
      const res = await apiInstance.delete<TodolistRequest>(`/todolist/${id}`)
      return convert(res.data)
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)
