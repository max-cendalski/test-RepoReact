
import Counter from '../../components/features/counter/Counter'
import { useSelector, } from 'react-redux'
import { useEffect,useState, useContext } from 'react'
import SignIn from '../SignIn/SignInPage'
import {Link} from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext'



const Main  = () => {
  const {user, logOut} = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log('ERROR: ', error)
    }
  }

  return (
    <article id="main-container">
      <h1>Homepage</h1>
      {
        user?.displayName ? (
          <section>
            <button onClick={handleSignOut}>Logout</button>
            <h2>Hello {user.displayName}</h2>
          </section>
        ) : (
          <SignIn />
        )
      }
    </article>
  )
}

export default Main;
