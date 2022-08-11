import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {collection, getDocs,getDoc, addDoc,setDoc, doc, deleteDoc, onSnapshot} from 'firebase/firestore';
import {db} from '../../components/firebase/Firebase';
import { UserAuth } from '../../context/AuthContext';



const Tasks = () => {
 const {user} = UserAuth()
 const [tasks, setTasks] = useState([])
 const [title, setTitle] = useState('')
 const [note, setTaskNote] = useState('')
 const addTaskVisible = [title,note].every(Boolean)


 // Temporary not needed user, users
/*  const [users, setUsers] = useState([])
 const [user, setUser] = useState([]) */


 const tasksCollectionRef = collection(db, 'tasks')
 const usersCollectionRef = collection(db, `users/${user.uid}`,'tasks')
 console.log('userscol',usersCollectionRef)


 const getTasks = async() => {
  const tasksData = await getDocs(usersCollectionRef);
  setTasks(tasksData.docs.map((doc) =>({...doc.data(), id: doc.id})))
 };

  // For realtime  updates, working but not properly
 /*  const checkTask = onSnapshot(collection(db, "tasks"), (querySnapshot) => {
    setTasks(querySnapshot.docs.map((doc) =>({...doc.data(), id: doc.id})))
    }); */

  useEffect(() => {
    getTasks()
    console.log('tasks',tasks)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  /* const handleRetrieveUsers = async() => {
    const userRef = doc(db, "users", "Uu8m5sAOkjOCmkUAVfGs")
    const userSnap = await getDoc(userRef)
    if (userSnap.exists()) {
      setUser(userSnap.data())
      console.log("Document data:", userSnap.data());
      } else {
      console.log("No such document!");
    }
  } */



/*
  const handleAddTask = e => {
    e.preventDefault()
    const addTask = async () => {
      try {
        const taskToBeAdded = {
          date:'7/20',
          note,
          title
        }
        const addTask = await setDoc(usersCollectionRef,user.uid, taskToBeAdded)
        taskToBeAdded.id = addTask.id
         const newTasksArray = [...tasks,taskToBeAdded]
        setTasks(newTasksArray)
        } catch(e) {
          console.error("ERROR: ",e)
      }
   }
    addTask()
    setTaskNote('')
    setTitle('')
    getTasks()
    console.log('tasks from add', tasks)
  }
  */


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

  const handleEditUserId = () => {
    console.log('user',user.uid)
  }

  const handleAddTaskWithAuth = e => {
    e.preventDefault()
    const userRef = collection(db,'users',user.uid,'tasks')
    const addTask = async () => {
      try {
        const taskToBeAdded = {
          date:'7/20',
          note,
          title
        }
          const addTask = await addDoc(userRef, taskToBeAdded)
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

            <button onClick={()=> handleDeleteTask(task.id)}>Delete Task</button>
            <Link to = {`/tasks/edit/${task.id}`} className="edit-link">Edit</Link>
          </section>
        ))
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

     //<button onClick={()=> handleEditTask(task.id)}>Edit Task</button>


     // USER BUTTON

    /*<button onClick={handleRetrieveUsers}>Click to render user</button>
      <button
      onClick={handleAddTask}>Click to Add Task</button> */
