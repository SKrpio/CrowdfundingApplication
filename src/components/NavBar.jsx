import {Link, Outlet} from 'react-router-dom'

import useAuth from '../hooks/useauth.js'

function NavBar() {
    const { auth, setAuth } = useAuth()
    
    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null })
    }
    return (
        <div>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                    {/* <li><Link to="/login">Login</Link></li> */}
                    {auth.token ? (
                        <Link to="/" onClick={handleLogout}>
                            Log Out
                        </Link>
                    ) : (
                            <Link to="/login">Login</Link>
                    )}
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default NavBar