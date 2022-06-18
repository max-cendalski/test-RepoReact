import { useSelector, useDispatch} from 'react-redux'
import { selectAllNotes, noteDeleted } from './notesSlice'
import AddNoteForm from './AddNoteForm'
import TimeAgo from '../posts/TimeAgo'
import {Link} from 'react-router-dom'
import EditNotePage from './EditNotePage'


const Notes = () => {
  const dispatch = useDispatch()
  const notesToRender =  useSelector(selectAllNotes)
  const sortedNotes = notesToRender.slice().sort((a, b) =>  b.date.localeCompare(a.date) )

  const handleEditNoteButton = () => {
    console.log('edit button clicked')
  }
   const handleDeleteNoteButton = e => {
    const note =  e.target.closest('.note-container').getAttribute('data-id')
    dispatch(noteDeleted(note))
  }
  return (
    <main>
        <AddNoteForm />
      {
        sortedNotes.map(note => {
          return (
            <section className="note-container" data-id={note.id} key={note.id}>
              <h2>{note.title}</h2>
              <h3>{note.text.substring(0, 100)}</h3>
              <p>{note.author}</p>
              <p>
                <TimeAgo timestamp={note.date}/>
              </p>
                <button onClick={handleEditNoteButton}>
                  <Link to = {`/notes/edit/${note.id}`}>Edit</Link>
                </button>
               <button onClick={handleDeleteNoteButton}>Delete</button>
            </section>
          )
        })
      }
    </main>
  )
}


export default Notes
