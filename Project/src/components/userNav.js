import React from 'react';
import {Link} from 'react-router-dom';

import "./components_css/admin_nav_style.css";


const UserNav = () => {
  return (
            <nav className="admin-nav-sidebar">
            <ul>
                       
                <li><Link to="/admin">User Dashboard</Link></li>
                <li><Link to="/admin">Favorite Books</Link></li>
                <li><Link to="/admin">Favorite Articles</Link></li>
                <li><Link to="/admin">Events</Link></li>
                <li><Link to="/admin">Logout</Link></li>
                
            </ul>
        </nav>

  );
}

export default UserNav;
