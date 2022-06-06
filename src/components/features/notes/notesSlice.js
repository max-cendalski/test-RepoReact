import './notes.css'
import {createSlice, nanoid} from "@reduxjs/toolkit";
import {sub} from 'date-fns'


const initialState = [
  {
    id: nanoid(),
    title: 'Learn TypeScript',
    text: 'As soon as possible',
    date: sub(new Date(), {minutes: 10}).toISOString(),
    author: 'Max'
  },
    {
    id: nanoid(),
    title: 'Play',
    text: 'Diablo Immortal',
    date: sub(new Date(), {minutes: 5}).toISOString(),
    author: 'Max'
  }
]

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded: {
      reducer(state, action) {
        state.push(action.payload)
      }
    }
  }
})

export const selectAllNotes = (state) => state.notes

export const {noteAdded} = notesSlice.actions


export default notesSlice.reducer
