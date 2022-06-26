import { createSlice, nanoid } from "@reduxjs/toolkit";
import {  format } from 'date-fns'


const initialState = JSON.parse(localStorage.getItem('todos'))


//console.log('initialState',initialState.todos)

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action) {
        state.todos.push(action.payload)
        const localStorageItems = JSON.parse(localStorage.getItem('todos'))
        localStorageItems.todos.push(action.payload)
        localStorage.setItem('todos',JSON.stringify(localStorageItems))
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
        const arrayToLocalStorage = {todos: []}
        const tempArr = [... initialState.todos]
        let todoToRemove = 0
        for (var i = 0; i < action.payload.length; i++) {
          todoToRemove = tempArr.findIndex(todo =>  todo.id == action.payload[i])
          tempArr.splice(todoToRemove,1)
        }
        arrayToLocalStorage.todos = tempArr
        localStorage.setItem('todos',JSON.stringify(arrayToLocalStorage))
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
