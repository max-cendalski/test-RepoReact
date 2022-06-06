import { useSelector, useDispatch} from "react-redux"
import { selectAllNotes } from "./notesSlice"

const Notes = () => {
  const notesToRender =  useSelector(selectAllNotes)
  return (
    <main>
      <h1>Notes</h1>
      {
        notesToRender.map(note => {
          return (
            <article className="note-container" key={note.id}>
            <h2>{note.title}</h2>
            <h3>{note.text}</h3>
            <p>{note.author}</p>
            <p>{note.date}</p>
          </article>
          )
        })
      }
    </main>
  )
}


export default Notes




/*
const Notes = () => {
const notes = useSelector((state)=> state.notes.notes)
console.log('notes',notes)
const dispatch = useDispatch()

const [newNote, setNewNote] = useState('')
function handleAddNote() {
  dispatch(addNote(newNote))
  setNewNote('')
}

  return (
    <article>
      <h1>Notes</h1>
      <section>
        <List notes={notes}/>
        <p>
          <input
          type="text"
          value={newNote}
          onChange={(e)=> setNewNote(e.target.value)}
        />
        </p>
        <button onClick={handleAddNote}>Add Note</button>
      </section>
    </article>
  )
}

export default Notes
 */
