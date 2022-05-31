import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: ['Learn Redux']
}

export const notesSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNote:(state, action)=> {
      state.notes.push(action.payload)
    }
  }
})

export const {addNote} = notesSlice.actions

export default notesSlice.reducer
