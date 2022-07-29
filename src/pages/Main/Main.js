import './main.css'
import Counter from '../../components/features/counter/Counter'
import ThemeContext from '../../context/AuthContext'
import { useSelector, } from 'react-redux'
import { useContext } from 'react'
import {UserContextProvider}  from '../../context/AuthContext'




export default function Main () {
//console.log('this',UserContextProvider)
  return (
    <article id="main-container">
      <h1>Homepage</h1>
      <h3></h3>

      <Counter />
    </article>
  )
}

Main.contextType = UserContextProvider;
