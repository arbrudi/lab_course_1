import {Link} from 'react-router-dom';
import "./components_css/admin_nav_style.css";

const AdminNav = () =>{
    
    return(
        <nav className="admin-nav-sidebar">
            <ul>
                       
                <li><Link to="/admin">Users</Link></li>
                <li><Link to="/admin/books">Books</Link></li>
                <li><Link to="/admin/articles">Articles</Link></li>
                <li><Link to="/admin/events">Events</Link></li>
                <li><Link to="/admin/donations">Donations</Link></li>
                <li><Link to ="/admin">Logout</Link></li>
            </ul>
        </nav>
    );
  }
  

export default AdminNav;