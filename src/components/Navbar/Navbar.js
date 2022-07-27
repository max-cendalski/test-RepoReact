import './navbar.css'
import {NavLink} from 'react-router-dom';


export default function Navbar(props) {
    return (
      <nav id='navbar'>
        <NavLink to="/" className={({isActive}) => (isActive ? "active-link" : 'none')}>Home</NavLink>
        <NavLink to="/games" className={({isActive}) => (isActive ? "active-link" : 'none')}>Games</NavLink>
        <NavLink to="/quotes" className={({isActive}) => (isActive ? "active-link" : 'none')}>Quotes</NavLink>
        <NavLink to="/carousel" className={({isActive}) => (isActive ? "active-link" : 'none')}>Carousel</NavLink>
        <NavLink to ="/fadetest" className={({isActive}) => (isActive ? "active-link" : 'none')}>Fade Test</NavLink>
        <NavLink to ="/test" className={({isActive}) => (isActive ? "active-link" : 'none')}>Counter</NavLink>
        <NavLink to ="/notes" className={({isActive}) => (isActive ? "active-link" : 'none')}>Notes</NavLink>
        <NavLink to ="/postslist" className={({isActive}) => (isActive ? "active-link" : 'none')}>Posts List</NavLink>
        <NavLink to ="/todos" className={({isActive}) => (isActive ? "active-link" : 'none')}>Todos</NavLink>
        <NavLink to ="/tasks" className={({isActive}) => (isActive ? "active-link" : 'none')}>Tasks</NavLink>
      </nav>
    )
}

//     <NavLink to="/places" className={({isActive}) => (isActive ? "active-link" : 'none')}>Places</NavLink>
