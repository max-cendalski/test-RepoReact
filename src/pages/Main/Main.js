import './main.css'
import Counter from '../../components/features/counter/Counter'
import { useSelector, } from 'react-redux'
import { useEffect,useState } from 'react'



const Main  = () => {
  return (
    <article id="main-container">
      <h1>Homepage</h1>

      <Counter />
    </article>
  )
}

export default Main;
