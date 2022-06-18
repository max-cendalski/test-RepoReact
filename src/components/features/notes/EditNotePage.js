import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {selectAllNotes} from './notesSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'


const EditNotePage = () => {
const {noteId} = useParams()
const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  const handleAuthorChange = e => setAuthor(e.target.value)
  const handleTitleChange = e => setTitle(e.target.value)
  const handleTextChange = e => setText(e.target.value)

  const notes = useSelector(selectAllNotes)
  const noteToEdit = notes.filter(note => note.id === noteId)

 const handleAddNote = () => {
    if (title && text && author) {
      dispatch(
       // noteAdded(title, text, author)
      )
    }
    setTitle('')
    setAuthor('')
    setText('')
  }


  return (
     <article className="edit-note-container">
        <h1>Add Note Form</h1>
        <form>
        <p>
          <label htmlFor="noteAuthor">Author name</label>
          <input
            type="text"
            value={noteToEdit[0].author}
            name="author"
            onChange={handleAuthorChange}
            >
          </input>
        </p>
           <p>
          <label htmlFor="noteTitle">Title</label>
          <input
            type="text"
            value={noteToEdit[0].title}
            name="title"
            onChange={handleTitleChange}
            >
          </input>
        </p>
           <p>
          <label htmlFor="noteText">Text</label>
          <textarea
            value={noteToEdit[0].text}
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
