import { useSelector, useDispatch } from 'react-redux'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: 'INC'})
  }

  const decrease = () => {
    dispatch({type: 'DEC'})
  }

  const ten = () => {
    dispatch({type: 'TEN', value: 10})
  }

  return (
    <div>
      <h1>My counter</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={ten}>Add 10</button>
    </div>
  );
}

export default App;
