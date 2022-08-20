
import { useSelector } from "react-redux";
import { selectAllTasks} from "./tasksSlice"
import { useEffect } from "react";


const TasksList = () => {
  const tasks = useSelector(selectAllTasks)
  console.log('tasks',tasks)
  return (
    <section>
      <h1>Tasks</h1>
      {
        <p>end:</p>
      }
    </section>
  )
}

export default TasksList;
