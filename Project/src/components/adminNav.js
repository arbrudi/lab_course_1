import {Link} from 'react-router-dom';
import "./components_css/admin_nav_style.css";

const AdminNav = () =>{
    
    return(
        <nav className="admin-nav-sidebar">
            <ul>
                       
                <li><Link to="/admin">Users</Link></li>
                <li><Link to="/admin/books">Books</Link></li>
                <li><Link to="/admin/articles">Articles</Link></li>
                <li><Link to="/admin/news">News</Link></li>
                <li><Link to="/admin/events">Events</Link></li>
                <li><Link to="/admin/reviews">Reviews</Link></li> 
                <li><Link to="/admin/slidercontroller">Slider controller</Link></li>
                <li><Link to="/admin/Text_section">Text Section</Link></li>
                <li><Link to ="/admin">Logout</Link></li>
            </ul>
        </nav>
    );
  }
  

export default AdminNav;