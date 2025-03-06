import { createAsyncThunk } from '@reduxjs/toolkit'
import { apiInstance } from '../../../shered/api'
import { TodolistType } from '../../../types/tdlType.ts'

interface TodolistRequest {
  id: string
  title: string
  description: string
  created_at: string
  user_id: string
}

const convert = (data: TodolistRequest[]): TodolistType[] => {
  return data.map((el) => {
    const { created_at, user_id, ...rest } = el
    return { ...rest, createdAt: created_at, userId: user_id }
  })
}

export const getTdl = createAsyncThunk<TodolistType[], void>(
  '/todolist/getTdl',
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiInstance.get<TodolistRequest[]>('/todolist')
      return convert(res.data)
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)
