import { createSlice, nanoid } from "@reduxjs/toolkit";
import {  format } from 'date-fns'


const initialState = JSON.parse(localStorage.getItem('todos'))


console.log('initialState',initialState.todos)

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
        const todosToKeep =  state.todos.filter(todo => todo.status === false)
        state.todos = todosToKeep
        console.log('actionpayload',action.payload)
        const todosToKeepInLC = {todos: []}
        let newArray = initialState.todos
        for (var i = 0; i < initialState.todos.length; i++) {
          for (var j = 0; j < action.payload.length; j++) {
            if (initialState.todos[i].id == action.payload[j]) {
              newArray = initialState.todos.slice(i,i +1)
              //newArray = initialState.todos[i]
              console.log('initalstatetodo',initialState.todos)
              console.log('newArray',newArray)
              //console.log('initalstatetodoat0',initialState.todos[0])
            }
          }
        }

        }
      }

        /* const todosToKeepInLocalStorage = initialState.todos.filter(todo => todo.id != action.payload)
        console.log('whe',todosToKeepInLocalStorage)
        localStorage.setItem('todoss',JSON.stringify(todosToKeep))
 */
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
