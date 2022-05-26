import './navbar.css'
import {Link} from 'react-router-dom';


export default function Navbar(props) {
    return (
      <nav id='navbar'>
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/games">Games</Link>
        <Link to="/quotes">Quotes</Link>
        <Link to="/carousel">Carousel</Link>
        <Link to ="/fade">Fade Test</Link>
      </nav>
    )
}
