import { createStore } from 'redux'

const reducerFunction = (state = {counter: 0}, action) => {

  // Limitations for actions:
  // synchronous function
  // shouldn't modify the original state

  if(action.type === 'INC') {
    return { counter: state.counter + 1 }
  }

  if (action.type === 'DEC') {
    return { counter: state.counter - 1 }
  }

  if (action.type === 'TEN') {
    return { counter: state.counter + action.value }
  }

  return state;
}

const store = createStore(reducerFunction)


export default store;
