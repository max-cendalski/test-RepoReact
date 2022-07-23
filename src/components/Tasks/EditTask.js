import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';

const EditTask = () => {
  const navigate = useNavigate()
  const {postId} = useParams()

  const [title, setTitle] = useState('')
  const [taskNote, setTaskNote] = useState('')


   const handleTitleChange = e => {
    setTitle(e.target.value)
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
