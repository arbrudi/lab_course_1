import {Link} from 'react-router-dom';
const AdminNav = () =>{
    return(
        <nav>
            <ul>
                <li><Link to="/">Users</Link></li>
                <li><Link to="/about">Books</Link></li>
                <li><Link to="/books">Articles</Link></li>
                <li><Link to="/articles">Events</Link></li>
                <li><Link to="/userdashboard">Donations</Link></li>
                <li><Link to ="/login">Logout</Link></li>
           
            </ul>
        </nav>
    );
}

export default AdminNav;