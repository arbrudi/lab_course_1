import {Link,useNavigate} from 'react-router-dom';
import "./components_css/admin_nav_style.css";

const AdminNav = () =>{

    const navigate = useNavigate()

    const logoutFunction = ()=>{
        localStorage.removeItem("userToken");
        localStorage.removeItem("adminToken");
        setTimeout(() => {navigate("/login", {replace:true})}, 400);
        setTimeout(()=> { window.location.reload()},500)
    }
    
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
                <li><Link to="/admin/partners">Partners</Link></li>
                <li><Link to="/admin/Text_section">Text Section</Link></li>
                <li><Link to="/admin/contact">Contact Page</Link></li>
                <li onClick={()=> logoutFunction()}>Log out</li>
            </ul>
        </nav>
    );
  }
  

export default AdminNav;