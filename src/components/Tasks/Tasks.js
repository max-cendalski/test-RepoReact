import { useState, useEffect } from "react";
import {collection, getDocs,getDoc, addDoc, doc } from 'firebase/firestore';
import {db} from '../../components/firebase/Firebase';



const Tasks = () => {
 const [tasks, setTasks] = useState([])
 const [users, setUsers] = useState([])
 const [user, setUser] = useState([])
 const tasksCollection = collection(db, 'tasks')
 const usersDb = collection(db, 'users')

    useEffect(()  => {
    const getTasks = async() => {
      const tasksData = await getDocs(tasksCollection);
      //const tasksArray = []
      console.log('tasksData',tasksData)
         console.log('tasks.docs',tasksData.docs)
     tasksData.forEach((task) => {
        console.log('task.id',task.id)
        console.log('task.data()',task.data())
      });
      setTasks(tasksData.docs.map((doc) =>({...doc.data(), id: doc.id})))

      //setTasks(tasksArray)
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
  const handleAddTask = async () => {
    try {
      const addTask = await addDoc(tasksCollection, {
        date: 'July 20th',
        note: 'by end of the week',
        title: 'Clean the floor'
      })
      console.log("Task added with ID: ", addTask.id)
    } catch(e) {
      console.error("ERROR: ",e)
    }
  }

  return (
    <article>
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
