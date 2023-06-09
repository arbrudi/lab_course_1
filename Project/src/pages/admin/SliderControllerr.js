import AdminNav from '../../components/adminNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../pages/pages_css/admin_style.css";
import Axios from 'axios';
import React, {useEffect, useState } from 'react';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import "../../components/CRUDS/Events/events.css"

 function SliderController() { 
    const [slidercontroller, setSliderController] = useState([]);

    
    useEffect(()=>{
        Axios.get("http://localhost:3001/admin/slidercontroller")
        .then(res => setSliderController(res.data))
        .catch(err => console.log(err))
    
    },
    [])
      
    const deleteSliderController = async(Slider_ID) => 
    {
      try{
        await Axios.delete(`http://localhost:3001/admin/slidercontroller/delete/${Slider_ID}`)
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
      <Link to="/admin/slidercontroller/create" className='btn'>
          <button className='btn-new-user rounded'>Create</button>
        </Link>
        <table className='users-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th> 
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {slidercontroller.map((data, i) => (
              <tr key={i}>
                <td>{data.Slider_ID}</td>
                <td>
                  {data.Slider_image && (
                    <img
                    src={data.Slider_image}
                      alt='Slider Image'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  )}
                </td>
                <td>{data.Slider_name}</td>  
                <td>
                <Link to={`update/${data.Slider_ID}`} className='btn'>
                    <button className='btn-update rounded'>Update</button>
                  </Link>
                  <button className='btn-delete rounded'onClick={e => deleteSliderController(data.Slider_ID)}>Delete</button>
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
export default SliderController