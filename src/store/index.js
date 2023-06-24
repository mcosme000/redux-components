import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counter: 0},
  reducers: {
    increment(state) {
      state.counter++
    },
    decrease(state) {
      state.counter--
    },
    reset(state) {
      state.counter = 0
    }
  }
})

export const {increment, decrease, reset} = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

export default store
