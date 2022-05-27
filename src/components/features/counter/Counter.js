import './counter.css'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./counterSlice"
import Navbar from '../../Navbar/Navbar'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <>
    <Navbar />
    <article className="counter-container">
      <section className="counter">
        <p>{count}</p>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
      </section>
    </article>
    </>
  )
}

export default Counter
