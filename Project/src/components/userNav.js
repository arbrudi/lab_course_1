import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

import "./components_css/admin_nav_style.css";


const UserNav = () => {
  const navigate = useNavigate()

  const logoutFunction = ()=>{
    localStorage.removeItem("userToken");
    localStorage.removeItem("adminToken");
    setTimeout(() => {navigate("/", {replace:true})}, 400);
    setTimeout(()=> { window.location.reload()},500)
}

  return (
            <nav className="admin-nav-sidebar">
            <ul>
                       
                <li><Link to="/user">User Dashboard</Link></li>
                <li><Link to="/user/FavoriteBook">Favorite Books</Link></li>
                <li><Link to="/user/FavoriteArticle ">Favorite Articles</Link></li>
                <li><Link to="/user/userevents">Events</Link></li>
                <li onClick={()=> logoutFunction()}>Logout</li>
            </ul>
        </nav>

  );
}

export default UserNav;
