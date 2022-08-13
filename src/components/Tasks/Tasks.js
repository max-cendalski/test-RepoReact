import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {collection, getDocs,getDoc, addDoc,setDoc, doc, deleteDoc, onSnapshot, serverTimestamp} from 'firebase/firestore';
import {db} from '../../components/firebase/Firebase';
import { UserAuth } from '../../context/AuthContext';



const Tasks = () => {
 const {user} = UserAuth()
 const [tasks, setTasks] = useState([])
 const [title, setTitle] = useState('')
 const [note, setTaskNote] = useState('')
 const addTaskVisible = [title,note].every(Boolean)



 const getTasks = async() => {
 const usersCollectionRef = collection(db, `users/${user.uid}`,'tasks')
  const tasksData = await getDocs(usersCollectionRef);
  setTasks(tasksData.docs.map((doc) =>({...doc.data(), id: doc.id})))
  console.log('tasks.data',tasks)
 };

  // For realtime  updates, working but not properly
 /*  const checkTask = onSnapshot(collection(db, "tasks"), (querySnapshot) => {
    setTasks(querySnapshot.docs.map((doc) =>({...doc.data(), id: doc.id})))
    }); */

  useEffect(() => {
    getTasks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log('tasks',tasks)
  },[])




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

  const handleEditUserId = () => {
    console.log('user',user.uid)
  }

  const handleAddTaskWithAuth = e => {
    e.preventDefault()
    const userRef = collection(db,'users',user.uid,'tasks')
    const addTask = async () => {
      try {
        const taskToBeAdded = {
          date: serverTimestamp(),
          note,
          title
        }
          const addTask = await addDoc(userRef, taskToBeAdded)
          console.log('tasktobe',taskToBeAdded.date)
          taskToBeAdded.id = addTask.id
          const newTasksArray = [...tasks,taskToBeAdded]
          setTasks(newTasksArray)
        } catch(e) {
            console.error("ERROR: ",e)
      }
   }
   addTask()
   setTitle('')
   setTaskNote('')
   getTasks()
  }

  return (
    <article>
      <button onClick={handleEditUserId}>EDIT USER ID</button>
      <button onClick={handleAddTaskWithAuth}>Add Task With Auth</button>

      <form>
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

      <h2>{user.name}</h2>
      <h2>{user.lastName}</h2>
      {
        tasks.map((task) => (
           <section className="task-container" key={task.id}>
            <h3>Title: {task.title}</h3>
            <h3>When: {task.note}</h3>
            <h4>Date: {task.seconds}</h4>
            <button onClick={()=> handleDeleteTask(task.id)}>Delete Task</button>
            <Link to = {`/tasks/edit/${task.id}`} className="edit-link">Edit</Link>
          </section>
        ))
      }
    </article>
  )
}




export default Tasks;
