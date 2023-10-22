import {Link, Outlet} from 'react-router-dom'

import useAuth from '../hooks/useauth.js'


function NavBar() {
    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    return (
        <div>
            <nav>
                <ul class="nav-menu"> 
                    <li><Link to="/">Home</Link></li>
                    {auth.token ? (
                        <Link to="/" onClick={handleLogout}>
                            LogOut
                        </Link>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}
                    <li><Link to="/about">About Us</Link></li>
                    {/* <li><Link to="/projects">Projects</Link></li> */}
                    <li><Link to="/pledges">Pledge</Link></li>
                    {/* <li><Link to="/account">Create Account</Link></li> */}
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;
