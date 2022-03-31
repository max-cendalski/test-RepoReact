import './navbar.css'
import {Link} from 'react-router-dom';


export default function Navbar(props) {
    return (
      <nav className='navbar'>
        <Link to="/films">Films</Link>
        <Link to="/places">Places</Link>
        <Link to="/home">Home</Link>
      </nav>
    )
}
