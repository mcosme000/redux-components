import { createSlice } from "@reduxjs/toolkit";

const tasks = [
  {
    id: 1,
    name: 'water the plants',
    completed: false,
    important: true
  },
  {
    id: 2,
    name: 'clean clothes',
    completed: false,
    important: true,
  }
]

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: tasks,
    show: false,
    input: '',
    importantCheck: false
  },
  reducers: {
    add(state, action) {
      state.tasks.push(action.payload)
    },
    remove(state, action) {
      const selectedTask = state.tasks.find(task => task.id === action.payload)
      state.tasks = state.tasks.filter(task => task !== selectedTask)
    },
    display(state) {
      state.show = !state.show;
    },
    getInput(state, action) {
      state.input = action.payload
    },
  }
})

export const { add, remove, display, getInput } = taskSlice.actions;
export default taskSlice;
