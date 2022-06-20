import './navbar.css'
import {Link} from 'react-router-dom';


export default function Navbar(props) {
    return (
      <nav id='navbar'>
        <Link to="/">Home</Link>
        <Link to="/places">Places</Link>
        <Link to="/games">Games</Link>
        <Link to="/quotes">Quotes</Link>
        <Link to="/carousel">Carousel</Link>
        <Link to ="/fade">Fade Test</Link>
        <Link to ="/test">Counter</Link>
        <Link to ="/notes">Notes</Link>
        <Link to ="/postslist">Posts List</Link>
        <Link to ="/todos">Todos</Link>
      </nav>
    )
}
