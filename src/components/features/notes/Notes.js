import { useSelector, useDispatch} from 'react-redux'
import { selectAllNotes, noteDeleted } from './notesSlice'
import AddNoteForm from './AddNoteForm'
import TimeAgo from '../posts/TimeAgo'
import {Link} from 'react-router-dom'
import EditNotePage from './EditNotePage'


const Notes = () => {
  const dispatch = useDispatch()
  const notesToRender =  useSelector(selectAllNotes)
  console.log('notesToRender',notesToRender)
  const sortedNotes = notesToRender.slice().sort((a, b) =>  b.date.localeCompare(a.date) )


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
                  <Link to = {`/notes/edit/${note.id}`} className="edit-link">Edit</Link>
               <button onClick={handleDeleteNoteButton}>Delete</button>
            </section>
          )
        })
      }
    </main>
  )
}


export default Notes
