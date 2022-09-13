import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import {collection, getDocs, addDoc, doc, deleteDoc, serverTimestamp} from 'firebase/firestore';
import {db} from '../../components/firebase/Firebase';
import {UserAuth} from '../../context/AuthContext'
import TasksList from '../features/tasks/TasksList';

const Tasks = () => {
 const {user} = UserAuth()
 const [tasks, setTasks] = useState([])
 const [title, setTitle] = useState('')
 const [note, setTaskNote] = useState('')
 const addTaskVisible = [title,note].every(Boolean)

  const getTasks = async() => {
    try {
      const tasksFromFB = await getDocs(tasksRef)
      setTasks(tasksFromFB.docs.map((doc) => ({...doc.data(), id: doc.id})))
    } catch(err) {
      console.error('ERROR:',err)
    }
  }

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
        await addDoc(tasksRef, taskToBeAdded)
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
    const taskRef = doc(db,'users',user.uid,`tasks/${id}`)
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
            onClick={handleAddTaskWithAuth}
            >Add Task</button>
        </form>

      <h1>Tasks</h1>
      <button
        onClick={handleAddTask}>
        Click to Add Task
        </button>
      <h2>{user.name}</h2>
      <h2>{user.lastName}</h2>
      <TasksList tasks={tasks}
                 getTasks={getTasks}
                />
    </article>
  )
}


export default Tasks;



