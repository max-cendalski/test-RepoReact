import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import notesReducer from '../features/notes/notesSlice'
import postsReducer from '../features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
  }
})
