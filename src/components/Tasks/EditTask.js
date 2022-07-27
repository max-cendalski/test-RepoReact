import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import {db} from '../../components/firebase/Firebase';
import {doc, getDoc, updateDoc} from 'firebase/firestore';

const EditTask = () => {
  const navigate = useNavigate()
  const {taskId} = useParams()

  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [taskToEdit, setTaskToEdit]  = useState(null)
  const submitChangesVisible = [title, note].every(Boolean)

  useEffect(() => {
    const getTask = async () => {
      const taskRef = doc(db, 'tasks',taskId)
      const taskSnap = await getDoc(taskRef)
      setTaskToEdit(taskSnap.data())
      setTitle(taskSnap.data().title)
      setNote(taskSnap.data().note)
    }
    getTask()
  },[])


   const handleTitleChange = e => {
    setTitle(e.target.value)
   }
   const handleNoteChange = e => {
    setNote(e.target.value)
   }

   const handleAddEditedTask = e => {
    e.preventDefault()
     const editTask = async() => {
      const taskToUpdateRef = doc(db, `tasks/${taskId}`)
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
