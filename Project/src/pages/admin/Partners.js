import AdminNav from '../../components/adminNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../pages/pages_css/admin_style.css";
import Axios from 'axios';
import React, {useEffect, useState } from 'react';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import "../../components/CRUDS/Events/events.css"

<div>Our Partners</div>
 function Partners() { 
    const [partners, setPartners] = useState([]);

    
    useEffect(()=>{
        Axios.get("http://localhost:3001/admin/partners")
        .then(res => setPartners(res.data))
        .catch(err => console.log(err))
    
    },
    [])
      
    const deletePartners = async(Partner_ID) => 
    {
      try{
        await Axios.delete(`http://localhost:3001/admin/partners/delete/${Partner_ID}`)
        window.location.reload() 
        
      }catch(err){
        console.log(err);
      }
    }
  return ( 
    <>
    <NavBar />
     <div className="admin_page">
     <div className="admin_nav">
     <AdminNav />
   </div>
    <div className="App">
      <div className='users-list'>
      <Link to="/admin/partners/create" className='btn'>
          <button className='btn-new-user rounded'>Create</button>
        </Link>
        <table className='users-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th> 
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
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
                <Link to={`update/${data.Partner_ID}`} className='btn'>
                    <button className='btn-update rounded'>Update</button>
                  </Link>
                  <button className='btn-delete rounded'onClick={e => deletePartners(data.Partner_ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
     </div>
    </div>

       
      <Footer />
</>
  )
}
export default Partners