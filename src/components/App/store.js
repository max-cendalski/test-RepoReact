import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import notesReducer from '../features/notes/notesSlice'
import todosReducer from '../features/todos/todosSlice'
import tasksReducer from '../features/tasks/tasksSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    notes: notesReducer,
    todos: todosReducer,
    tasks: tasksReducer
  }
})
