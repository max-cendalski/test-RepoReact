import './navbar.css'
import {Link} from 'react-router-dom';


export default function Navbar(props) {
    return (
      <nav id='navbar'>
        <Link to="/">Home</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/films">Films</Link>
        <Link to="/places">Places</Link>
      </nav>
    )
}
