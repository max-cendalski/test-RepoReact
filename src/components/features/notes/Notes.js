import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addNote } from "./notesSlice";

const Notes = () => {
const notes = useSelector((state)=> state.notes)
const dispatch = useDispatch()

const [addNote, setAddNote] = useState('')


  return (
    <article>
      <h1>Notes</h1>
      <section>
        <input
          type="text"
          value={addNote}
          onChange={(e)=> setAddNote(e.target.value)}
        />
        <button onClick={dispatch(addNote(addNote))}></button>
      </section>

    </article>
  )
}

export default Notes
