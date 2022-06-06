import './notes.css'

import {createSlice} from "@reduxjs/toolkit";


const initialState = [
  {
    id: 1,
    title: 'Learn TypeScript',
    text: 'As soon as possible',
    date: 'June 6th',
    author: 'Max'
  },
    {
    id: 2,
    title: 'Play',
    text: 'Diablo Immortal',
    date: 'June 6th',
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
