import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import {db} from '../../components/firebase/Firebase';
import {doc, getDoc, updateDoc, collection} from 'firebase/firestore';
import { UserAuth } from '../../context/AuthContext';

const EditTask = () => {
  const {user} = UserAuth()

  const navigate = useNavigate()
  const {taskId} = useParams()

  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [taskToEdit, setTaskToEdit]  = useState(null)
  const submitChangesVisible = [title, note].every(Boolean)


  const getTask = async () => {
      const tasksRef = collection(db,'users',`${user.uid}/tasks`)
      const taskRef = doc(db,"users",`${user.uid}/tasks`, `${taskId}`)
      const taskSnap = await getDoc(taskRef,`${taskId}`)
      setTaskToEdit(taskSnap.data())
      setNote(taskSnap.data().note)
      setTitle(taskSnap.data().title)
    }

  useEffect(() => {
    getTask()
  },[])


   const handleTitleChange = e => setTitle(e.target.value)
   const handleNoteChange = e => setNote(e.target.value)


   const handleAddEditedTask = e => {
    e.preventDefault()
     const editTask = async() => {
      const taskToUpdateRef = doc(db,"users",`${user.uid}/tasks`, `${taskId}`)
      await updateDoc(taskToUpdateRef, {
      title,
      note
    })
    }
    editTask()
    navigate('/tasks')
  }



  if (!taskToEdit) return <p>Loading...</p>
  return (
    <article className="edit-task-container">
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
          disabled={!submitChangesVisible}
          onClick={handleAddEditedTask}
          >Submit changes</button>
        </form>
    </article>
  )
}
export default EditTask;
