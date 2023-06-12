import { useState, useEffect } from "react";
import Axios from "axios";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import './pages_css/Contact_Page.css';

const Contact_Page = ()=>{
    const[contact,setContact] = useState([]);

    useEffect (()=>{
      Axios.get('http://localhost:3001/admin/contact')
      .then((res)=>setContact(res.data))
      .catch((err)=>console.log(err));
    },[]);

    if (!contact) {
      return <div>Loading...</div>;
    }
    return(
    <>
    <NavBar />
    <div>
        <h1>Contact Page</h1>
        <div className="c-page">
    {contact.map(item => ( 
      
                <div className="c-container" key={item.Contact_ID}>
                <h1  className="h1C">{item.Contact_city}</h1>
                <p>Email Address: {item.Contact_email}</p>
                <p>Phone Number: {item.Contact_number}</p>
                <p>Physical Address: {item.Contact_address}</p>
                <p>City: {item.Contact_city}</p>
                <p>Postal Code: {item.Contact_postal_code}</p>
                 
            </div>
            ))}
            </div>
    </div>
<Footer />
    </>

    )

}

export default Contact_Page;