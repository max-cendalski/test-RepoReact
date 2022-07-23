import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import {db} from '../../components/firebase/Firebase';
import {doc, getDoc} from 'firebase/firestore';

const EditTask = () => {
  const navigate = useNavigate()
  const {taskId} = useParams()

  console.log('psotI',taskId)

  const [title, setTitle] = useState('')
  const [taskNote, setTaskNote] = useState('')
  const [taskToEdit, setTaskToEdit]  = useState(null)


  useEffect(() => {
    const getTask = async () => {
      const taskRef = doc(db, 'tasks',taskId)
      const taskSnap = await getDoc(taskRef)
      setTaskToEdit(taskSnap.data())
      setTitle(taskSnap.data().title)
      setTaskNote(taskSnap.data().note)
    }
    getTask()
  },[])


   const handleTitleChange = e => {
    setTitle(e.target.value)
    console.log('tie',title)
   }
   const handleNoteChange = e => {
    setTaskNote(e.target.value)
   }
   const handleAddEditedTask = e => {
    e.preventDefault()
     /*  const taskToUpdateRef = doc(db, `tasks/${id}`)
      await updateDoc(taskToUpdateRef, {
      date: '8/8',
      title: 'Whee',
      note: 'Wheee'
    }) */

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
            value={taskNote}
            name="taskNote"
            onChange={handleNoteChange}
          ></textarea>
        </p>
          <button onClick={handleAddEditedTask}>Submit changes</button>
        </form>



    </article>
  )
}
export default EditTask;
