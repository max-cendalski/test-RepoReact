import './todos.css'
import {selectAllTodos} from './todosSlice'
import { useSelector } from 'react-redux'
import AddTodo from './AddTodoForm'

const Todos = () => {
const todosToRender = useSelector(selectAllTodos)
console.log('todosToRender',todosToRender)
  return(
    <article className='todos-container'>
      <AddTodo />
      <h1>Todo List</h1>
      {
        todosToRender.map(todo => {
         return (
            <section className='todos-list' key={todo.id}>
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
