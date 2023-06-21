import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counter: 0},
  reducers: {
    increment(state, action) {
      state.counter++
    },
    decrease(state, action) {
      state.counter--
    },
    reset(state, action) {
      state.counter = 0
    }
  }
})

export const actions = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

export default store
