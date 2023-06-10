import {Link} from 'react-router-dom';
import './components_css/NavBar_style.css';
const NavBar = () =>{
    return(
        <nav className='nav-1'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/Articlelist">Articles</Link></li>
                <li><Link to="/newsList">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/user">My profile</Link></li>
                <li><Link to="/login">Login</Link></li>
           
            </ul>
        </nav>
    );
}

export default NavBar;