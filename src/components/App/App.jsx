import { Routes, Route} from 'react-router-dom';
import Layout from '../Layout'
import Main from '../../pages/Main/Main.js';
import Places from '../../pages/Places/Places.js'
import Games from '../../pages/Games/Games.js'
import Carousel from '../Carousel/Carousel.js';
import FadeTest from '../FadeTest/FadeTest.js';
import Quotes from '../../pages/Quotes/Quotes.js'
import Counter  from '../features/counter/Counter.js';
import PostsList from '../features/posts/PostsList.js';
import Notes from '../features/notes/Notes.js'
import SinglePostPage from '../features/posts/SinglePostPage.js';
import AddPostForm from '../features/posts/AddPostForm';
import EditPostForm from '../features/posts/EditPostForm.js';
import EditNotePage from '../features/notes/EditNotePage'
import Todos from '../features/todos/Todos';
import { nanoid } from '@reduxjs/toolkit';
import format from 'date-fns/format';

export default function App() {
  const data=[{
    country:'Japan',
    city: 'Tokyo'
  },
{
    country:'United States',
    city: 'Los Angeles'
  },
{
    country:'Poland',
    city: 'Lodz'
  },
  {
    country:'Norway',
    city: 'Trondheim'
  },
{
    country:'Australia',
    city: 'Sydney'
  }]

  const saveToLocalStorage = {
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
  ]}


 localStorage.setItem('todos',JSON.stringify(saveToLocalStorage));


  return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element = {<Main data={data}/>} />
            <Route path="/postslist" element={<PostsList />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/places" element={<Places places={data}/>} />
            <Route path="/fadetest" element={<FadeTest />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/games" element={<Games />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="post">
              <Route index element={<AddPostForm />} />
              <Route path=":postId" element={<SinglePostPage />} />
               <Route path="edit/:postId" element={<EditPostForm />} />
            </Route>
            <Route path="notes">
              <Route index element={<Notes />} />
              <Route path="edit/:noteId" element={<EditNotePage />} />
            </Route>
          </Route>
        </Routes>
  );
}
