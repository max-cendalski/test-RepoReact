import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'



const initialState = {
  todos: [
    {
      id: nanoid(),
      title: 'Send resumes',
      completed: false,
      date: sub(new Date(), {minutes: 10}).toISOString()
    },
     {
      id: nanoid(),
      title: 'Read book',
      completed: false,
      date: sub(new Date(), {minutes: 10}).toISOString()
    },
  ]
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action) {
        state.todos.push(action.payload)
      },
      prepare(title,status) {
        return {
          payload: {
            title,
            completed: false,
            id: nanoid(),
            date: sub(new Date(), {minutes: 1}).toISOString()
          }
        }
      }

    }
  }})


export const selectAllTodos = (state) => state.todos.todos

export const {todoAdded} = todosSlice.actions

export default todosSlice.reducer
