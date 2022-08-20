import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useState } from "react";
import {collection, getDocs,getDoc, addDoc, doc, deleteDoc, onSnapshot} from 'firebase/firestore';
import {db} from '../../../components/firebase/Firebase'
import axios  from "axios";




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
 export const fetchTasks = createAsyncThunk('tasks/fetchPosts', async() => {
  const tasksCollection = collection(db, 'tasks')
  try {
    const response = await getDocs(tasksCollection)
    const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))

    return data
  } catch(err) {
      return err.message
  }
})


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
