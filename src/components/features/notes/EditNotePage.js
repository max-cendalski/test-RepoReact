import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import selectNoteById from './notesSlice'

const EditNotePage = () => {
const{noteId} = useParams()
const {noteidd} = selectNoteById
console.log('esee',selectNoteById)
//const note = useSelector(state) =>

  return (
    <div>
      <h1>Edit Note</h1>
    </div>

  )
}


export default EditNotePage
