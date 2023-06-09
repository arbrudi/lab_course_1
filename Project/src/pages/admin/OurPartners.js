import AdminNav from '../../components/adminNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../pages/pages_css/admin_style.css";
import Axios from 'axios';
import React, {useEffect, useState } from 'react';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import "../../components/CRUDS/Events/events.css"

 function OurPartners() { 
    const [partners, setPartners] = useState([]);

    
    useEffect(()=>{
        Axios.get("http://localhost:3001/admin/partners")
        .then(res => setPartners(res.data))
        .catch(err => console.log(err))
    
    },
    [])
      
 
  return ( 
    <>
    <NavBar />
     <div className="admin_page">
     <div className="admin_nav">
     <AdminNav />
   </div>
    <div className="App">
      <div className='users-list'>
   
          <tbody>
            {partners.map((data, i) => (
              <tr key={i}>
                <td>{data.Partner_ID}</td>
                <td>
                  {data.Partner_image && (
                    <img
                    src={data.Partner_image}
                      alt='Partner Image'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  )}
                </td> 
                <td>{data.Partner_name}</td> 
                <td> {data.Partner_description}</td>
                <td> 
               
                </td>
              </tr>
            ))}
          </tbody>
      
      </div> 
     </div>
    </div>

       
      <Footer />
</>
  )
}
export default OurPartners