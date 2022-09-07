import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useState } from "react";
import {collection, getDocs,getDoc, addDoc, doc, deleteDoc, onSnapshot} from 'firebase/firestore'
import {db} from '../../../components/firebase/Firebase'
import axios  from "axios";
import { UserAuth } from "../../../context/AuthContext";


/*
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = []

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  try {
    const response = await axios.get(USERS_URL)
    return response.data
  } catch(err) {
    return err.message
  }
})

 */
const initialState = []

/*  const tasksCollection = collection(db, 'tasks')
 const usersDb = collection(db, 'users')


 const getTasks = async() => {
  const tasksData = await getDocs(tasksCollection);
  setTasks(tasksData.docs.map((doc) =>({...doc.data(), id: doc.id})))
 };
 */
 export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async() => {
  const tasksCollection = collection(db, 'users')
  console.log('task',tasksCollection)

  try {
    const response = await getDocs(tasksCollection)
    const data = await response.docs.map((doc) => ({...doc.data(), id: doc.id}))
    return data
  } catch(err) {
      return err.message
  }
})

/*   const handleAddTask = e => {
    e.preventDefault()
    const addTask = async () => {
      try {
        const taskToBeAdded = {
          date:'7/20',
          note,
          title
        }
        const addTask = await addDoc(tasksCollection, taskToBeAdded)
        taskToBeAdded.id = addTask.id */
      /*   const newTasksArray = [...tasks,taskToBeAdded]
        setTasks(newTasksArray) */
/*         } catch(e) {
          console.error("ERROR: ",e)
      }
   }
    addTask()
    setTaskNote('')
    setTitle('')
    getTasks()
  }
 */

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload
      })
  }
})

export const selectAllTasks = (state) => state.tasks
export default tasksSlice.reducer
