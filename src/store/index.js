import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter_slice";
import taskSlice from "./task_slice";


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    task: taskSlice.reducer
  }
})

export default store;
