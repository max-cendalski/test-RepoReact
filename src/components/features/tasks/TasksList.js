
import { useSelector } from "react-redux";
import { selectAllTasks} from "./tasksSlice"
import { useEffect } from "react";
import {Link} from 'react-router-dom';

const TasksList = () => {
  const tasks = useSelector(selectAllTasks)
  console.log('tasks',tasks)
    const handleDeleteTask = async (id) => {
      console.log('whe')
 /*    const taskRef = doc(db, `tasks/${id}`)
    await deleteDoc(taskRef)
    console.log(`Task with id:${id} has been deleted!`)
    getTasks() */
  }
  return (
    <section>
      <h1>Tasks</h1>
        {
          tasks.map((task) => (
            <section className="task-container" key={task.id}>
              <h3>Title: {task.title}</h3>
              <h3>When: {task.note}</h3>

              <button onClick={()=> handleDeleteTask(task.id)}>Delete Task</button>
              <Link to = {`/tasks/edit/${task.id}`} className="edit-link">Edit</Link>
            </section>
          ))
        }

    </section>
  )
}

export default TasksList;
