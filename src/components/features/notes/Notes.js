import { useSelector} from "react-redux"
import { selectAllNotes } from "./notesSlice"
import AddNoteForm from "./AddNoteForm"

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
              <h3>{note.text.substring(0, 100)}</h3>
              <p>{note.author}</p>
            </article>
          )
        })
      }
      <AddNoteForm />
    </main>
  )
}


export default Notes
