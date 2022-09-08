
import { useSelector } from "react-redux";
import { selectAllTasks} from "./tasksSlice"
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {UserAuth} from '../../../context/AuthContext'
import {collection, getDocs,getDoc, addDoc, doc, deleteDoc, onSnapshot} from 'firebase/firestore'
import {db} from '../../../components/firebase/Firebase'

/*
 const tasksCollection = collection(db, 'tasks')
 const usersDb = collection(db, 'users')


 const getTasks = async() => {
  const tasksData = await getDocs(tasksCollection);
  setTasks(tasksData.docs.map((doc) =>({...doc.data(), id: doc.id})))
 }; */


const TasksList = () => {
  const {user} = UserAuth()
  const tasksRef = collection(db,"users",`${user.uid}`,"tasks" )
  const [tasks, setTasks] = useState([])

  const getTasks = async() => {
    const tasksFromFB = await getDocs(tasksRef)
    setTasks(tasksFromFB.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  useEffect(() => {
    getTasks()
  },[])

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
