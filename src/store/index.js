import { createStore } from 'redux'

const reducerFunction = (state = {counter: 0}, action) => {

  // Limitations for actions:
  // synchronous function
  // shouldn't modify the original state
  switch (action.type) {
    case 'INC': return {counter: state.counter + 1}
    case 'DEC': return {counter: state.counter - 1}
    case 'TEN': return {counter: state.counter + 10}
    // I always need to return state
    default: return state
  }
}

const store = createStore(reducerFunction)


export default store;
