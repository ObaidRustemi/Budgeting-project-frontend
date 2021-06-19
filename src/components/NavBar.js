import {NavLink} from "react-router-dom"
import "./navbar.css"
const NavBar = () => {
    return(
        <nav className="navbar">
            <NavLink to="/transactions">Budget App</NavLink>
            <NavLink to="/transactions/new">NEW TRANSACTION</NavLink>

        </nav>
    )
}

export default NavBar