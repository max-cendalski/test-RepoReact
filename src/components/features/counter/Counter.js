import './counter.css'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "./counterSlice"

export const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <article className="counter-container">
      <section className="counter">
        <p>{count}</p>
        <button onClick={()=> dispatch(increment)}>+</button>
        <button onClick={()=> dispatch(decrement)}>-</button>
      </section>

    </article>
  )
}
