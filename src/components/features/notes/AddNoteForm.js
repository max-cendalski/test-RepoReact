import { useState } from "react";
import { noteAdded } from "./notesSlice";

const AddNoteForm = ()=> {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  const handleAuthorChange =(e) => setAuthor(e.target.value)
  const handleTitleChange =(e) => setTitle(e.target.value)
  const handleTextChange =(e) => setText(e.target.value)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('whee')
  }

  return (
    <>
      <article>
        <h1>Form</h1>
        <form onSubmit={handleFormSubmit}>
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
          <input
            type="text"
            value={text}
            name="text"
            onChange={handleTextChange}
            >
          </input>
        </p>
        <button>Submit</button>
        </form>
      </article>
    </>
  )
}


export default AddNoteForm;
