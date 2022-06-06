import { useSelector } from "react-redux";

const Notes = () => {
  return (
    <main>
      <h1>Notes</h1>
    </main>
  )
}

export default Notes;
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
