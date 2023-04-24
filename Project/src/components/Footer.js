import {Link} from 'react-router-dom';
import './components_css/Footer_style.css';

const Footer = ()=>{
    return(
        <>
        <div className="foot">
            <div className="foot-1">
                <ul>
                    <li>Contact us!</li>
                    <li>elib@gmail.com</li>
                    <li>+383 49 123 123</li>
                    <li>Prishtine</li>
                </ul>
            </div>
            <div className="foot-2">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/articles">Articles</Link></li>
               
            </ul>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© elibrary 2023</p>
        </div>
        </>

    )
}

export default Footer;