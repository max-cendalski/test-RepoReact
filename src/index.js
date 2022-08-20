import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App.jsx'
import reportWebVitals from './reportWebVitals';
import {store} from '../src/components/App/store'
import {Provider} from 'react-redux';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthContextProvider } from '../src/context/AuthContext';
import {fetchPosts} from './components/features/posts/postsSlice';
import {fetchUsers} from './components/features/users/usersSlice';
import {fetchTasks} from './components/features/tasks/tasksSlice';


store.dispatch(fetchPosts())
store.dispatch(fetchUsers())
store.dispatch(fetchTasks())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
