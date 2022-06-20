import { useState } from "react";
import { useDispatch } from "react-redux";


const AddTodo = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [status, setStatus] = useState(false)

  const handleTitleChange = (e) => setTitle(e.target.value)
  return(
    <>
      <article className="add-todo-form">
        <form>
          <p>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              name="title"
              onChange={handleTitleChange}
            ></input>
          </p>
        </form>
      </article>
    </>
  )
}

export default AddTodo
