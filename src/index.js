import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App.jsx'
import reportWebVitals from './reportWebVitals';
import {store} from '../src/components/App/store'
import {Provider} from 'react-redux';
import { fetchPosts } from './components/features/posts/postsSlice';
import {fetchUsers} from './components/features/users/usersSlice';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { nanoid} from "@reduxjs/toolkit";
import {sub} from 'date-fns'

store.dispatch(fetchPosts())
store.dispatch(fetchUsers())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/* const itemsToCreate = JSON.stringify({
  notes: [
 {
    id: nanoid(),
    title: 'Learn TypeScript',
    text: 'As soon as possible',
    author: 'Max',
    date: sub(new Date(), {minutes:30}).toISOString()

  },
    {
    id: nanoid(),
    title: 'Play Video Game',
    text: 'Diablo Immortal',
    author: 'Max',
    date: sub(new Date(), {minutes:20}).toISOString()
  },
    {
    id: nanoid(),
    title: 'Watch movies',
    text: 'The Expanse',
    author: 'Max',
    date: sub(new Date(), {minutes:10}).toISOString()
  }
  ] */
