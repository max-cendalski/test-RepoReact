import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {collection, getDocs,getDoc, addDoc, doc, deleteDoc, onSnapshot} from 'firebase/firestore';
import {db} from '../../components/firebase/Firebase';
import {UserAuth} from '../../context/AuthContext'

import TasksList from '../features/tasks/TasksList';




const Tasks = () => {
  const {user} = UserAuth()
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [note, setTaskNote] = useState('')
  const addTaskVisible = [title,note].every(Boolean)
  const tasksCollection = collection(db, 'tasks')



  const getTasks = async() => {
    const tasksData = await getDocs(tasksCollection);
    setTasks(tasksData.docs.map((doc) =>({...doc.data(), id: doc.id})))
  };


  useEffect(() => {
    getTasks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  const handleAddTask = e => {
    e.preventDefault()
    const addTask = async () => {
      try {
        const taskToBeAdded = {
          note,
          title
        }
        const addTask = await addDoc(collection(db, "users", `${user.uid}/tasks`), taskToBeAdded)
        } catch(e) {
          console.error("ERROR: ",e)
      }
   }
    addTask()
    getTasks()
    setTaskNote('')
    setTitle('')
  }


  const handleTitleChange = e => {
    setTitle(e.target.value)
  }
   const handleNoteChange = e => {
    setTaskNote(e.target.value)
  }

  const handleDeleteTask = async (id) => {
    const taskRef = doc(db, `tasks/${id}`)
    await deleteDoc(taskRef)
    console.log(`Task with id:${id} has been deleted!`)
    getTasks()
  }

  return (
    <article>
      <form onSubmit={handleAddTask}>
        <p>
          <label htmlFor="title">Title</label>
          <input
            value={title}
            name="title"
            onChange={handleTitleChange}
          />
        </p>
        <p>
          <label htmlFor="title">Note</label>
          <textarea
            value={note}
            name="taskNote"
            onChange={handleNoteChange}
          ></textarea>
        </p>
          <button
            disabled={!addTaskVisible}
            onClick={handleAddTask}
            >Add Task</button>
        </form>

      <h1>Tasks</h1>
      <button
        onClick={handleAddTask}>
        Click to Add Task
        </button>
      <h2>{user.name}</h2>
      <h2>{user.lastName}</h2>
      <TasksList />
    </article>
  )
}






export default Tasks;


// WORKING CODE
/*  const addUser = async () => {
      try {
        const userRef = await addDoc(collection(db, "users"), {
          name: 'Max',
          lastName: 'Cendalski'
        })
        console.log("User added with ID: ", userRef.id)
      } catch (e) {
        console.error("Error adding user :", e)
      }
    }
    const getTasks = async() => {
      const tasksList = await getDocs(tasksDb)
      console.log('tasksList',tasksList)
    }
    addUser()
    getTasks() */

     //<button onClick={()=> handleEditTask(task.id)}>Edit Task</button>


/*        {
        tasks.map((task) => (
           <section className="task-container" key={task.id}>
            <h3>Title: {task.title}</h3>
            <h3>When: {task.note}</h3>

            <button onClick={()=> handleDeleteTask(task.id)}>Delete Task</button>
            <Link to = {`/tasks/edit/${task.id}`} className="edit-link">Edit</Link>
          </section>
        ))
      } */
