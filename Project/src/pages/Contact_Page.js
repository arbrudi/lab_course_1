import { useState, useEffect } from "react";
import Axios from "axios";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

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
        <h1>This is the contact page</h1>
    {contact.map(item => (
                <div key={item.Contact_ID}>
                <p>{item.Contact_email}</p>
                <p>{item.Contact_number}</p>
                <p>{item.Contact_address}</p>
                <p>{item.Contact_city}</p>
                <p>{item.Contact_postal_code}</p>
                 
            </div>
            ))}
    </div>
<Footer />
    </>

    )

}

export default Contact_Page;