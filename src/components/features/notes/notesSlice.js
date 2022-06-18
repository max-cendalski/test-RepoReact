import './notes.css'
import {createSlice, nanoid} from "@reduxjs/toolkit";
import {sub} from 'date-fns'


const initialState = {
  notes: [
 {
    id: nanoid(),
    title: 'Learn TypeScript',
    text: 'As soon as possible',
    author: 'Max',
    date: sub(new Date(), {minutes:30}).toISOString()

  },
    {
    id: nanoid(),
    title: 'Play Video Game',
    text: 'Diablo Immortal',
    author: 'Max',
    date: sub(new Date(), {minutes:20}).toISOString()
  },
      {
    id: nanoid(),
    title: 'Watch movies',
    text: 'The Expanse',
    author: 'Max',
    date: sub(new Date(), {minutes:10}).toISOString()
  }
  ]
}



const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, text, author) {
        return {
          payload: {
            author,
            title,
            text,
            id: nanoid(),
            date: sub(new Date(), {minutes:1}).toISOString()
          }
        }
      }
    },
    noteDeleted: {
      reducer(state, action) {
        console.log(state.notes)
       const noteToRemove = state.notes.findIndex(item => item.id === action.payload )
        state.notes.splice(noteToRemove, 1)
      }
    }
  }
})

export const selectAllNotes = (state) => state.notes.notes

export const {noteAdded, noteDeleted} = notesSlice.actions

export const selectPostById = (state, noteId) =>
  state.notes.find(note => note.id === noteId);


export default notesSlice.reducer
