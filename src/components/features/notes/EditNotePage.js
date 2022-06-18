import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {selectAllNotes} from './notesSlice'


const EditNotePage = () => {
const {noteId} = useParams()

console.log('noteId',noteId)
const notes = useSelector(selectAllNotes)
console.log('notes',notes)
const noteToEdit = notes.filter(note => note.id === noteId)
console.log('noteToEdit',noteToEdit)
console.log('noteToEdit.author',noteToEdit[0].author)

  return (
    <div>
      <form>
      <h1>{noteToEdit.author}</h1>
        <p>
          <label htmlFor="noteAuthor">{noteToEdit[0].author}</label>
          <input
            type="text"
            value={noteToEdit.author}
            name="author"
            >
          </input>
        </p>
        </form>
    </div>

  )
}


export default EditNotePage
