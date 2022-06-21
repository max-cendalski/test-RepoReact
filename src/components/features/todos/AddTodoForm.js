import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice";


const AddTodo = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [status, setStatus] = useState(false)

  const handleTitleChange = e => setTitle(e.target.value)
  const handleAddTodo = e => {
    e.preventDefault()
    dispatch(todoAdded(title))
  }
  return(
    <>
      <article className="add-todo-form">
        <form>
          <p>
            <label htmlFor="title">Title</label>
            <textarea
              value={title}
              name="title"
              onChange={handleTitleChange}
            ></textarea>
          </p>
          <button onClick={handleAddTodo}>Add Task</button>
        </form>
      </article>
    </>
  )
}

export default AddTodo
