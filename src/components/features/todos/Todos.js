import {selectAllTodos} from './todosSlice'
import { useSelector } from 'react-redux'

const Todos = () => {
const todosToRender = useSelector(selectAllTodos)
console.log('todosToRender',todosToRender)
  return(
    <article>
      <h1>Todo List</h1>
      {
        todosToRender.map(todo => {
         return (
            <section key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.date}</p>
          </section>


         )
        })
      }
    </article>
  )
}

export default Todos
