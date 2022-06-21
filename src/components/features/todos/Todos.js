import './todos.css'
import {selectAllTodos} from './todosSlice'
import { useSelector } from 'react-redux'
import AddTodo from './AddTodoForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <article className='todo' data-id={todo.id} key={todo.id}>
              <h3>{todo.title}</h3>
              {(!todo.completed) ? <i className="fa-regular fa-lg fa-square"></i> : <i className="fa-solid fa-lg fa-square-check"></i>}
              <p className='todo-date'>{todo.date}</p>


          </article>
         )
        })
      }
    </article>
  )
}

export default Todos
