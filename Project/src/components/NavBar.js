import {Link} from 'react-router-dom';
import './components_css/NavBar_style.css';
const NavBar = () =>{
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/userdashboard">My profile</Link></li>
                <li><Link to ="/login">Login</Link></li>
                <li><Link to ="/register">Register</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;