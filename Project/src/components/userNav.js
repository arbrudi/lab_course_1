import React from 'react';
import {Link} from 'react-router-dom';

import "./components_css/admin_nav_style.css";


const UserNav = () => {
  return (
            <nav className="admin-nav-sidebar">
            <ul>
                       
                <li><Link to="/user">User Dashboard</Link></li>
                <li><Link to="/user/favorite_books">Favorite Books</Link></li>
                <li><Link to="/user/favorite_articles ">Favorite Articles</Link></li>
                <li><Link to="/user/events">Events</Link></li>
                <li><Link to="/admin">Logout</Link></li>
              
            </ul>
        </nav>

  );
}

export default UserNav;
