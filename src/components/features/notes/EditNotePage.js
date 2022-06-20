import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {selectAllNotes} from './notesSlice'
import { useState } from 'react'
import { noteUpdated} from './notesSlice'



const EditNotePage = () => {
  const {noteId} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const notes = useSelector(selectAllNotes)
  const noteToEdit = notes.filter(note => note.id === noteId)

  const [title, setTitle] = useState(noteToEdit[0].title)
  const [text, setText] = useState(noteToEdit[0].text)
  const [author, setAuthor] = useState(noteToEdit[0].author)

  const handleAuthorChange = e => setAuthor(e.target.value)
  const handleTitleChange = e => setTitle(e.target.value)
  const handleTextChange = e => setText(e.target.value)



 const handleAddNote = e => {
      e.preventDefault()
      dispatch(
       noteUpdated(author,title,text,noteId)
      )

    setTitle('')
    setAuthor('')
    setText('')
    navigate('/notes')
  }


  return (
     <article className="edit-note-container">
        <h1>Add Note Form</h1>
        <form>
        <p>
          <label htmlFor="noteAuthor">Author name</label>
          <input
            type="text"
            value={author}
            name="author"
            onChange={handleAuthorChange}
            >
          </input>
        </p>
           <p>
          <label htmlFor="noteTitle">Title</label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={handleTitleChange}
            >
          </input>
        </p>
           <p>
          <label htmlFor="noteText">Text</label>
          <textarea
            value={text}
            name="text"
            onChange={handleTextChange}
            >
          </textarea>
        </p>
        <button
         onClick={handleAddNote}
         type="button"
         >
         Save note</button>
        </form>
      </article>
  )
}


export default EditNotePage
