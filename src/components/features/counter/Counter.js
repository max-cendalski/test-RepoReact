import './counter.css'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset} from "./counterSlice"

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <>
    <article className="counter-container">
      <section className="counter">
        <p>{count}</p>
        <button onClick={()=> dispatch(decrement())}>-</button>
        <button onClick={()=> dispatch(reset())}>RESET</button>
        <button onClick={()=> dispatch(increment())}>+</button>
      </section>
    </article>
    </>
  )
}

export default Counter
