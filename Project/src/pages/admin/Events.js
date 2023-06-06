import AdminNav from '../../components/adminNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../pages/pages_css/admin_style.css";
import Axios from 'axios';
import React, {useEffect, useState } from 'react';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import "../../components/CRUDS/Events/events.css"

 function Events() { 
    const [events, setEvents] = useState([]);

    useEffect(() => {
      Axios.get('http://localhost:3001/')
        .then(res => setEvents(res.data))
        .catch(err => console.log(err));
    }, []);
    const handleDelete =async (Event_ID)=>{
        try{
          await Axios.delete(`http://localhost:3001/admin/events/delete/${Event_ID}`) 
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
      <Link to="/admin/events/createe" className='btn'>
          <button className='btn-new-user rounded'>Create</button>
        </Link>
        <table className='users-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Description</th>
              <th>Date</th> 
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((data, i) => (
              <tr key={i}>
                <td>{data.Event_ID}</td>
                <td>
                  {data.Event_image && (
                    <img
                    src={data.Event_image}
                      alt='Event Image'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  )}
                </td>
                <td>{data.Event_description}</td>
                <td>{data.Event_date}</td> 
                <td>
                <Link to={`update/${data.Event_ID}`} className='btn'>
                    <button className='btn-update rounded'>Update</button>
                  </Link>
                  <button className='btn-delete rounded'onClick={e => handleDelete(data.Event_ID)}>Delete</button>
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
export default Events