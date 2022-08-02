import './main.css'
import Counter from '../../components/features/counter/Counter'
import { useSelector, } from 'react-redux'
import { useEffect,useState } from 'react'
import SignIn from '../SignIn/SignInPage'



const Main  = () => {
  return (
    <article id="main-container">
      <h1>Homepage</h1>
      <SignIn />
      <Counter />
    </article>
  )
}

export default Main;
