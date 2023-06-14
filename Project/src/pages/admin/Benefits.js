import AdminNav from '../../components/adminNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../pages/pages_css/admin_style.css";
import Axios from 'axios';
import React, {useEffect, useState } from 'react';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import "../../components/CRUDS/Events/events.css"

 function Benefits() { 
    const [benefits, setBenefits] = useState([]);

    useEffect(() => {
      Axios.get('http://localhost:3001/admin/benefits')
        .then(res => setBenefits(res.data))
        .catch(err => console.log(err));
    }, []);
    const handleDelete =async (Benefit_ID)=>{
        try{
          await Axios.delete(`http://localhost:3001/admin/benefits/delete/${Benefit_ID}`) 
          window.location.reload() 
        } catch(err){
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
      <Link to="/admin/benefits/createbenefits" className='btn'>
          <button className='btn-new-user rounded'>Create</button>
        </Link>
        <table className='users-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {benefits.map((data, i) => (
              <tr key={i}>
                <td>{data.Benefit_ID}</td>
                <td>
                  {data.Benefit_img && (
                    <img
                    src={data.Benefit_img}
                      alt='Event Image'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  )}
                </td>
                <td>{data.Benefit_title}</td> 
                <td>
                <Link to={`updatebenefits/${data.Benefit_ID}`} className='btn'>
                    <button className='btn-update rounded'>Update</button>
                  </Link>
                  <button className='btn-delete rounded'onClick={e => handleDelete(data.Benefit_ID)}>Delete</button>
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
export default Benefits