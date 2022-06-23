import './todos.css'
import {selectAllTodos, todoStatusChanged, removedCompletedTodos} from './todosSlice'
import { useSelector, useDispatch } from 'react-redux'
import AddTodo from './AddTodoForm'


const Todos = () => {
const dispatch = useDispatch()
const todosToRender = useSelector(selectAllTodos)

const handleStatusChange = e => {
  const todo = e.target.closest('.todo').getAttribute('data-id')
  dispatch(todoStatusChanged(todo))
}
// Possible easier way to do this !
let checkStatus = false
const checkTodosStatus = () => {
  const checkTodoStatus = todosToRender.filter(todo => todo.status === true)
  if (checkTodoStatus.length > 0) {
    checkStatus = true
  }
}
checkTodosStatus()
const handleRemoveAllTodos = () => {
  const todosToRemove = []
  for (var i = 0; i < todosToRender.length; i++) {
    if (todosToRender[i].status === true) {
      todosToRemove.push(todosToRender[i].id)
    }
  }
  dispatch(removedCompletedTodos(todosToRemove))
}

  return(
    <article className='todos-container'>
      <AddTodo />
      <h1>Todo List</h1>
       {(todosToRender.length > 0) &&
        todosToRender.map(todo => {
         return (
            <section className='todo' data-id={todo.id} key={todo.id}>
              <h2>{todo.title}</h2>
              {(!todo.status) ? <i onClick={handleStatusChange} className="fa-regular fa-2x fa-square"></i> : <i onClick={handleStatusChange} className="fa-solid fa-2x fa-square-check"></i>}
              <p className='todo-date'>{todo.date}</p>
          </section>
         )
        })
      }
      {
        (todosToRender.length > 0) ?
          <button
            onClick={handleRemoveAllTodos}
            className='remove-todos-button'
            disabled={!checkStatus}
            >
            Remove all completed todos
          </button>
        :
        <h1> Todo list is empty!</h1>
      }
    </article>
  )
}

export default Todos
