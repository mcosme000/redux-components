
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrease, reset } from '../store/counter_slice';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Simple redux counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  )
}

export default Counter;
