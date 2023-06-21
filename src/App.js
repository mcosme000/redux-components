import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store';

function App() {

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(actions.increment())
  }

  const decrease = () => {
    dispatch(actions.decrease())
  }

  const reset = () => {
    dispatch(actions.reset())
  }

  return (
    <div>
      <h1>Simple redux counter</h1>
      <h3>{counter}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>RESET</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
