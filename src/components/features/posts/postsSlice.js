import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns';


const initialState = [
  {id: '1',
   title: 'Learning Redux',
    content: 'Whee',
    date: sub(new Date(), {minutes:10}).toISOString()
  },
  {id: '2', title: 'Slices....',
   content: 'The more I slice the more I understand',
   date: sub(new Date(), {minutes:10}).toISOString()

  }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      // callback to format data and return object as payload
      prepare(title, content, userId) {
        return {
          payload: {
            id:nanoid(),
            title,
            content,
            userId
          }
        }
      }
    }
  }
})

export const selectAllPosts = (state)=> state.posts


export const {postAdded} = postsSlice.actions

export default  postsSlice.reducer
