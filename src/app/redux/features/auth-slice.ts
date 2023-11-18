import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialState = {
  value: AuthState
}

type AuthState = {
  isAuth: boolean
}

const initialState = {
  value: {
    isAuth: false,
  } as AuthState,
} as initialState

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    login: (state) => {
        state.value.isAuth = true
    }
  }
})

export const {login, logOut} = auth.actions
export default auth.reducer