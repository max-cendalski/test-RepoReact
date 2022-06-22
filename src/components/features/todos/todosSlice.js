import { createSlice, nanoid } from "@reduxjs/toolkit";
import {  format } from 'date-fns'


const initialState = JSON.parse(localStorage.getItem('todos'))



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
            status: false,
            id: nanoid(),
            date: format(new Date(), "'Wrote down on' MM-dd-yyyy")
          }
        }
      }
    },
    todoStatusChanged: {
      reducer(state, action) {
        const todoToChange = state.todos.findIndex(todo => todo.id == action.payload)
        state.todos[todoToChange].status = !state.todos[todoToChange].status
      }
    },
    removedCompletedTodos: {
      reducer(state, action) {
        const todosToKeep =  state.todos.filter(todo => todo.status === false)
        state.todos = todosToKeep
      }
    }
  }
})




export const selectAllTodos = (state) => state.todos.todos

export const {todoAdded, todoStatusChanged, removedCompletedTodos} = todosSlice.actions

export default todosSlice.reducer


/* const initialState = {
  todos: [
    {
      id: nanoid(),
      title: 'Send resumes',
      status: false,
      date: format(new Date(), "'Wrote down on' MM-dd-yyyy")
    },
     {
      id: nanoid(),
      title: 'Read book',
      status: false,
      date: format(new Date(), "'Wrote down on' MM-dd-yyyy")
    },
  ]
} */
