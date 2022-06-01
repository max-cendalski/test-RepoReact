import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: '1', title: 'Learning Redux', content: 'Whee'},
  {id: '2', title: 'Slices....', content: 'The more I slice the more I understand'}
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export default  postsSlice.reducer
