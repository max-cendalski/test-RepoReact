import { createSlice,nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import {sub} from 'date-fns';
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'


const initialState = {
  posts: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
}

// async Thunk
// createAsyncThunk accepts two arguments, first it's string used as prefix for generating
// action type, second payload creator callback. Should return data
export const fetchPosts = createAsyncThunk('posts/fecthPosts', async () => {
  try {
    const response = await axios.get(POSTS_URL)
    return response.data
  } catch (err) {
    return err.message;
  }
})

// new async Thunk for adding new posts
export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
  try {
    const response = await axios.post(POSTS_URL, initialPost)
    return response.data
  } catch (err) {
    return err.message
  }
})

export const updatePost = createAsyncThunk('posts/updatePost', async (initialPost) => {
  const {id} = initialPost;
  try {
    const response = await axios.put(`${POSTS_URL}/${id}`,initialPost)
    return response.data
  } catch (err) {
    //return err.message
    return initialPost;  // just for testing, we can't update API objects
  }
})

  export const deletePost = createAsyncThunk('posts/deletePost', async (initialPost) => {
  const { id } = initialPost;
  try {
    const response = await axios.delete(`${POSTS_URL}/${id}`)
     if (response?.status === 200) return initialPost;
    return `${response?.status}: ${response?.statusText}`;
  } catch (err) {
    return err.message
  }
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // createSlice automatically generates ACTION CREATOR FUNCTION  with the same name (postAdded)
    // postAdded it's REDUCER FUNCTION or just REDUCER
    postAdded: {
      reducer(state, action) {
        // we dispatch action postAdded and it has payload, look what is exported
        state.posts.push(action.payload)
      },
      // callback to format data and return object as payload
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              wine: 0
            }
          }
        }
      }
    },
    reactionAdded(state, action) {
      const {postId, reaction} = action.payload
      const existingPost = state.posts.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    }
  },
  // extraReducers is for actions that weren't define as part of slices reducers
  // builder parameter let as define additional case reducer
  extraReducers(builder) {
    builder
    .addCase(fetchPosts.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded'
      // adding date and reactions
      let min = 1;
      const loadedPosts = action.payload.map(post => {
        post.date = sub(new Date(), {minutes: min++ }).toISOString()
        post.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          wine: 0
        }
        return post;
      })

      //add any fetched posts to the array
      state.posts = state.posts.concat(loadedPosts)
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(addNewPost.fulfilled, (state, action) => {
      action.payload.userId = Number(action.payload.userId);
      action.payload.date = new Date().toISOString();
      action.payload.reactions = {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        wine: 0
      }
      console.log(action.payload)
      state.posts.push(action.payload)
    })
     .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
            console.log('Update could not complete')
            console.log(action.payload)
            return;
        }
        const { id } = action.payload;
        action.payload.date = new Date().toISOString();
        const posts = state.posts.filter(post => post.id !== id);
        state.posts = [...posts, action.payload];
    })
    .addCase(deletePost.fulfilled, (state, action) => {
          if (!action.payload?.id) {
              console.log('Delete could not be completed')
              console.log(action.payload)
              return;
          }
          const { id } = action.payload;
          const posts = state.posts.filter(post => post.id !== id);
          state.posts = posts;
      })

  }
})

//exporting selectors

export const selectAllPosts = (state)=> state.posts.posts
export const getPostsStatus = (state)=> state.posts.status
export const getPostsError = (state)=> state.posts.error

export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id === postId);

export const {postAdded, reactionAdded, } = postsSlice.actions

export default  postsSlice.reducer
