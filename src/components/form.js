import { add, getInput } from "../store/task_slice";
import { useSelector, useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const input = useSelector(state => state.task.input)

  const handleChange = (e) => {
    dispatch(getInput(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 50),
      name: input,
      completed: false,
      important: false
    }
    dispatch(add(newTask))
    document.getElementById("input").value = ''
  }


  return (
    <form name="newTaskForm" onSubmit={handleSubmit} className="mb-4 flex justify-between items-center">
      <div>
        <label className="block">Add a new task</label>
        <input type="text" onChange={handleChange} id="input" className="p-1 rounded"></input>
        <label>Priority</label>
        <input type="checkbox"></input>
      </div>
      <input type="submit" value="Create task" className="py-1 px-2 bg-blue-400"></input>
    </form>
  )
}

export default Form;
