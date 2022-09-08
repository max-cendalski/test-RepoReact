
import { useSelector } from "react-redux";
import { selectAllTasks} from "./tasksSlice"
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {UserAuth} from '../../../context/AuthContext'
import {collection, getDocs,getDoc, addDoc, doc, deleteDoc, onSnapshot} from 'firebase/firestore'
import {db} from '../../../components/firebase/Firebase'


const TasksList = ({tasks, getTasks}) => {
  const {user} = UserAuth()

  const handleDeleteTask = async (id) => {
    const taskRef = doc(db,"users",`${user.uid}/tasks`, `${id}`)
    await deleteDoc(taskRef)
    console.log(`Task with id:${id} has been deleted!`)
    getTasks()
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
