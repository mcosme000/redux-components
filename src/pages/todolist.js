import { useSelector, useDispatch } from "react-redux";
import { display } from "../store/task_slice";

import Task from "../components/task";
import Form from "../components/form";

const Todolist = () => {
  const tasks = useSelector(state => state.task.tasks)
  const show = useSelector(state => state.task.show)
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(display())
  }

  const renderTasks = tasks.map(task => {
    return <Task
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      important={task.important}
    />
  })

  return (
    <div className="w-11/12 md:w-8/12 bg-gray-100 m-auto rounded-lg p-5">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">My todo list</h3>
          <p>{tasks.length > 0
            ? `You have ${tasks.length} unfinished task${tasks.length > 1 && 's'}`
            : "You don't have anything to do today! 🌱🌱 "}</p>
        </div>
        <p onClick={handleClick}
        className="py-2 px-3 bg-green-300 rounded-lg text-sm hover:cursor-pointer hover:bg-green-400">
          <i className="fa fa-solid fa fa-plus"></i>
        </p>
      </div>
      {show && <Form />}
      {renderTasks}
    </div>
  )
}

export default Todolist;
