import './main.css'
import Counter from '../../components/features/counter/Counter'
import { useSelector, } from 'react-redux'
import { useEffect,useState } from 'react'
import SignIn from '../SignIn/SignInPage'
import {Link} from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext'



const Main  = () => {
  const {user, logOut} = UserAuth()
  const handleSignOut = async () => {
    await logOut(user)
  }

  return (
    <article id="main-container">
      <h1>Homepage</h1>
      {
        user?.displayName ? (
          <button onClick={handleSignOut}>Logout</button>
        ) : (
          <SignIn />
        )
      }
    </article>
  )
}

export default Main;

   //   <Counter />
