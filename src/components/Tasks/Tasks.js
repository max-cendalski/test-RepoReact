import { useState, useEffect } from "react";
import {collection, getDocs,getDoc, addDoc, doc , updateDoc, deleteField, deleteDoc} from 'firebase/firestore';
import {db} from '../../components/firebase/Firebase';



const Tasks = () => {
 const [tasks, setTasks] = useState([])
 const [users, setUsers] = useState([])
 const [user, setUser] = useState([])
 const [title, setTitle] = useState('')
 const [taskNote, setTaskNote] = useState('')
 const tasksCollection = collection(db, 'tasks')
 const usersDb = collection(db, 'users')

    useEffect(()  => {
    const getTasks = async() => {
      const tasksData = await getDocs(tasksCollection);
      setTasks(tasksData.docs.map((doc) =>({...doc.data(), id: doc.id})))
      };
      console.log('tasks', tasks)
    getTasks()
  },[])

  const handleRetrieveUsers = async() => {
    const userRef = doc(db, "users", "Uu8m5sAOkjOCmkUAVfGs")
    const userSnap = await getDoc(userRef)
    if (userSnap.exists()) {
      setUser(userSnap.data())
      console.log("Document data:", userSnap.data());
      } else {
      console.log("No such document!");
    }
  }

  const handleAddTask = e => {
    const addTask = async () => {
      try {
        const addTask = await addDoc(tasksCollection, {
        date: '7/20',
        note: taskNote,
        title: title
      })

      console.log("Task added with ID: ", addTask.id)
    } catch(e) {
      console.error("ERROR: ",e)
    }
    }
    addTask()
  }


  const handleTitleChange = e => {
    setTitle(e.target.value)
  }
   const handleNoteChange = e => {
    setTaskNote(e.target.value)
  }

  const handleDeleteTask = id => {
    const taskRef = doc(db, `tasks/${id}`)
    const deleteTask = async () => {
      await deleteDoc(taskRef, id)
      console.log(`Task with id:${id} has been deleted!`)
    }
    deleteTask()
  }

  return (
    <article>
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
            value={taskNote}
            name="taskNote"
            onChange={handleNoteChange}
          ></textarea>
        </p>
          <button onClick={handleAddTask}>Add Task</button>
        </form>
      <h1>Tasks</h1>
      <button onClick={handleRetrieveUsers}>Click to render user</button>
      <button onClick={handleAddTask}>Click to Add Task</button>
      <h2>{user.name}</h2>
      <h2>{user.lastName}</h2>
      {
        tasks.map(task => {
          return <section className="task-container" key={task.id}>
            <h3>Title: {task.title}</h3>
            <h3>When: {task.note}</h3>
            <button onClick={()=> handleDeleteTask(task.id)}>Delete Task</button>
          </section>
        })
      }
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
