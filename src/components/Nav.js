import './Nav.scss'
import { NavLink } from 'react-router-dom'


function Nav() {
    return (
        <div className="topnav">
            <NavLink activeclassname="active" to="/">Home</NavLink>
            <NavLink activeclassname="active" to="/timer">Timer</NavLink>
            <NavLink activeclassname="active" to="/todo">Todo</NavLink>
            <NavLink activeclassname="active" to="/blog">Blog</NavLink>
            <NavLink activeclassname="active" to="/store">Store</NavLink>
        </div>
    )
}


export default Nav