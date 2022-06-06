import './notes.css'
import {createSlice, nanoid} from "@reduxjs/toolkit";
import {sub} from 'date-fns'


const initialState = [
  {
    id: nanoid(),
    title: 'Learn TypeScript',
    text: 'As soon as possible',
    author: 'Max',
    date: sub(new Date(), {minutes:30}).toISOString()

  },
    {
    id: nanoid(),
    title: 'Play',
    text: 'Diablo Immortal',
    author: 'Max',
    date: sub(new Date(), {minutes:20}).toISOString()
  }
]

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
            date: sub(new Date(), {minutes:10}).toISOString()
          }
        }
      }
    }
  }
})

export const selectAllNotes = (state) => state.notes

export const {noteAdded} = notesSlice.actions


export default notesSlice.reducer

