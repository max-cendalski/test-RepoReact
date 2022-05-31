import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addNote } from "./notesSlice";

const Notes = () => {
const notes = useSelector((state)=> state.notes.notes)
console.log('notes',notes)
const dispatch = useDispatch()

const [newNote, setNewNote] = useState('')


  return (
    <article>
      <h1>Notes</h1>
      <section>


      <p>
          <input
          type="text"
          value={newNote}
          onChange={(e)=> setNewNote(e.target.value)}
        />
      </p>

        <button onClick={(e)=> dispatch(addNote(newNote))}>Add Note</button>
      </section>

    </article>
  )
}

export default Notes
/*
<ul>
        {
          notes.map((note,index) => {
            return <li key={index}>{note}</li>
          })
        }
      </ul> */
