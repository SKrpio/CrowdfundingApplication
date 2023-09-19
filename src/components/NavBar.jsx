import {Link, Outlet} from 'react-router-dom'


function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/about">About Us</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default NavBar