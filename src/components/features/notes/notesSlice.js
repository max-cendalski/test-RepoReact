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
        state.notes.push(action.payload)
      },
      prepare(author, title, text) {
        return {
          payload: {
            author,
            title,
            text,
            id: nanoid(),
            date: sub(new Date(), {minutes:1}).toISOString()
          }
        }
      },
    },
    noteDeleted: {
      reducer(state, action) {
        console.log(state.notes)
        const noteToRemove = state.notes.findIndex(item => item.id === action.payload )
        state.notes.splice(noteToRemove, 1)
      }
    },
    noteUpdated: {
      reducer(state, action) {
        const findNotee = state.notes.findIndex(item => item.id === action.payload.id)
        state.notes.splice(findNotee, 1, action.payload)
        console.log('action in reducer',action.payload)
      },
      prepare(author, title, text, noteId) {
        return {
          payload: {
            id: noteId,
            author,
            title,
            text,
            date: sub(new Date(), {minutes: 1}).toISOString()
          }
        }
      }
    }
  }
})

export const selectAllNotes = (state) => state.notes.notes

export const {noteAdded, noteDeleted, noteUpdated} = notesSlice.actions


export default notesSlice.reducer
