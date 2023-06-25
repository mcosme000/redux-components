import { remove } from "../store/task_slice";
import { useDispatch } from "react-redux";
import { FiDelete } from "react-icons/fi";


const Task = (props) => {
  const {id, name, completed, important} = props

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(remove(id))
  }

  return (
    <div id={id} className="flex justify-between items-center p-4 border-2 border-solid border-black rounded mb-3">
      <div className="flex">
        <input className="inline mr-3" type="checkbox" defaultChecked={completed}></input>
        <h3>{name} {important && '🔥'}</h3>
      </div>
      <div className="flex items-center">
        <span className="text-lg hover:text-red-500 hover:text-xl hover:font-bold hover:cursor-pointer" onClick={handleClick}><FiDelete/></span>
      </div>
    </div>
  )
}

export default Task;
