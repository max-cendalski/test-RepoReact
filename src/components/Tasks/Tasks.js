import { useState, useEffect } from "react";
import {collection, getDocs } from 'firebase/firestore';
import {db} from '../../components/firebase/Firebase';



const Tasks = () => {
 const [tasks, setTasks] = useState([])
 const tasksDb = collection(db, 'tasks')

    useEffect(()  => {
    const getTasks = async() => {
      const tasksList = await getDocs(tasksDb)
      console.log('tasksList',tasksList)
    }
    getTasks()
  },[])

  return (
    <article>
      <h1>Tasks</h1>
    </article>
  )
}



export default Tasks;


/* const Tasks = () => {
  const [tasks, setTask] = useState([])
  const tasksDb = collection(firestore, 'tasks')

  useEffect(()  => {
    const getTasks = async() => {
      const tasksList = await getDocs(tasksDb)
      console.log('tasksList')
    }
    getTasks()
  },[])

  return (
    <article>
      <h1>Tasks List</h1>
    </article>
  )
}

export default Tasks;
 */
