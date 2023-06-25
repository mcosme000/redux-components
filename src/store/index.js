import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter_slice";
import listSlice from "./task_slice";


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    task: listSlice.reducer
  }
})

export default store
