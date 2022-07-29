import './main.css'
import Counter from '../../components/features/counter/Counter'
import { useSelector, } from 'react-redux'
import { useEffect,useState } from 'react'
import { useContext } from 'react'
import { UserAuth} from '../../context/AuthContext'




const Main  = () => {

  const {name, lastName} = UserAuth()

  return (
    <article id="main-container">
      <h1>Homepage</h1>
      <h2>{name}</h2>
      <h2>{lastName}</h2>

      <Counter />
    </article>
  )
}

export default Main;
