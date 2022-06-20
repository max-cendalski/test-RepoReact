import { useState } from "react";
import { noteAdded } from "./notesSlice";
import { useDispatch } from "react-redux";

const AddNoteForm = ()=> {

  const dispatch = useDispatch()

  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const handleAuthorChange = e => setAuthor(e.target.value)
  const handleTitleChange = e => setTitle(e.target.value)
  const handleTextChange = e => setText(e.target.value)

  const saveNotesVisible = [author, title, text].every(Boolean)


  const handleAddNote = () => {
    if (title && text && author) {
      dispatch(
        noteAdded(title, text, author)
      )
    }
    setTitle('')
    setAuthor('')
    setText('')
  }

  return (
    <>
      <article className="add-note-container">
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
         disabled={!saveNotesVisible}
         >
         Save note</button>
        </form>
      </article>
    </>
  )
}


export default AddNoteForm;
