import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'

import notesReducer from '../features/notes/notesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    notes: notesReducer
  }
})
