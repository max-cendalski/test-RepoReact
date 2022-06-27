import './todos.css'
import {selectAllTodos, todoStatusChanged, removedCompletedTodos} from './todosSlice'
import { useSelector, useDispatch } from 'react-redux'
import AddTodo from './AddTodoForm'


const Todos = () => {
const dispatch = useDispatch()
const todosToRender = useSelector(selectAllTodos)

const handleStatusChange = (id) => {
  // No need to set and get attribute !!!
  //const todo = e.target.closest('.todo').getAttribute('data-id')
  const todo = id
  dispatch(todoStatusChanged(id))
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

const handleButtonClick = (id) => {
  console.log('id :',id)
}
  return(
    <article className='todos-container'>
      <AddTodo />
      <h1>Todo List</h1>
       {(todosToRender.length > 0) &&
        todosToRender.map(todo => {
         return (

            <section className='todo' key={todo.id}>
              <h2 onClick={()=> handleButtonClick(todo.id)}>{todo.title}</h2>
              {(!todo.status) ? <i onClick={()=>{handleStatusChange(todo.id)}} className="fa-regular fa-2x fa-square"></i> : <i onClick={()=>{handleStatusChange(todo.id)}} className="fa-solid fa-2x fa-square-check"></i>}
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
