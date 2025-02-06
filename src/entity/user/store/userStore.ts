import { createSlice, isPending, isRejected } from '@reduxjs/toolkit'
import { signIn } from '../api/signIn.ts'
import { authMe } from '../api/authMe.ts'
import { delToken } from '../../../shered/api'

interface InitialStateType {
  isAuthorize: boolean
  isInit: boolean
  Load: boolean
  firstName: string
  lastName: string
}

const initialState: InitialStateType = {
  isAuthorize: false,
  isInit: false,
  Load: false,
  firstName: '',
  lastName: '',
}

export const userSlice = createSlice({
  name: '133455A',
  initialState,
  reducers: {
    logOut: (state) => {
      delToken()
      state.isAuthorize = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state) => {
        state.Load = false
      })
      .addCase(authMe.fulfilled, (state, action) => {
        if (action.payload) {
          state.firstName = action.payload.first_name
          state.lastName = action.payload.last_name
          state.isAuthorize = true
        }
        state.isInit = true
        state.Load = false
      })

      .addMatcher(isPending(authMe, signIn), (state) => {
        state.Load = true
      })
      .addMatcher(isRejected(authMe, signIn), (state) => {
        state.Load = false
        state.isInit = true
      })
  },
})
export const { logOut } = userSlice.actions
