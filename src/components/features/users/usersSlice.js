import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState=[
  {id: '0',name: 'Max Cendalski'},
  {id: '1', name:'Dave Gray'},
  {id: '2',name: 'Jeremi Szpak'}
]
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{
  }
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
