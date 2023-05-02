import {Link} from 'react-router-dom';
import "./components_css/admin_nav_style.css";

const AdminNav = () =>{
    return(
        <nav className="admin-nav-sidebar">
            <ul>
                <li><Link to="/admin">Users</Link></li>
                <li><Link to="/admin">Books</Link></li>
                <li><Link to="/admin">Articles</Link></li>
                <li><Link to="/admin">Events</Link></li>
                <li><Link to="/admin">Donations</Link></li>
                <li><Link to ="/admin">Logout</Link></li>
            </ul>
        </nav>
    );
  }
  

export default AdminNav;