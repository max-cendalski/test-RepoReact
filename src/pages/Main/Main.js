import './main.css'
import Navbar from '../../components/Navbar/Navbar'
import Counter from '../../components/features/counter/Counter'



export default function Main(props) {

  return (
    <article id="main-container">
    <Navbar />
      <h1>Homepage</h1>
      <Counter />
    </article>
  )
}
