import './main.css'
import Counter from '../../components/features/counter/Counter'
import { useSelector, } from 'react-redux'
import List from '../../components/List'



export default function Main(props) {
const notes = useSelector((state)=> state.notes.notes)
console.log('notes',notes)
  return (
    <article id="main-container">
      <h1>Homepage</h1>
      <Counter />
      <List notes={notes} />
    </article>
  )
}
